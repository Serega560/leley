<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const comment = ref("");
const loading = ref(false);
const formRef = ref(null);
const agreement = ref(false); // добавили ref для чекбокса

// файл (для отображения названия)
const fileName = ref("📎 Прикрепить файл");

function handleFile(e) {
  const f = e.target.files?.[0] || null;
  fileName.value = f ? `Файл: ${f.name}` : "📎 Прикрепить файл";
}

// ===== валидация =====
function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validatePhone(v) {
  return /^\+7\d{10}$/.test(v);
}

function onPhoneFocus() {
  if (!phone.value) phone.value = "+7";
}

function onPhoneInput(e) {
  let v = e.target.value;
  phone.value = v.startsWith("+") ? "+" + v.slice(1).replace(/\D/g, "") : v.replace(/\D/g, "");
}

// ===== отправка формы =====
async function sendForm() {
  if (!agreement.value) {
    alert("Вы должны согласиться с политикой обработки персональных данных перед отправкой формы.");
    return;
  }

  loading.value = true;
  const formData = new FormData();

  // Добавляем вручную, чтобы точно передать значения
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("comment", comment.value);

  try {
    const res = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    // Проверяем статус
    if (!res.ok) {
      throw new Error(`Ошибка сервера: ${res.status}`);
    }

    // Пробуем распарсить ответ как JSON
    const data = await res.json().catch(() => null);

    if (data && data.message) {
      alert(data.message);
    } else {
      alert("Сообщение отправлено!");
    }

    // Очистим форму после успешной отправки
    name.value = "";
    email.value = "";
    comment.value = "";
    agreement.value = false;

  } catch (err) {
    console.error(err);
    alert("Ошибка при отправке. Попробуйте позже.");
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
            <input class="form__input form__input--checkbox _req"
                   type="checkbox"
                   id="formAgreement"
                   v-model="agreement">
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
          transform: scale(0);

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
        transform: scale(1);
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
