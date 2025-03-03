'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');

  // Проверка на существование формы
  if (!form) {
    alert("Форма не найдена на странице.");
    return; // Прерываем выполнение скрипта, если форма не найдена
  }

  const submitButton = form.querySelector('button[type="submit"]');  // Кнопка отправки формы

  form.addEventListener('submit', formSend);

  async function formSend(evt) {
    evt.preventDefault(); // Останавливаем отправку формы по умолчанию

    let error = formValidate(form); // Проверяем форму на ошибки
    let formData = new FormData(form); // Собираем данные из формы

    if (error === 0) { // Если нет ошибок
      const data = document.querySelector('.data')
      if (data) {
        data.classList.add('_sending'); // Добавляем класс _sending для блокировки формы
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', { // URL для отправки данных
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json(); // Распарсить JSON
          alert(`Поздравляем, ваше письмо отправлено и скоро будет прочитано`);
          form.reset(); // Сбросить форму
        } else {
          const errorText = await response.text();
          alert(`Ошибка отправки данных: ${errorText}`);
        }
      } catch (err) {
        console.error('Ошибка при отправке:', err);
        alert('Ошибка при отправке. Попробуйте позже.');
      } finally {
        data.classList.remove('_sending'); // Убираем класс _sending после завершения отправки
      }
    } else {
      alert("Заполните обязательные поля.");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          alert('Введите корректный email.');
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && !input.checked) {
        formAddError(input);
        alert('Необходимо согласиться с условиями.');
        error++;
      } else {
        if (input.value.trim() === '') {
          formAddError(input);
          alert(`Поле "${input.name}" не должно быть пустым.`);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value.trim());
  }

  //
  // const formPhoto = document.getElementById('formPhoto');
  // const formPreview = document.getElementById('formPreview');
  //
  // if (formPhoto) {
  //   formPhoto.addEventListener('change', () => {
  //     uploadFile(formPhoto.files[0]);
  //   });
  // }
  //
  // function uploadFile(file) {
  //   if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
  //     alert("Разрешены только изображения");
  //     formPhoto.value = ''; // Очищаем поле ввода
  //     return;
  //   }
  //
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert("Файл должен быть меньше 2 МБ.");
  //     formPhoto.value = ''; // Очищаем поле ввода
  //     return;
  //   }
  //   let reader = new FileReader();
  //   reader.onload = function (evt) {
  //     if (formPreview) {  // Проверка на существование элемента
  //       formPreview.innerHTML = `<img class="form__image" src="${evt.target.result}" alt="Фото">`;
  //     }
  //   };
  //
  //   reader.onerror = function (evt) {
  //     alert("Ошибка: " + evt.target.error);
  //   }
  //
  //   reader.readAsDataURL(file);

});
