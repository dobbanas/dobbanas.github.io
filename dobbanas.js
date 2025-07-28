
fetch('dobbanas_mondatok_idozitve.json')
  .then(response => response.json())
  .then(data => {
    const now = new Date();
    const container = document.getElementById('resonance');

    const upcoming = data
      .map(entry => ({
        date: new Date(entry.date),
        content: entry.content
      }))
      .filter(entry => entry.date <= now)
      .sort((a, b) => b.date - a.date);

    if (upcoming.length > 0) {
      container.innerHTML = `<p>${upcoming[0].content.replace(/\n/g, '<br>')}</p>`;
    }
  })
  .catch(error => {
    console.error('Hiba a JSON betöltésekor:', error);
  });
