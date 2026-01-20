// Функция для обработки загрузки файлов
function handleFileUpload(inputId, cardId) {
    const fileInput = document.getElementById(inputId);
    const uploadCard = document.getElementById(cardId);
    const checkmark = uploadCard.querySelector('.upload_checkmark');
    const round = uploadCard.querySelector('.round');
    const plusIcon = round.querySelector('.plus-icon');
    const editIcon = round.querySelector('.edit-icon');

    // Изначально скрываем галочку и показываем только плюсик в круг
    checkmark.style.display = 'none';
    plusIcon.style.display = 'block';
    editIcon.style.display = 'none';

    fileInput.addEventListener('change', function (e) {
        if (this.files && this.files[0]) {
            // Файл загружен - показываем галочку и меняем иконку в круге
            checkmark.style.display = 'block';
            plusIcon.style.display = 'none';
            editIcon.style.display = 'block';
            console.log(`Файл загружен: ${this.files[0].name}`);
        } else {
            // Файл не выбран - скрываем галочку и показываем плюсик
            checkmark.style.display = 'none';
            plusIcon.style.display = 'block';
            editIcon.style.display = 'none';
        }
    });

    // Обработка клика на круглую иконку
    round.addEventListener('click', function (e) {
        e.stopPropagation();
        fileInput.click();
    });
}

// Инициализация для обеих карточек
document.addEventListener('DOMContentLoaded', function () {
    handleFileUpload('file-input-1', 'upload-card-1');
    handleFileUpload('file-input-2', 'upload-card-2');
});