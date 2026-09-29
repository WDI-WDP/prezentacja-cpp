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

function h2Bodies(source) {
    const headings = [...source.matchAll(/^##\s+(.+)$/gm)];

    return headings.map((heading, index) => {
        const start = heading.index + heading[0].length;
        const end = headings[index + 1]?.index ?? source.length;
        return source.slice(start, end).trim();
    }).join("\n");
}

const organizationLessons = course.lessons.filter(lesson => lesson.kind === "organization");
const setupLessons = course.lessons.filter(lesson => lesson.kind === "setup");
const contentLessons = course.lessons.filter(lesson => lesson.kind === "lesson");
const examinations = course.lessons.filter(lesson => lesson.kind === "exam");

if (organizationLessons.length !== 1 || organizationLessons[0].number !== 0) {
    failures.push("Brakuje pojedynczej Lekcji 0 z organizacją zajęć.");
}
else {
    const organization = organizationLessons[0];
    const source = readFileSync(join(sourceDirectory, organization.sourceFile), "utf8").replace(/\r\n/g, "\n");
    const generated = organization.sections.map(section => section.markdown).join("\n");

    if (normalize(h2Bodies(source)) !== normalize(generated)) {
        failures.push(`Niezgodna treść organizacji zajęć: ${organization.sourceFile}`);
    }

    if (organization.sections.length !== 14) {
        failures.push(`Nieprawidłowa liczba elementów Lekcji 0: ${organization.sections.length}.`);
    }
}

if (course.lessons.length !== 33) {
    failures.push(`Nieprawidłowa liczba pozycji w prezentacji: ${course.lessons.length}.`);
}

if (setupLessons.length !== 2 || course.meta.setupCount !== 2
    || setupLessons.map(lesson => lesson.route).join(",") !== "konfiguracja,codeblocks") {
    failures.push("Brakuje dwóch bloków przygotowania w prawidłowej kolejności.");
}

for (const setup of setupLessons) {
    const source = readFileSync(join(repositoryDirectory, setup.sourceFile), "utf8").replace(/\r\n/g, "\n");
    const headings = [...source.matchAll(/^##\s+(.+)$/gm)];
    const generated = setup.sections.map(section => section.markdown).join("\n");
    if (normalize(h2Bodies(source)) !== normalize(generated)
        || headings.length !== setup.sections.length
        || headings.some((heading, i) => heading[1].trim() !== setup.sections[i]?.title)) {
        failures.push(`Niezgodna treść przygotowania: ${setup.sourceFile}`);
    }
}

if (course.meta.setupSectionCount !== setupLessons.reduce((sum, lesson) => sum + lesson.sections.length, 0)) {
    failures.push("Nieprawidłowa liczba slajdów przygotowania.");
}

const compilerText = setupLessons.find(lesson => lesson.route === "codeblocks")?.sections
    .map(section => section.markdown).join("\n") ?? "";
for (const required of [
    "https://github.com/jmeubank/tdm-gcc/releases/download/v10.3.0-tdm64-2/tdm64-gcc-10.3.0-2.exe",
    "C:\\Users\\TWOJ-LOGIN\\Downloads\\TDM-GCC-64",
    "odznacz Add to PATH",
    "Compiler's installation directory",
    "Nie zmieniaj zmiennej PATH w Windows"
]) {
    if (!compilerText.includes(required)) failures.push(`Brakuje instrukcji kompilatora: ${required}`);
}
if (compilerText.includes("wyszukaj pakiet **MinGW**") || compilerText.includes("CodeBlocksMinGW")) {
    failures.push("Instrukcja nadal odsyła po kompilator do Portalu Firmy.");
}

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

if (JSON.stringify([...contentLessons, ...examinations]).includes("Kartkówka")) {
    failures.push("W danych znalazła się kartkówka.");
}

if (course.meta.teacher !== "por. Jakub GRĄTKIEWICZ") {
    failures.push("Niezgodne dane prowadzącego.");
}

if (course.meta.email !== "jakub.gratkiewicz@wat.edu.pl") {
    failures.push("Niezgodny adres e-mail.");
}

console.log(`Pozycje w prezentacji: ${course.lessons.length}`);
console.log(`Lekcje organizacyjne: ${organizationLessons.length}`);
console.log(`Bloki przygotowania: ${setupLessons.length}`);
console.log(`Elementy Lekcji 0: ${organizationLessons[0]?.sections.length ?? 0}`);
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
