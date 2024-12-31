// 'use strict';
//
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);
//
//   async function formSend(evt) {
//     evt.preventDefault();
//
//     let error = formValidate(form);
//
//     let formData = new FormData(form);
//     formData.append('image', formPhoto.files[0]);
//
//     // console.log(formData)
//
//     if (error === 0) {
//       formData.classList.add('_sending');
//       let response = await fetch('info@leley.ru', {
//         method: 'POST',
//         body: formData
//       });
//
//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         formPreview.innerHTML ='';
//         form.reset();
//         form.classList.remove('_sending');
//       } else {
//         alert("Ошибка");
//         form.classList.remove('_sending');
//       }
//     } else {
//       alert("Заполните обязательные поля");
//     }
//   }
//
//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('._req');
//     console.log('Fields to validate:', formReq);
//
//     for (let i = 0; i < formReq.length; i++) {
//       const input = formReq[i];
//       if (!input) continue; // Пропустить, если input не существует
//
//       formRemoveError(input);
//
//       if (input.classList.contains('_email')) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else if (input.getAttribute('type') === 'checkbox' && !input.checked) {
//         formAddError(input);
//         error++;
//       } else {
//         if (input.value.trim() === '') {
//           formAddError(input);
//           error++;
//         }
//       }
//     }
//
//     return error;
//   }
//
//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//
//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }
//
//   function emailTest(input) {
//     return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value.trim());
//   }
//
//   const formPhoto = document.getElementById('formPhoto');
//   const formPreview = document.getElementById('formPreview');
//
//   formPhoto.addEventListener('change', () => {
//     uploadFile(formPhoto.files[0]);
//   });
//
//   function uploadFile(file) {
//     if (!['image/jpeg', 'image/png', 'image/gif',].includes(file.type)) {
//       alert("Разрешены только изображения");
//       formPhoto.value = '';
//       return;
//     }
//
//     if (file.size > 2 * 1024 * 1024) {
//       alert("Файл должен быть меньше 2 МБ.");
//       return;
//     }
//     let reader = new FileReader();
//     reader.onload = function (evt) {
//       formPreview.innerHTML = `<img class="form__image" src="${evt.target.result}" alt="Фото">`;
//     };
//
//     reader.onerror = function (evt) {
//       alert("Ошибка");
//     }
//
//     reader.readAsDataURL(file);
//   }
// });
