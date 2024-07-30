document.getElementById('sendMessageButton').addEventListener('click', () => {
    const receivedDataDiv = document.getElementById('receivedData');
    receivedDataDiv.innerText = 'Hello from WebApp!';
    console.log('Send Message button clicked');
});

// Для отладки
console.log('Standalone WebApp initialized');
