function getNotes() {
  return document.getElementById("notes").value;
}

function generateSummary() {
  const text = getNotes();
  const sentences = text.split(".");
  document.getElementById("output").innerText = sentences.slice(0, 3).join(".");
}

function generateFlashcards() {
  const text = getNotes();
  const lines = text.split("\n");
  const cards = lines.map((l, i) => `Q${i+1}: ${l}?\nA: ${l}`);
  document.getElementById("output").innerText = cards.join("\n\n");
}

function generateQuiz() {
  const text = getNotes();
  const lines = text.split("\n");
  const quiz = lines.map((l, i) => `${i+1}. What is: ${l}?`);
  document.getElementById("output").innerText = quiz.join("\n");
}

function extractTasks() {
  const text = getNotes();
  const lines = text.split("\n");
  const tasks = lines.filter(l => /(do|finish|review|submit)/i.test(l));
  document.getElementById("output").innerText = tasks.join("\n");
}
