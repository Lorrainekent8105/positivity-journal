
const quotes = [
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to cheer yourself is to try to cheer someone else up.",
    "Gratitude turns what we have into enough.",
    "Every day may not be good, but there’s something good in every day.",
    "Start each day with a positive thought and a grateful heart."
];

function addEntry() {
    const input = document.getElementById("entryInput");
    const text = input.value.trim();
    if (text) {
        const entryDiv = document.createElement("div");
        entryDiv.textContent = text;
        document.getElementById("entriesContainer").appendChild(entryDiv);
        input.value = "";
    }
}

window.onload = function () {
    const quoteEl = document.getElementById("dailyQuote");
    const daily = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = daily;
};
