// Получение объекта Telegram WebApp
const tg = window.Telegram.WebApp;

document.getElementById('sendMessageButton').addEventListener('click', () => {
    tg.sendData('Hello from WebApp!'); // Отправка данных боту
});

// Функция для работы с данными, полученными от бота
tg.onEvent('webAppData', (data) => {
    alert(`Received data from bot: ${data}`);
});
