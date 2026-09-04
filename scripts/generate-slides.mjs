import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryDirectory = resolve(scriptDirectory, "..");
const sourceDirectory = resolve(process.argv[2] ?? join(repositoryDirectory, ".."));
const outputPath = join(repositoryDirectory, "slides-data.js");

const examinationNumbers = new Set([6, 12, 18, 24, 30]);

function cleanHeading(value) {
    return value
        .replace(/^#\s+/, "")
        .replace(/^Lekcja\s+\d+\s+[–-]\s+/, "")
        .trim();
}

function slugify(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/`/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function splitTheoryIntoSections(markdown) {
    const sections = [];
    const lines = markdown.split("\n");
    let title = "Wprowadzenie";
    let context = "";
    let collected = [];
    let insideFence = false;
    let previousTopic = "";
    let sectionNumber = 0;

    function flush() {
        const body = collected.join("\n").trim();

        if (!body) {
            collected = [];
            return;
        }

        sectionNumber++;
        const normalizedTitle = title.replace(/`/g, "").toLocaleLowerCase("pl");
        const kind = normalizedTitle === "zadania" ? "tasks" : "theory";

        sections.push({
            id: `${String(sectionNumber).padStart(2, "0")}-${slugify(title) || "sekcja"}`,
            title,
            context: kind === "tasks" ? context : "",
            kind,
            markdown: body
        });

        collected = [];
    }

    for (const line of lines) {
        if (/^```/.test(line.trim())) {
            insideFence = !insideFence;
            collected.push(line);
            continue;
        }

        const headingMatch = !insideFence ? line.match(/^\*\*(.+)\*\*\s*$/) : null;

        if (headingMatch) {
            flush();
            title = headingMatch[1].trim();

            if (title.replace(/`/g, "").toLocaleLowerCase("pl") === "zadania") {
                context = previousTopic;
            }
            else {
                previousTopic = title;
                context = "";
            }
        }
        else {
            collected.push(line);
        }
    }

    flush();
    return sections;
}

function readLesson(fileName) {
    const match = fileName.match(/^(\d{2})_.*\.md$/);

    if (!match) {
        return null;
    }

    const number = Number(match[1]);

    if (number === 0 || examinationNumbers.has(number)) {
        return null;
    }

    const source = readFileSync(join(sourceDirectory, fileName), "utf8").replace(/\r\n/g, "\n");
    const firstLine = source.split("\n", 1)[0];
    const title = cleanHeading(firstLine);
    const theoryMarker = source.match(/^## 2\. Treść dydaktyczna\s*$/m);
    const homeworkMarker = source.match(/^## 3\. Zadania do samodzielnego wykonania\s*$/m);

    if (!theoryMarker || !homeworkMarker || homeworkMarker.index <= theoryMarker.index) {
        throw new Error(`Nie rozpoznano trzech części lekcji w pliku ${fileName}.`);
    }

    const theoryStart = theoryMarker.index + theoryMarker[0].length;
    const theoryMarkdown = source.slice(theoryStart, homeworkMarker.index).trim();
    const homeworkStart = homeworkMarker.index + homeworkMarker[0].length;
    const homeworkMarkdown = source.slice(homeworkStart).trim();
    const sections = splitTheoryIntoSections(theoryMarkdown);

    sections.push({
        id: `${String(sections.length + 1).padStart(2, "0")}-zadania-do-samodzielnego-wykonania`,
        title: "Zadania do samodzielnego wykonania",
        context: "",
        kind: "homework",
        markdown: homeworkMarkdown
    });

    const selectedContent = `${theoryMarkdown}\n${homeworkMarkdown}`;

    return {
        number,
        id: `lekcja-${String(number).padStart(2, "0")}`,
        kind: "lesson",
        title,
        sourceFile: fileName,
        checksum: createHash("sha256").update(selectedContent).digest("hex").slice(0, 12),
        sections
    };
}

function readExamination(fileName) {
    const match = fileName.match(/^(\d{2})_.*\.md$/);

    if (!match) {
        return null;
    }

    const number = Number(match[1]);

    if (!examinationNumbers.has(number)) {
        return null;
    }

    const source = readFileSync(join(sourceDirectory, fileName), "utf8").replace(/\r\n/g, "\n");
    const heading = source.match(/^#\s+(.+)$/m)?.[1]?.trim();

    if (!heading) {
        throw new Error(`Brak nagłówka sprawdzianu w pliku ${fileName}.`);
    }

    const [title, ...scopeParts] = heading.split(/\s+[–—-]\s+/);

    return {
        number,
        id: `sprawdzian-${String(number).padStart(2, "0")}`,
        kind: "exam",
        title,
        sourceFile: fileName,
        exam: {
            duration: "45 minut",
            points: 20,
            sourceScope: scopeParts.join(" – ").trim(),
            topics: []
        },
        sections: []
    };
}

const sourceFiles = readdirSync(sourceDirectory)
    .filter((fileName) => /^\d{2}_.*\.md$/.test(fileName));

const contentLessons = sourceFiles
    .map(readLesson)
    .filter(Boolean)
    .sort((first, second) => first.number - second.number);

const examinations = sourceFiles
    .map(readExamination)
    .filter(Boolean)
    .sort((first, second) => first.number - second.number);

for (const examination of examinations) {
    examination.exam.topics = contentLessons
        .filter(
            (lesson) => lesson.number >= examination.number - 5 && lesson.number < examination.number
        )
        .map(({ number, title }) => ({ number, title }));

    if (examination.exam.topics.length !== 5) {
        throw new Error(`Sprawdzian ${examination.number} nie ma pięciu poprzedzających lekcji.`);
    }
}

const lessons = [...contentLessons, ...examinations]
    .sort((first, second) => first.number - second.number);

if (contentLessons.length !== 25 || examinations.length !== 5 || lessons.length !== 30) {
    throw new Error(
        `Oczekiwano 25 lekcji i 5 sprawdzianów, znaleziono ${contentLessons.length} lekcji oraz ${examinations.length} sprawdzianów.`
    );
}

const course = {
    meta: {
        title: "Wprowadzenie do programowania z wykorzystaniem języka C++",
        shortTitle: "Wprowadzenie do C++",
        standard: "C++17",
        teacher: "por. Jakub GRĄTKIEWICZ",
        email: "jakub.gratkiewicz@wat.edu.pl",
        lessonCount: contentLessons.length,
        examCount: examinations.length,
        meetingCount: lessons.length,
        sectionCount: contentLessons.reduce((sum, lesson) => sum + lesson.sections.length, 0)
    },
    lessons
};

writeFileSync(
    outputPath,
    `window.CPP_COURSE = ${JSON.stringify(course, null, 2)};\n`,
    "utf8"
);

console.log(
    `Wygenerowano ${course.meta.lessonCount} lekcji, ${course.meta.examCount} slajdów sprawdzianowych i ${course.meta.sectionCount} slajdów treści w ${outputPath}.`
);
