// Обработка формы обратной связи (пока без реальной отправки)
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Заполните все поля.');
        return;
    }

    // Пока только имитация: показываем сообщение
    alert('Спасибо, ' + name + '! Сообщение пока не отправляется на сервер — это будет добавлено позже.');
});
