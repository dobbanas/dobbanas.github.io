const container = document.getElementById("resonance");

const now = new Date();

const entries = [
  {
    date: new Date("2025-07-28"),
    content: `🌿 Egyetlen dobbanás vagy.<br>És a világ figyel.`
  }
];

if (container) {
  for (let i = entries.length - 1; i >= 0; i--) {
    if (now >= entries[i].date) {
      container.innerHTML = entries[i].content;
      break;
    }
  }
}
