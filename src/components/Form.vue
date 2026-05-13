<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const comment = ref("");

const loading = ref(false);
const formRef = ref(null);
const agreement = ref(false);

const successMessage = ref("");
const generalError = ref("");

// ошибки
const errors = ref({
  name: "",
  email: "",
  comment: "",
  agreement: "",
});

// ===== email =====
function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// ===== phone =====
function onPhoneFocus() {
  if (!phone.value) {
    phone.value = "+7";
  }
}

function onPhoneInput(e) {
  let value = e.target.value;

  // всегда начинается с +7
  if (!value.startsWith("+7")) {
    value = "+7";
  }

  // только цифры после +7
  let numbers = value.slice(2).replace(/\D/g, "");

  // максимум 10 цифр
  numbers = numbers.slice(0, 10);

  phone.value = "+7" + numbers;
}

// ===== validate =====
function validateForm() {
  let isValid = true;

  errors.value = {
    name: "",
    email: "",
    comment: "",
    agreement: "",
  };

  generalError.value = "";
  successMessage.value = "";

  // name
  if (!name.value.trim()) {
    errors.value.name = "Пожалуйста, введите ваше имя";
    isValid = false;
  } else if (name.value.trim().length < 2) {
    errors.value.name = "Имя должно содержать минимум 2 символа";
    isValid = false;
  }

  // email
  if (!email.value.trim()) {
    errors.value.email = "Пожалуйста, введите email";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    errors.value.email = "Пожалуйста, введите корректный email";
    isValid = false;
  }

  // comment
  if (!comment.value.trim()) {
    errors.value.comment = "Пожалуйста, введите ваш вопрос";
    isValid = false;
  } else if (comment.value.trim().length < 10) {
    errors.value.comment =
        "Вопрос должен содержать минимум 10 символов";
    isValid = false;
  }

  // agreement
  if (!agreement.value) {
    errors.value.agreement =
        "Необходимо согласиться с политикой обработки персональных данных";
    isValid = false;
  }

  return isValid;
}

