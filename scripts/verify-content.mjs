import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import vm from "node:vm";

const repositoryDirectory = resolve(import.meta.dirname, "..");
const sourceDirectory = resolve(process.argv[2] ?? join(repositoryDirectory, ".."));
const context = { window: {} };

vm.createContext(context);
vm.runInContext(readFileSync(join(repositoryDirectory, "slides-data.js"), "utf8"), context);

const course = context.window.CPP_COURSE;
const failures = [];

function normalize(value) {
    return value
        .replace(/^\*\*(.+)\*\*\s*$/gm, "$1")
        .replace(/\s+/g, " ")
        .trim();
}

const contentLessons = course.lessons.filter(lesson => lesson.kind === "lesson");
const examinations = course.lessons.filter(lesson => lesson.kind === "exam");

for (const lesson of contentLessons) {
    const source = readFileSync(join(sourceDirectory, lesson.sourceFile), "utf8").replace(/\r\n/g, "\n");
    const theoryMarker = source.match(/^## 2\. Treść dydaktyczna\s*$/m);
    const homeworkMarker = source.match(/^## 3\. Zadania do samodzielnego wykonania\s*$/m);
    const theory = source.slice(theoryMarker.index + theoryMarker[0].length, homeworkMarker.index).trim();
    const homework = source.slice(homeworkMarker.index + homeworkMarker[0].length).trim();
    const theorySections = lesson.sections.filter(section => section.kind !== "homework");
    const generatedTheory = theorySections
        .map(section => `${section.title}\n${section.markdown}`)
        .join("\n");
    const generatedHomework = lesson.sections.find(section => section.kind === "homework")?.markdown ?? "";

    if (normalize(theory) !== normalize(generatedTheory)) {
        failures.push(`Niezgodna treść dydaktyczna: ${lesson.sourceFile}`);
    }

    if (normalize(homework) !== normalize(generatedHomework)) {
        failures.push(`Niezgodne zadania samodzielne: ${lesson.sourceFile}`);
    }
}

const examinationNumbers = new Set([6, 12, 18, 24, 30]);

if (contentLessons.length !== 25) {
    failures.push(`Nieprawidłowa liczba lekcji dydaktycznych: ${contentLessons.length}.`);
}

if (examinations.length !== 5) {
    failures.push(`Nieprawidłowa liczba slajdów sprawdzianowych: ${examinations.length}.`);
}

for (const examination of examinations) {
    if (!examinationNumbers.has(examination.number)) {
        failures.push(`Sprawdzian w nieprawidłowym miejscu: ${examination.number}.`);
    }

    if (examination.sections.length !== 0) {
        failures.push(`Sprawdzian ${examination.number} ma więcej niż jeden slajd.`);
    }

    const expectedTopics = contentLessons
        .filter(lesson => lesson.number >= examination.number - 5 && lesson.number < examination.number)
        .map(({ number, title }) => ({ number, title }));

    if (JSON.stringify(examination.exam.topics) !== JSON.stringify(expectedTopics)) {
        failures.push(`Niezgodny zakres sprawdzianu ${examination.number}.`);
    }
}

if (JSON.stringify(course.lessons).includes("Kartkówka")) {
    failures.push("W danych znalazła się kartkówka.");
}

if (course.meta.teacher !== "por. Jakub GRĄTKIEWICZ") {
    failures.push("Niezgodne dane prowadzącego.");
}

if (course.meta.email !== "jakub.gratkiewicz@wat.edu.pl") {
    failures.push("Niezgodny adres e-mail.");
}

console.log(`Spotkania: ${course.lessons.length}`);
console.log(`Lekcje dydaktyczne: ${contentLessons.length}`);
console.log(`Slajdy sprawdzianowe: ${examinations.length}`);
console.log(`Elementy lekcji: ${course.meta.sectionCount}`);
console.log(`Niezgodności treści: ${failures.length}`);

for (const failure of failures) {
    console.error(failure);
}

if (failures.length > 0) {
    process.exitCode = 1;
}
