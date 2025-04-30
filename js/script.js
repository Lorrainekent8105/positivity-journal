// Function to add a journal entry
function addEntry() {
  const entryText = document.getElementById("entryInput").value;
  
  if (entryText) {
    const entryContainer = document.getElementById("entriesContainer");
    const newEntry = document.createElement("div");
    newEntry.classList.add("entry");
    newEntry.textContent = entryText;
    entryContainer.appendChild(newEntry);

    // Clear the input field after saving
    document.getElementById("entryInput").value = "";
  }
}

// Function to toggle visibility of past entries
function toggleEntries() {
  const entriesContainer = document.getElementById("entriesContainer");
  entriesContainer.classList.toggle("hidden");
}
