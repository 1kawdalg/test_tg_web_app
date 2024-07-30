const tg = window.Telegram.WebApp;

document.getElementById('sendMessageButton').addEventListener('click', () => {
    const data = { message: 'Hello from WebApp!' };
    tg.sendData(JSON.stringify(data)); // Отправка данных боту
    console.log('Send Message button clicked');
});

// Для отладки
console.log('Telegram WebApp initialized', tg);
