function getRandomGame() {
  const games = [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "/Lab1/img/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      name: "Super Mario Odyssey",
      image: "/Lab1/img/Super_Mario_Odyssey.jpg"
    },
    {
      name: "Animal Crossing: New Horizons",
      image: "/Lab1/img/Animal_Crossing_New_Horizons.jpg"
    },
    {
      name: "Metroid Dread",
      image: "/Lab1/img/Metroid_Dread_Banner.png"
    },
    {
      name: "Splatoon 3",
      image: "/Lab1/img/Splatoon.3.jpg"
    },
    {
      name: "Mario Kart 8 Deluxe",
      image: "/Lab1/img/MarioKart8Boxart.jpg"
    },
    {
      name: "Pokémon Scarlet & Violet",
      image: "/Lab1/img/Pokémon_Scarlet_and_Violet_banner.png"
    }
  ];

  const randomIndex = Math.floor(Math.random() * games.length);
  const selectedGame = games[randomIndex];

  document.getElementById("game-of-the-day").textContent = selectedGame.name;
  document.getElementById("game-image").src = selectedGame.image;
  document.getElementById("game-image").alt = selectedGame.name;
}

window.onload = getRandomGame;
