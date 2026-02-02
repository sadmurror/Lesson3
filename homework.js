const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";

for (const code of pinCodes) {
    if (code === myPin) {
        console.log("Пин-код найден!");
        break;
    }

    console.log("Неверный пин-код: " + code);
}