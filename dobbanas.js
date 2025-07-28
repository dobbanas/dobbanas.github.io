const container = document.getElementById("resonance");
const now = new Date();

// NYITÓ ÜZENET — mindig megjelenik
container.innerHTML = `
  <h1>Dobbanás</h1>
  <p><strong>Nem kell keresned.<br>
  A csend már itt van.</strong></p>
  <p>Nem kívül, nem máshol –<br>
  Benned.<br>
  Ahogy olvasod,<br>
  talán nem a szemed olvassa –<br>
  hanem valami régi benned,<br>
  ami mindig is tudta.</p>
`;

// MONDAT PÁROK — csak ha aktuális
fetch("dobbanas_mondatok_idozitve.json")
  .then((response) => response.json())
  .then((entries) => {
    const matching = entries.find(entry => now >= new Date(entry.date));
    if (matching) {
      const resonanceDiv = document.createElement("div");
      resonanceDiv.className = "resonance";
      resonanceDiv.innerHTML = matching.content;
      container.appendChild(resonanceDiv);
    }
  });
