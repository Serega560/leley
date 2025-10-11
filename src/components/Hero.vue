<script setup>
import East from '@/assets/icons/next.svg'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToCatalog() {
  if (route.path === '/') {
    // Текущая страница - главная
    scrollToCatalog()
  } else {
    // Переходим на главную и скроллим
    router.push('/').then(() => {
      // Увеличим задержку для надёжности
      setTimeout(scrollToCatalog, 400)
    })
  }
}

function scrollToCatalog() {
  const catalogEl = document.getElementById('catalog')
  if (catalogEl) {
    catalogEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__block">
        <h1 class="hero__title">LELEY — восстановление и поддержание</h1>
        <div class="hero__description">
          <p class="hero__subtitle">физиологическая косметика</p>
          <p class="hero__text">Нежные текстуры, натуральные ингредиенты и безопасные формулы — всё, что нужно для ежедневного ритуала красоты.</p>
          <p class="hero__text">Каждый продукт создан с заботой о коже и уважением к природе, чтобы твой уход был простым, приятным и по-настоящему эффективным.</p>
          <!-- Добавьте prevent для полной уверенности -->
          <a href="#" class="hero__button button" @click.prevent="goToCatalog">
            Каталог
            <East />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.hero {
  padding-bottom: 80px;
  background-image: url("../assets/img/hero_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: -60px auto 38px;
  height: 700px;
  width: 100%;

  @include vp-767 {
    padding: 0;
    margin: 0;
    background-size: cover;
    background-image: url("../assets/img/hero_bg_mb.png");
    height: 171px;
    background-position: top center;
  }

  .hero__block {
    display: flex;
    justify-content: space-between;
    padding-top: 107px;

    @include vp-767 {
      padding: 0;
      flex-direction: column;
      gap: 120px 0;
    }
  }

  .hero__title {
    font-size: 48px;
    font-weight: 300;
    color: var(--color-default-white);
    font-family: "Source Serif 4";
    width: 374px;
    line-height: 98%;

    @include vp-767 {
      font-size: 14px;
      color: var(--color-default-black);
      width: 122px;
      margin-left: auto;
      margin-top: 54px;
    }
  }

  .hero__description {
    width: 470px;

    @include vp-767 {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .hero__subtitle {
      font-size: 48px;
      font-weight: 300;
      font-family: "Source Serif 4", serif;
      line-height: 98%;
      margin-bottom: 13px;

      @include vp-767 {
        display: none;
      }
    }

    .hero__text {
      margin-bottom: 13px;
      font-size: 14px;

      @include vp-767 {
        display: none;
      }
    }
  }

  .hero__button {
    display: flex;
    font-size: 18px;
    transition: color 0.4s, border 0.4s;
    border: 1px solid var(--color-default-black);
    border-radius: 10px;
    width: 100%;
    background: transparent;
    justify-content: space-between;
    align-items: center;

    @include vp-767 {
      font-size: 14px;
      padding: 7px 20px;
      max-width: 295px;
    }

    svg {
      transition: color 0.4s;
    }

    &:hover {
      cursor: pointer;
      color: var(--color-jordy-blue);
      border: 1px solid var(--color-jordy-blue);

      svg {
        color: var(--color-jordy-blue);
      }

      @include vp-767 {
        color: var(--color-default-black);
        border: 1px solid var(--color-default-black);
      }
    }

    //&:active {
    //      color: var(--color-default-black);
    //      background-color: var(--color-default-white);
    //
    //      @include vp-767 {
    //        color: var(--color-bright-grey);
    //      }
    //    }
  }
}

</style>
