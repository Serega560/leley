<script setup>
import {ref, computed, onMounted, onBeforeUnmount, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

import {creams} from '../data/creams.js'
import Stars from "@/assets/icons/stars.svg";
import Next from "@/assets/icons/next.svg";
import Prev from "@/assets/icons/prev.svg";
import Ozon from "@/assets/icons/ozon.svg";
import Product from "@/views/Product.vue";
import RatingReviews from "@/views/RatingReviews.vue";

const route = useRoute()
const router = useRouter()

const creamId = computed(() => Number(route.params.id))
const cream = computed(() => creams.find(c => c.id === creamId.value) || {})

const expandedCompound = ref(false)
const isMobile = ref(false)
const zoomed = ref(false) // для модального увеличения

const images = computed(() => {
  const c = cream.value || {};
  return c.gallery || [];
});


// Активная картинка и окно миниатюр
const activeIndex = ref(0)
const thumbStartIndex = ref(0)
const maxThumbs = ref(3)

function checkMobile() {
  isMobile.value = window.innerWidth <= 767
  if (isMobile.value && images.value.length > 1) {
    activeIndex.value = 1 // на мобилке показываем вторую картинку
  } else {
    activeIndex.value = 0
  }
  if (!isMobile.value) expandedCompound.value = false
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

function toggleCompound() {
  expandedCompound.value = !expandedCompound.value
}

function getTruncatedCompound(text, limit = 70) {
  if (!text) return ''
  if (!isMobile.value) return text
  if (expandedCompound.value || text.length <= limit) return text
  return text.slice(0, limit) + '...'
}

// миниатюры
const current = computed(() => images.value[activeIndex.value] || {})
const visibleThumbs = computed(() =>
    images.value.slice(thumbStartIndex.value, thumbStartIndex.value + maxThumbs.value)
)

function setActive(index) {
  if (!images.value || images.value.length === 0) return
  if (index < 0 || index >= images.value.length) return
  activeIndex.value = index
}


// свайпы
const touchStartX = ref(0)
const touchEndX = ref(0)

function onTouchStart(e) {
  touchStartX.value = e.changedTouches[0].clientX || 0
}

function onTouchEnd(e) {
  touchEndX.value = e.changedTouches[0].clientX || 0;
  handleSwipe()
}

function onMouseDown(e) {
  touchStartX.value = e.clientX || 0
}

function onMouseUp(e) {
  touchEndX.value = e.clientX || 0;
  handleSwipe()
}

function handleSwipe() {
  const dx = touchEndX.value - touchStartX.value
  const threshold = 50
  if (!images.value || images.value.length <= 1) return
  if (dx > threshold) setActive((activeIndex.value - 1 + images.value.length) % images.value.length)
  else if (dx < -threshold) setActive((activeIndex.value + 1) % images.value.length)
}

// следим за активной картинкой для прокрутки миниатюр
watch(activeIndex, n => {
  if (n < thumbStartIndex.value) thumbStartIndex.value = n
  else if (n >= thumbStartIndex.value + maxThumbs.value)
    thumbStartIndex.value = Math.max(0, n - maxThumbs.value + 1)
})

// корректируем индексы при изменении изображений
watch(images, imgs => {
  if (!imgs || imgs.length === 0) {
    activeIndex.value = 0;
    thumbStartIndex.value = 0;
    return
  }
  if (activeIndex.value >= imgs.length) activeIndex.value = 0
  thumbStartIndex.value = Math.min(thumbStartIndex.value, Math.max(0, imgs.length - maxThumbs.value))
}, {deep: true})

function goBack() {
  router.push('/')
}

function toggleZoom() {
  zoomed.value = !zoomed.value
}


</script>

<template>
  <div class="cream__header" :class="{ 'has-bg': cream.leftBgFile,}"
  >
    <div class="cream__block">
      <div class="cream__gallery">
        <div class="cream__main" @touchstart="onTouchStart" @touchend="onTouchEnd" @mousedown="onMouseDown"
             @mouseup="onMouseUp" @click="toggleZoom">
          <picture v-if="current.webp1x || current.webp2x">
            <source :srcset="`${current.webp1x} 1x, ${current.webp2x} 2x`" type="image/webp"/>
            <img :src="current.fallback" :alt="current.title || cream.title" class="cream__img"/>
          </picture>
          <img v-else :src="current.fallback || cream.fallback || ''" :alt="current.title || cream.title"
               class="cream__img"/>
        </div>

        <div class="cream__thumbs">
          <button v-for="(img, i) in visibleThumbs" :key="thumbStartIndex + i"
                  :class="['cream__thumb', { 'is-active': thumbStartIndex + i === activeIndex }]"
                  @click="setActive(thumbStartIndex + i)">
            <picture v-if="img.webp1x || img.webp2x">
              <source :srcset="`${img.webp1x} 1x, ${img.webp2x} 2x`" type="image/webp"/>
              <img :src="img.fallback" :alt="img.title || cream.title" class="cream__thumb-img"/>
            </picture>
            <img v-else :src="img.fallback" :alt="img.title || cream.title" class="cream__thumb-img"/>
          </button>
        </div>
      </div>

      <div class="cream__content">
        <a :href="cream.link" class="cream__rating">
          <span class="cream__rating-stars">{{ cream.rating }}<Stars/></span>
          <span class="cream__review">{{ cream.review }}</span>
        </a>
        <p class="cream__title">{{ cream.title }}</p>
        <div class="cream__weight">
          <span>Объем</span>
          <span>{{ cream.weight }}</span>
        </div>
        <router-link :to="{ name: 'Declarations' }" class="declaration">декларация</router-link>
        <div class="cream__skin">
          <span>Потребности кожи:</span>
          <p>{{ cream.skinNeeds }}</p>
        </div>
        <div class="cream__compound">
          <span>Состав</span>
          <p>
            {{ getTruncatedCompound(cream.compound ?? '') }}
            <template v-if="isMobile && (cream.compound ?? '').length > 100">
              <a href="#" @click.prevent="toggleCompound">{{ expandedCompound ? 'Скрыть' : 'читать полностью' }}</a>
            </template>
          </p>
        </div>
        <div class="cream__link">
          <a class="cream__button button button--next" :href="cream.link">
            <span>Купить <span class="cream__mobile">на</span></span>
            <Next class="cream__next-svg"/>
            <Ozon class="cream__ozon-svg" />
          </a>
          <button class="cream__button button button--prev" @click="goBack">
            <span>Назад</span>
            <Prev class="cream__prev-svg" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="zoomed" class="zoom-overlay" @click="toggleZoom">
      <img :src="current.fallback" :alt="current.title" class="zoom-img"/>
    </div>

    <div class="cream__main">
      <div class="container">
        <Product/>
        <RatingReviews/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.cream__header {
  position: relative;
  padding: 0 120px;
  margin: 0 auto;
  overflow: visible;

  @include vp-767 {
    position: static;
    padding: 0;
  }

  .cream__block {
    display: grid;
    grid-template-columns: 363px 1fr;
    gap: 0 30px;
    max-width: 1440px;
    padding: 40px 110px;
    position: relative;
    z-index: 1;

    @include vp-767 {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .cream__gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      @include vp-767 {
        width: 100%;
      }
    }

    .cream__main {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-default-white);
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
      user-select: none;
      width: 100%;
      margin-bottom: 16px;

      @include vp-767 {
        box-shadow: none;
        padding: 0;
      }
    }

    .cream__img {
      max-width: 100%;
      object-fit: cover;
      display: block;
      max-height: 338px;

      @include vp-767 {
        object-fit: cover;
        width: 85vw;
        border-radius: 0;
      }
    }

    .cream__thumbs {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      width: 100%;
      flex-wrap: nowrap;
      margin-bottom: 10px;
      position: relative;
    }

    .cream__thumb {
      border: none;
      background: none;
      padding: 4px;
      border-radius: 8px;
      cursor: pointer;
      transition: transform .12s ease, box-shadow .12s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .cream__thumb-img {
      width: 84px;
      height: 84px;
      object-fit: cover;
      border-radius: 8px;
      display: block;

      @include vp-767 {
        width: 72px;
        height: 72px;
      }
    }

    .cream__thumb.is-active {
      transform: translateY(-6px);
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
    }

    /* стрелки прокрутки миниатюр */
    .thumb-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background: rgba(0, 0, 0, 0.06);
      width: 32px;
      height: 32px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 18px;
      line-height: 0;
    }

    .thumb-nav.prev {
      left: -42px;
    }

    .thumb-nav.next {
      right: -42px;
    }

    .cream__content {
      display: flex;
      flex-direction: column;
      gap: 20px 0;

      @include vp-767 {
        padding: 0 15px;
        gap: 10px;
      }

      .cream__rating {
        display: none;

        @include vp-767 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &:hover {
          color: var(--color-dodger-blue);
          @include vp-767 {
            color: var(--color-default-black);
          }

          svg {
            color: var(--color-dodger-blue);
            @include vp-767 {
              color: var(--color-default-black);
            }
          }
        }

        .cream__review {
          text-decoration: underline;
        }

        svg {
          transition: color .4s;
        }

        span {
          align-self: end;
          font-size: 16px;

          @include vp-767 {
            align-self: start;
            font-size: 14px;
          }
        }
      }

      .cream__rating-stars {
        display: flex;
        gap: 0 3px;
        align-items: start;

        svg {
          height: 19px;

          @include vp-767 {
            height: 15px;
            width: 75px;
          }
        }
      }

      .cream__title {
        font-weight: 400;
        font-size: 48px;
        font-family: "Source Serif 4", serif;
        line-height: 100%;
        text-transform: uppercase;
        width: 550px;

        @include vp-767 {
          font-size: 32px;
        }
      }

      .cream__weight {
        display: grid;
        grid-template-columns: 57px 1fr;
        gap: 45px;

        @include vp-767 {
          grid-template-columns: 1fr;
          gap: 0;
        }

        span {
          font-size: 14px;
        }

        span:nth-child(1) {

          @include vp-767 {
            display: none;
          }
        }

        span:nth-child(2) {
          font-weight: 500;

          @include vp-767 {
            font-weight: 400;
          }
        }
      }

      .declaration {
        display: none;

        @include vp-767 {
          display: block;
          font-size: 14px;
          border-bottom: 1px solid var(--color-default-black);
          width: min-content;
        }
      }

      .cream__skin {
        display: none;
        grid-template-columns: 145px 1fr;
        gap: 0 10px;
        align-items: baseline;

        @include vp-767 {
          display: grid;
          grid-template-columns: 141px 1fr;
          margin-bottom: 5px;
          order: 1;
        }

        span {
          font-size: 16px;

          @include vp-767 {
            font-size: 14px;
            font-weight: 400;
          }
        }

        p {
          font-size: 14px;
        }
      }

      .cream__compound {
        display: grid;
        grid-template-columns: 57px 1fr;
        gap: 0 45px;

        @include vp-767 {
          order: 1;
          gap: 10px;
        }

        span {
          font-size: 14px;
          color: #A1A1A1;
        }

        p {
          font-size: 14px;
          color: #A1A1A1;
          margin: 0;

          a {
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
            color: var(--color-dodger-blue);
            text-decoration: none;
            margin-left: 8px;
            align-self: flex-end;

            &:hover {
              text-decoration: underline;

              @include vp-767 {
                text-decoration: none;
              }
            }
          }
        }
      }

      .cream__link {
        display: grid;
        grid-template-columns: 183px 1fr;
        width: 345px;
        gap: 0 20px;
        align-items: center;

        @include vp-767 {
          grid-template-columns: 1fr;
          margin-bottom: 16px;
          width: 100%;
        }

        .cream__button {
          display: flex;
          align-items: center;
          gap: 0 8px;
          padding: 7.5px 20px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #BFBFBF;
          justify-content: space-between;
          background-color: transparent;

          @include vp-767 {
            justify-content: center;
            gap: 5px;
            padding: 20px 20px;
            border-radius: 0;
            background: #F6F6F6;
          }

          &:hover {
            cursor: pointer;
            color: var(--color-default-white);
            background-color: var(--color-bright-grey);
            @include vp-767 {
              color: var(--color-default-white);
              background-color: var(--color-default-white);
            }

            svg {
              color: var(--color-default-white);
              @include vp-767 {
                color: var(--color-dodger-blue);
              }
            }

            @include vp-767 {
              color: var(--color-default-black);
            }
          }

          &:active {
            color: var(--color-default-black);
            background-color: var(--color-default-white);
            font-weight: 500;
          }
        }

        .cream__mobile {
          display: none;

          @include vp-767 {
            display: inline;
          }
        }

        .button--next {
          width: 100%;

          span {

            @include vp-767 {
              display: contents;
              width: 70px;
            }
          }

          .cream__next-svg {
            transition: color .4s;

            @include vp-767 {
              display: none;
            }
          }

          .cream__ozon-svg {
            display: none;

            @include vp-767 {
              color: var(--color-dodger-blue);
              display: block;
              height: 20px;
            }
          }
        }

        .button--prev{

          &:hover {

            span {
              color: var(--color-default-white);
              font-weight: 500;
            }

            svg {
              color: var(--color-default-white);
            }
          }

          span {
            font-weight: 400;
            color: #BFBFBF;
          }

          svg {
            color: #BFBFBF;
          }

          @include vp-767 {
            display: none;
          }
        }
      }
    }
  }

  .zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: zoom-out;
    background-color: rgba(255, 255, 255, 1);

    .zoom-img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 12px;
    }
  }
}

.cream__header.has-bg {
  background-image: url("@/assets/img/lifting_bg1.png"), url("@/assets/img/lifting_bg1.png");
  background-size: 500px, 400px;
  background-position: right 0 top -100px, left 0 top -780px;
  background-repeat: no-repeat;
  position: relative;
  overflow: visible;
}

//.cream__header::before,
//.cream__header::after {
//  content: '';
//  position: absolute;
//  background-size: contain;
//  background-repeat: no-repeat;
//  background-position: center;
//  z-index: 0;
//  pointer-events: none;
//}
//
//.cream__header::before {
//  background-image: var(--left-bg);
//  width: 350px;
//  height: 350px;
//  top: 780px;
//  left: 0;
//}
//
//.cream__header::after {
//  background-image: var(--right-bg);
//  width: 400px;
//  height: 400px;
//  top: -100px;
//  right: 0;
//}

</style>
