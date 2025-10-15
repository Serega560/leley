<script setup>
import {creams} from '../data/creams.js'
import {ref, computed} from 'vue'

// Активный таб
const activeTab = ref('Все')

// Функция для смены таба
function setActiveTab(tabName) {
  activeTab.value = tabName
}

// Отфильтрованные товары
const filteredCreams = computed(() => {
  if (activeTab.value === 'Все') {
    return creams
  }
  return creams.filter(cream => cream.category === activeTab.value)
})

</script>

<template>
  <div class="catalog" id="catalog" ref="catalogSection">
    <div class="container">
      <h2 class="catalog__title">Каталог</h2>
      <ul class="catalog__tabs">
        <li class="catalog__tab">
          <button
              type="button"
              :class="{ 'active': activeTab === 'Все' }"
              @click="setActiveTab('Все')"
          >
            Все
          </button>
        </li>
        <li class="catalog__tab">
          <button
              type="button"
              :class="{ 'active': activeTab === 'Тоник' }"
              @click="setActiveTab('Тоник')"
          >
            Тоник
          </button>
        </li>
        <li class="catalog__tab">
          <button
              type="button"
              :class="{ 'active': activeTab === 'Сыворотка' }"
              @click="setActiveTab('Сыворотка')"
          >
            Сыворотка
          </button>
        </li>
        <li class="catalog__tab">
          <button
              type="button"
              :class="{ 'active': activeTab === 'Крем' }"
              @click="setActiveTab('Крем')"
          >
            Крем
          </button>
        </li>
      </ul>
      <ul class="catalog__list">
        <li
            v-for="cream in filteredCreams"
            :key="cream.id"
            class="catalog__li"
        >
          <RouterLink
              class="catalog__item"
              :to="{ name: 'CreamDetail', params: { id: cream.id } }"
              target="_blank"
          >
            <picture>
              <source :srcset="`${cream.webp1x} 1x, ${cream.webp2x} 2x`" type="image/webp" />
              <img
                  :data-src="cream.fallback"
                  width="767"
                  height="767"
                  alt="крем-новинка"
                  class="catalog__img"
              />
            </picture>
            <div class="catalog__title-small">
              <p>{{ cream.title }}</p>
              <span>{{ cream.weight }}</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.catalog {
  margin-bottom: 80px;

  .catalog__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .catalog__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 21px;
    margin-bottom: 20px;

    @include vp-767 {
      gap: 10px;
    }

    .catalog__tab {

      button {
        background-color: transparent;
        padding: 6px 35px;
        color: #BFBFBF;
        border-radius: 5px;
        border: 1px solid #BFBFBF;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.4s, border 0.4s;

        &:hover {
          color: #34a740;
          border: 1px solid #34a740;

          @include vp-767 {
            color: #BFBFBF;
            border: 1px solid #BFBFBF;
          }
        }

        //&:focus {
        //  color: #1F6B9A;
        //  border: 1px solid #1F6B9A;
        //}

        &.active {
          border: 1px solid #1F6B9A;
          color: #1F6B9A;
        }
      }
    }
  }

  .catalog__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px 20px;
    justify-content: space-between;

    @include vp-767 {
      grid-template-columns: 1fr;
      padding: 0 15px;
      gap: 22px;
      justify-content: center;
    }

    .catalog__li {
      width: 100%;
      display: flex;
      background-image: var(--bg);
      justify-content: center;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      @include vp-767 {
        background-image: none;
        justify-content: inherit;
      }
    }

    .catalog__item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      cursor: pointer;

      @include vp-767 {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
      }

      .catalog__img {
        width: 100%;
        height: auto;
        border-radius: 10px;

        @include vp-767 {
          margin-bottom: 10px;
          border-radius: 15px;
        }
      }

        .catalog__title-small {
          display: grid;
          grid-template-columns: 1fr 55px;
          text-align: left;

          @include vp-767 {
            max-width: 100%;
            justify-content: center;
          }

          span {
            justify-self: end;

            @include vp-767 {
              color: #666666;
            }
          }

        .catalog__link {
          display: flex;
          gap: 0 20px;
          align-items: center;
          flex-wrap: wrap;

          @include vp-767 {
            gap: 10px 0;
          }
        }
      }
    }
  }
}

</style>
