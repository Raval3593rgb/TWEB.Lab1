function getRandomGame() {
  $.ajax({
    url: '/Lab1/public/games.json',
    method: 'GET',
    dataType: 'json',
    success: function(games) {
      const randomIndex = Math.floor(Math.random() * games.length);
      const selectedGame = games[randomIndex];

      $('#game-of-the-day').text(selectedGame.name);
      $('#game-image').attr('src', selectedGame.image).attr('alt', selectedGame.name);
      $('#game-description').text(selectedGame.text);
      },
    error: function(error) {
      console.error('Ошибка при загрузке JSON:', error);
    }
  });
}

$(document).ready(getRandomGame);
