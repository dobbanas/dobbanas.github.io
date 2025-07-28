const container = document.getElementById("resonance");
const now = new Date();

// Nyitó üzenet — mindig megjelenik
const openingHTML = `
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

container.innerHTML = openingHTML;

// Időzített mondatpár — csak ha aktuális
fetch("dobbanas_mondatok_idozitve.json")
  .then((response) => response.json())
  .then((data) => {
    const actual = data.find((entry) => {
      const start = new Date(entry.datum);
      const end = new Date(start);
      end.setDate(end.getDate() + 3);
      return now >= start && now < end;
    });

    if (actual) {
      const pairHTML = `
        <div style="margin-top: 2rem; font-weight: bold; font-size: 1.2rem; color: #0c3b2e;">
          <p>${actual.mondat1}</p>
          <p>${actual.mondat2}</p>
        </div>
      `;
      container.innerHTML += pairHTML;
    }
  });
