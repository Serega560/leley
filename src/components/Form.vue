<script setup>
import {ref} from "vue";

const WEB3FORMS_ACCESS_KEY = "95581d1d-968a-4174-9fa3-4005e5938a26";

const name = ref("");
const email = ref("");
const phone = ref("");
const comment = ref("");
const loading = ref(false);

function validateEmail(email) {
  // Проверяем минимум наличие @ и точку после неё
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  // Формат +7 и ровно 10 цифр после
  const re = /^\+7\d{10}$/;
  return re.test(phone);
}

function onPhoneFocus() {
  if (!phone.value) {
    phone.value = "+7";
  }
}

function onPhoneInput(event) {
  let value = event.target.value;

  if (value.startsWith("+")) {
    // Оставляем + в начале, остальное цифры
    value = "+" + value.slice(1).replace(/\D/g, "");
  } else {
    // Если без +, оставляем только цифры
    value = value.replace(/\D/g, "");
  }
  phone.value = value;
}

async function sendForm() {
  if (!email.value && !phone.value) {
    alert("Пожалуйста, укажите Email или Телефон.");
    return;
  }

  if (email.value && !validateEmail(email.value)) {
    alert("Пожалуйста, введите корректный Email с символом '@'.");
    return;
  }

  if (phone.value && !validatePhone(phone.value)) {
    alert("Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX.");
    return;
  }

  loading.value = true;

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: comment.value
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (result.success) {
      alert("Заявка отправлена!");
      name.value = "";
      email.value = "";
      phone.value = "";
      comment.value = "";
    } else {
      alert("Ошибка при отправке: " + (result.message || "Неизвестная ошибка"));
    }
  } catch (error) {
    alert("Ошибка сети или сервера: " + error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="form" id="form">
    <div class="container">
      <div class="form__block">
        <div class="form__header">
          <h2 class="form__title">Остались вопросы ?</h2>
          <p class="form__description">Отправьте заявку с вопросом и мы ответим!</p>
        </div>
        <form class="form__main" @submit.prevent="sendForm" id="form" method="POST">
          <input class="form__name" type="text" v-model="name" placeholder="Имя" required>
<!--          <input-->
<!--              type="tel"-->
<!--              v-model="phone"-->
<!--              @focus="onPhoneFocus"-->
<!--              @input="onPhoneInput"-->
<!--              placeholder="Телефон"-->
<!--          />-->
          <input class="form__email" type="email" v-model="email" placeholder="E-mail"/>
          <textarea class="form__comment" v-model="comment" rows="4" placeholder="Ваш вопрос"></textarea>
          <div class="form__confidentiality">
            <input class="form__input form__input--checkbox _req" type="checkbox" id="formAgreement" checked>
            <label class=" form__label form__label--data" for="formAgreement">
                <p class="form__text-data">Я&nbsp;согласен с
                  <router-link :to="{ name: 'PrivacyPolicy' }" class="footer__confidentiality">
                    политикой обработки персональных данных
                  </router-link>
                </p>
            </label>
          </div>
          <button class="button" type="submit" :disabled="loading">
            {{ loading ? "Отправка..." : "Отправить" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.form {
  padding: 33px 0 55px;
  background-image: url("../assets/img/form_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @include vp-767 {
    padding-bottom: 33px;
    order: 1;
  }

  .form__block {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin-left: auto;

    @include vp-767 {
      gap: 5px;
      margin: 0;
      width: 100%;
    }

    .form__header {

      @include vp-767 {
        padding: 0;
      }

      .form__title {
        font-size: 48px;
        margin-bottom: 7px;
        font-weight: 400;
        font-family: "Source Serif 4", serif;

        @include vp-767 {
        font-size: 32px;
        }
      }

      .form__description {
        font-size: 18px;
        margin-bottom: 19px;

        @include vp-767 {
          font-size: 14px;
        }
      }
    }

    .form__main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;

      @include vp-767 {
        display: flex;
        flex-wrap: wrap;
      }

      input,
      textarea {
        padding: 8px 16px;
        border: 1px solid transparent;
        font-size: 18px;
        transition: all 0.2s;
        border-radius: 11px;
        width: 100%;

        &:focus {
          outline: none;
          border: 1px solid #BFBFBF;
        }

        &::placeholder {
          font-size: 14px;
        }
      }

      textarea {
        resize: none;
        min-height: 122px;
        margin-bottom: 10px;
      }

      .form__confidentiality {
        grid-column: 1/3;
        grid-row: 3/4;
      }

      .form__comment {
        grid-column: 1/3;
        grid-row: 2/3;
        width: 100%;
      }

      .form__label--data {
        display: flex;
        flex-direction: row;
        column-gap: 12px;
        align-items: center;
        position: relative;
        cursor: pointer;
        margin-bottom: 10px;

        &:before {
          content: "";
          align-self: flex-start;
          display: flex;
          align-items: center;
          border: 1px solid var(--color-default-black);
          background-color: var(--color-default-white);
          flex: 0 0 20px;
          height: 20px;

          @include vp-767 {
            height: 17px;
            flex: 0 0 17px;
          }
        }

        &:after {
          content: "";
          width: 12px;
          height: 11px;
          position: absolute;
          top: 5px;
          left: 4px;
          background-color: #BFBFBF;
          transition: transform 0.2s ease-in-out;
          transform: scale(1);

          @include vp-767 {
            width: 9px;
            height: 9px;
            top: 4px;
            left: 4px;
          }
        }

        .form__text-data {
          font-size: 16px;
          order: 1;
          line-height: 16px;

          @include vp-767 {
            font-size: 14px;
          }

          a {
            text-decoration: underline;
          }
        }
      }

      .form__input--checkbox {
        display: none;
      }

      .form__input--checkbox:checked + .form__label--data:after {
        transform: scale(0);
      }

      .button {
        color: var(--color-default-black);
        padding: 4px 37px;
        font-size: 18px;
        border: 1px solid var(--color-default-black);
        border-radius:11px;
        background-color: transparent;
        cursor: pointer;
        grid-column: 1/3;
        grid-row: 4/5;

        @include vp-767 {
          padding: 9px 40px;
          width: 100%;
        }

        //&:hover {
        //  background: var(--color-bright-grey);
        //}
        //
        //&:disabled {
        //  opacity: 0.6;
        //  cursor: not-allowed;
        //}
      }
    }
  }
}

</style>
