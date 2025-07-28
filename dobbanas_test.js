const container = document.getElementById("resonance");

const now = new Date();

const entries = [
  {
    date: new Date("2025-07-29"),
    content: `🌿Nem kell, hogy tudd, hogyan tovább.<br><br>Elég, ha engeded, hogy vezessen, ami mindig is benned dobogott...`
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
