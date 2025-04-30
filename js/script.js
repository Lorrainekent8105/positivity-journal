
const quotes = [
    "Start each day with a grateful heart.",
    "Small steps every day lead to big change.",
    "You survived 100% of your worst days.",
    "Even the smallest light can brighten the dark.",
    "You are growing — even when it doesn’t feel like it.",
    "Your story is not over yet.",
    "Healing isn’t linear, but it is happening."
];

function getTodayKey() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function loadEntries() {
    const key = getTodayKey();
    const data = JSON.parse(localStorage.getItem('journal') || '{}');
    return data[key] || [];
}

function saveEntries(entries) {
    const key = getTodayKey();
    const data = JSON.parse(localStorage.getItem('journal') || '{}');
    data[key] = entries;
    localStorage.setItem('journal', JSON.stringify(data));
}

function addEntry() {
    const text = document.getElementById('entryInput').value.trim();
    if (text === '') return;
    const entries = loadEntries();
    entries.push({ content: text, timestamp: new Date().toLocaleTimeString() });
    saveEntries(entries);
    document.getElementById('entryInput').value = '';
    renderEntries();
}

function renderEntries() {
    const entries = loadEntries();
    const container = document.getElementById('entriesContainer');
    container.innerHTML = '';
    entries.forEach((entry, index) => {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = `
            <small>Entry at ${entry.timestamp}</small>
            <textarea onchange="editEntry(${index}, this.value)">${entry.content}</textarea>
            <br>
            <button onclick="deleteEntry(${index})">Delete</button>
        `;
        container.appendChild(div);
    });
}

function editEntry(index, newValue) {
    const entries = loadEntries();
    entries[index].content = newValue;
    saveEntries(entries);
}

function deleteEntry(index) {
    const entries = loadEntries();
    entries.splice(index, 1);
    saveEntries(entries);
    renderEntries();
}

function showQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('dailyQuote').textContent = `"${quote}"`;
}

document.addEventListener('DOMContentLoaded', () => {
    showQuote();
    renderEntries();
});
