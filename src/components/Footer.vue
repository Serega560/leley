<script setup>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Contacts from "@/components/Contacts.vue";
import Telegram from '@/assets/icons/telegram.svg'
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__block">

        <Logo :inFooter="true" />

        <div>
          <Menu :inFooter="true"/>
          <router-link :to="{ name: 'Declarations' }" class="declaration">Декларации</router-link>
        </div>

        <div class="footer__details">
          <h2>Реквизиты</h2>
          <p>ИП Квас Евгений Станиславович</p>
          <p>ОГРНИП 98582476586548</p>
          <p>ИНН 3872178873287421387</p>
        </div>
        <div class="footer__accounts">
          <h2>Наши аккаунты</h2>
          <Contacts :inFooter="true"/>
          <router-link :to="{ name: 'PrivacyPolicy' }" class="footer__confidentiality">
            Политика конфиденциальности
          </router-link>
        </div>
      </div>
      <div class="footer__copyright">
        <div>
          <a target="_blank" href="https://t.me/alinagned">
            <p class="footer__designer">Задизайнила Алина Гнедова </p>
            <Telegram class="footer__telegram"/>
          </a>
          <a target="_blank" href="https://t.me/Serega580">
            <p class="footer__designer">Разработал А. Сергей</p>
            <Telegram class="footer__telegram"/>
          </a>
        </div>
        <p class="footer__rights">все права защищены</p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.footer {
  padding: 70px 0;
  border: 1px solid var(--color-quartz);

  @include vp-767 {
    border: none;
    padding: 50px 35px 110px;
    order: 1;
  }

  .footer__block {
    display: grid;
    grid-template-columns: 252px 160px 245px 1fr;
    gap: 0 99px;
    margin-bottom: 60px;

    @include vp-767 {
      grid-template-columns: 93px 1fr;
      gap: 31px 50px;
      margin-bottom: 31px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 5px;

      @include vp-767 {
        font-size: 16px;
      }
    }

    .declaration {
      font-size: 16px;
      padding: 5px 7px;

      @include vp-767 {
        padding: 0;
      }
    }

    .footer__details {
      font-size: 16px;

      @include vp-767 {
        grid-column: 1/3;
        grid-row: 2/3;
      }

      p:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    .footer__accounts {
      justify-content: left;

      @include vp-767 {
        grid-column: 2/3;
        grid-row: 1/2;
      }

      .footer__contacts {
        flex-direction: column;
        align-items: start;
        margin-bottom: 5px;

        @include vp-767 {
          font-size: 14px;
        }

        svg {
          color: #1a1a1a;
        }
      }

      .footer__confidentiality {
        font-size: 16px;
        color: var(--color-jordy-blue);

        @include vp-767 {
          font-size: 14px;
          display: none;
        }
      }
    }
  }

  .footer__copyright {
    display: flex;

    @include vp-767 {
      flex-direction: column;
      grid-column: 1/3;
      grid-row: 4/5;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0 5px;


      p {
        transition: color .4s;
      }

      svg {
        width: 24px;
        height: 24px;
      }

      &:hover {

        p {
          color: var(--color-dodger-blue);

          @include vp-767 {
            color: var(--color-bright-grey);
          }
        }

        svg {
          color: var(--color-dodger-blue);

          @include vp-767 {
            color: var(--color-bright-grey);
          }
        }
      }
    }

    .footer__designer {
      font-size: 14px;
      color: var(--color-bright-grey);
      text-align: left;

      @include vp-767 {
        text-align: center;
      }
    }

    .footer__rights {
      text-align: center;
      border-top: 1px solid var(--color-quartz);
      font-size: 14px;
      padding-top: 10px;
      color: var(--color-bright-grey);
      width: 480px;
      margin: 0 auto 60px;

      @include vp-767 {
        width: 100%;
        order: -1;
        margin-bottom: 31px;
      }
    }
  }
}

</style>
