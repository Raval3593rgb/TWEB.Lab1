function startCountdown() {
  const countdownElement = document.getElementById("countdown");

  if (!countdownElement) {
    console.error("Элемент #countdown не найден!");
    return;
  }

  const eventDate = new Date("2025-09-20T10:00:00").getTime();

  let timer; // Объявляем переменную заранее

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Презентация началась!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }

  // Обновляем сразу после загрузки
  updateCountdown();

  // Запускаем таймер каждую секунду
  timer = setInterval(updateCountdown, 1000);
}

// Убеждаемся, что скрипт запустится после полной загрузки страницы
window.onload = startCountdown;
