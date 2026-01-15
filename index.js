console.log("Всем привет");
// git init
// git add .
// git commit -m "Init"
// git branch -M main
// git remote add origin "link"
// git push -u origin main

// При добавлении изменений в репозиторий
// git add .
// git commit -m "Changes"
// git push -u origin main

// Массивы

// Плохо:
const file1 = "cat.jpg";
const file2 = "dog.png";
// Хорошо:
const files = ["cat.jpg", "dog.png", "Virus.exe", "document.pdf"];

// Главные правила:
// Индексы: Компьютеры считают с Нуля.
console.log(files[0]); // "cat.jpg"
// Свойство Length (Длина): Как узнать количество?
console.log(files.length); // 3
// Метод push для добавления элемента в конец массива (пригодится для работы с файлами)
files.push("music.mp3");
console.log(files.length); // 4
console.log(files[3]) // music.mp3

// Циклы:
// Существуют три цикла в JS: while, for и do while (устаревший цикл, не будем использовать)
// while: выполняет, пока условие не станет false, то есть работает пока условие выполняется

let fuel = 100;
while (fuel > 0) {
    console.log("Едем " + "Топлива осталось: " + fuel);
    fuel -= 10; // fuel = fuel - 10;
}
console.log("Приехали");

// for (старт; финиш; шаг);
//устаревшая версия

// for (let i = 0; i < files.length; i++) { //i = i + 1
//     console.log(files[i]);
// }

// Выводит все элементы массива

// Актуальная версия

// for (const file of files) {
//     console.log(file);
// }

// Тот же результат

for (const file of files) {
    if (file === "cat.jpg") {
        console.log("Пропуская данную картинку");
        continue;
    }

    if (file === "Virus.exe") {
        console.log ("Вирус найден");
        break;
    }

    console.log ("Файл проверен: " + file);
}
// Результат (без проверки с Virus.exe):
// Пропускаем данную картинку
// Файл проверен: dog.png
// Файл проверен: Virus.exe
// Файл проверен: document.pdf

// Результат (с проверкой на вирус):
// Пропускаем данную картинку
// Файл проверен: dog.png
// Вирус найден