// ===== submit =====
async function sendForm() {
  if (!validateForm()) {
    return;
  }

  loading.value = true;

  const formData = new FormData();

  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  formData.append("comment", comment.value);

  try {
    const res = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Ошибка сервера: ${res.status}`);
    }

    const text = await res.text();

    console.log("Ответ сервера:", text);

    try {
      const data = JSON.parse(text);

      successMessage.value =
          data.message || "Сообщение успешно отправлено!";
    } catch {
      successMessage.value = "Сообщение успешно отправлено!";
    }

    // reset
    name.value = "";
    email.value = "";
    phone.value = "";
    comment.value = "";
    agreement.value = false;

    setTimeout(() => {
      successMessage.value = "";
    }, 5000);

  } catch (err) {
    console.error("Ошибка отправки:", err);

    generalError.value =
        "Ошибка при отправке. Пожалуйста, попробуйте позже.";

  } finally {
    loading.value = false;
  }
}

// ===== clear errors =====
function clearError(field) {
  errors.value[field] = "";
  generalError.value = "";
}
</script>

<template>
  <div class="form" id="form">
    <div class="container">
      <div class="form__block">

        <div class="form__header">
          <h2 class="form__title">Остались вопросы ?</h2>

          <p class="form__description">
            Отправьте заявку с вопросом и мы ответим!
          </p>
        </div>

        <!-- success -->
        <div
            v-if="successMessage"
            class="form__success-message"
        >
          ✓ {{ successMessage }}
        </div>

        <!-- general error -->
        <div
            v-if="generalError"
            class="form__general-error"
        >
          ⚠ {{ generalError }}
        </div>

        <form
            class="form__main"
            @submit.prevent="sendForm"
            id="form"
            method="POST"
        >

          <!-- NAME -->
          <div class="form__field-wrapper">
            <input
                class="form__name"
                :class="{ 'form__input--error': errors.name }"
                type="text"
                v-model="name"
                placeholder="Имя"
                @input="clearError('name')"
            />

            <span
                class="form__error-message"
                v-if="errors.name"
            >
              {{ errors.name }}
            </span>
          </div>

          <!-- EMAIL -->
          <div class="form__field-wrapper">
            <input
                class="form__email"
                :class="{ 'form__input--error': errors.email }"
                type="email"
                v-model="email"
                placeholder="E-mail"
                @input="clearError('email')"
            />

            <span
                class="form__error-message"
                v-if="errors.email"
            >
              {{ errors.email }}
            </span>
          </div>

          <!-- PHONE -->
          <div class="form__field-wrapper">
            <input
                class="form__phone"
                type="tel"
                v-model="phone"
                placeholder="+7XXXXXXXXXX"
                @focus="onPhoneFocus"
                @input="onPhoneInput"
            />
          </div>

          <!-- COMMENT -->
          <div class="form__field-wrapper form__field-wrapper--full">
            <textarea
                class="form__comment"
                :class="{ 'form__input--error': errors.comment }"
                v-model="comment"
                rows="4"
                placeholder="Ваш вопрос"
                @input="clearError('comment')"
            ></textarea>

            <span
                class="form__error-message"
                v-if="errors.comment"
            >
              {{ errors.comment }}
            </span>
          </div>

          <!-- agreement -->
          <div class="form__confidentiality">

            <div class="form__agreement-wrapper">

              <input
                  class="form__input form__input--checkbox"
                  :class="{ 'form__agreement-error': errors.agreement }"
                  type="checkbox"
                  id="formAgreement"
                  v-model="agreement"
                  @change="clearError('agreement')"
              />

              <label
                  class="form__label form__label--data"
                  :class="{ 'form__label--error': errors.agreement }"
                  for="formAgreement"
              >
                <p class="form__text-data">
                  Я&nbsp;согласен с

                  <router-link
                      :to="{ name: 'PrivacyPolicy' }"
                      class="footer__confidentiality"
                  >
                    политикой обработки персональных данных
                  </router-link>
                </p>
              </label>

            </div>

            <span
                class="form__error-message form__error-message--agreement"
                v-if="errors.agreement"
            >
              {{ errors.agreement }}
            </span>

          </div>

          <!-- button -->
          <div class="form__button-wrapper">

            <button
                class="button"
                type="submit"
                :disabled="loading"
            >
              {{ loading ? "Отправка..." : "Отправить" }}
            </button>

          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

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

    .form__success-message {
      background-color: #d4edda;
      color: #155724;

      padding: 12px 16px;
      border-radius: 8px;

      margin-bottom: 16px;

      font-size: 14px;

      border: 1px solid #c3e6cb;
    }

    .form__general-error {
      background-color: #f8d7da;
      color: #721c24;

      padding: 12px 16px;
      border-radius: 8px;

      margin-bottom: 16px;

      font-size: 14px;

      border: 1px solid #f5c6cb;
    }

    .form__main {
      display: grid;

      grid-template-columns: 1fr 1fr;
      gap: 20px;

      @include vp-767 {
        display: flex;
        flex-wrap: wrap;
      }

      .form__field-wrapper {
        position: relative;
        width: 100%;

        &--full {
          grid-column: 1 / -1;
        }
      }

      input,
      textarea {
        padding: 8px 16px;

        border: 1px solid transparent;

        font-size: 18px;

        transition: all 0.2s;

        border-radius: 11px;

        width: 100%;

        box-sizing: border-box;

        &:focus {
          outline: none;
          border: 1px solid #bfbfbf;
        }

        &::placeholder {
          font-size: 14px;
        }
      }

      .form__input--error {
        border-color: #ff3b30 !important;
        background-color: #fff5f5;
      }

      .form__error-message {
        display: block;

        color: #ff3b30;

        font-size: 12px;

        margin-top: 4px;

        padding-left: 16px;

        line-height: 1.3;

        &--agreement {
          padding-left: 32px;
        }
      }

      textarea {
        resize: none;
        min-height: 122px;
      }

      .form__confidentiality {
        grid-column: 1 / -1;
      }

      .form__button-wrapper {
        grid-column: 1 / -1;
      }

      .form__agreement-wrapper {
        display: flex;
        align-items: center;
      }

      .form__label--data {
        display: flex;
        flex-direction: row;

        column-gap: 12px;

        align-items: center;

        position: relative;

        cursor: pointer;

        &:before {
          content: "";

          align-self: flex-start;

          display: flex;
          align-items: center;

          border: 1px solid var(--color-default-black);

          background-color: var(--color-default-white);

          flex: 0 0 20px;
          height: 20px;
        }

        &:after {
          content: "";

          width: 12px;
          height: 11px;

          position: absolute;

          top: 5px;
          left: 4px;

          background-color: #bfbfbf;

          transition: transform 0.2s ease-in-out;

          transform: scale(0);
        }

        .form__text-data {
          font-size: 16px;
          line-height: 16px;

          a {
            text-decoration: underline;
          }
        }

        &--error {
          &:before {
            border-color: #ff3b30 !important;
          }

          .form__text-data {
            color: #ff3b30;
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

        border-radius: 11px;

        background-color: transparent;

        cursor: pointer;

        transition: all 0.2s;

        width: 100%;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
