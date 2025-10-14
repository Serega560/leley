<script setup>
import {useRouter, useRoute} from 'vue-router'
import {computed} from 'vue'

const router = useRouter()
const route = useRoute()

// Добавляем вычисляемое свойство для цвета
const isHomePage = computed(() => route.path === '/')

const menuItems = [
  {label: 'Главная', action: () => router.push('/')},
  {label: 'Каталог', action: goToCatalog},
  {label: 'O бренде', action: () => document.getElementById('brand')?.scrollIntoView({behavior: 'smooth'})},
  {label: 'Обратная связь', action: scrollToForm},
]

function scrollToForm() {
  if (route.path.startsWith('/cream/')) {
    const el = document.getElementById('form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else if (route.path === '/') {
    const el = document.getElementById('form')
    if (el) el.scrollIntoView({behavior: 'smooth'})
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById('form')
        if (el) el.scrollIntoView({behavior: 'smooth'})
      }, 300)
    })
  }
}

function goToCatalog() {
  if (route.path === '/') {
    document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})
      }, 300)
    })
  }
}

defineProps({
  inFooter: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <nav class="menu">
    <transition name="menu">
      <ul class="menu__list" :class="{
        'menu__list--footer': inFooter,
        'menu__list--black': isHomePage && !inFooter,
        'menu__list--white': !isHomePage && !inFooter
      }">
        <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu__item"
        >
          <button
              class="menu__link"
              @click="item.action"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.menu {

  .menu__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;

    @include vp-767 {
      gap: 0;
      margin-bottom: 43px;
    }

    .menu__item:nth-child(3) {
      @include vp-767 {
        display: none;
      }
    }

    .menu__item:nth-child(2) {
      @include vp-767 {
        order: 1;
      }
    }

    .menu__link {
      font-size: 14px;
      padding: 15px 20px;
      background-color: inherit;
      border: none;
      transition: color 0.4s, background-color 0.4s;
      text-align: left;
      cursor: pointer;

      @include vp-767 {
        font-size: 16px;
        text-align: end;
        padding: 10px 7px;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-jordy-blue);

        @include vp-767 {
          color: var(--color-default-black);
        }
      }
    }
  }

  /* Стили для черного меню (главная страница) */
  .menu__list--black {
    .menu__link {
      color: var(--color-default-white);

      @include vp-767 {
        color: var(--color-default-black);
      }

      &:hover {
        color: var(--color-jordy-blue);

        @include vp-767 {
          color: var(--color-default-black);
        }
      }
    }
  }

  /* Стили для белого меню (страницы товаров) */
  .menu__list--white {
    .menu__link {
      color: var(--color-default-black);

      &:hover {
        color: var(--color-jordy-blue);

        @include vp-767 {
          color: var(--color-default-black);
        }
      }
    }
  }

  .menu__list--footer {
    flex-direction: column;

    @include vp-767 {
      margin: 0;
    }

    .menu__link {
      padding: 5px 7px;
      font-size: 16px;
      color: var(--color-default-black);

      @include vp-767 {
        padding: 0 0 10px;
        text-align: left;
        font-size: 14px;
      }

      &:hover {
        background-color: var(--color-default-white);
        color: var(--color-default-black);
      }
    }

    .menu__item:first-child .menu__link {
      font-size: 18px;
      font-weight: bold;

      @include vp-767 {
        font-size: 16px;
      }
    }
  }
}
</style>
