document.addEventListener('DOMContentLoaded', () => {
  fetch('/Lab1/public/games.json')
    .then(response => response.json())
    .then(games => {
      const container = document.getElementById('gamesContainer');
      games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');

        gameDiv.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
        `;

        container.appendChild(gameDiv);
      });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
});
