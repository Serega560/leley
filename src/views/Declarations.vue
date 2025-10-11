<script setup>
import {ref} from 'vue'
// import docPeptides from '@/assets/img/doc_dp.jpg'
// import docCeramides from '@/assets/img/doc_dc.jpg'

const currentDoc = ref(null)

const openDoc = (doc) => {
  currentDoc.value = doc
}

const closeDoc = () => {
  currentDoc.value = null
}

import {watch} from 'vue'

watch(currentDoc, (val) => {
  if (val) {
    document.body.classList.add('body-no-scroll') // блокируем скролл
  } else {
    document.body.classList.remove('body-no-scroll') // разблокируем
  }
})

watch(currentDoc, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'  // блокируем скролл
  } else {
    document.body.style.overflow = ''  // возвращаем скролл
  }
})
</script>
<template>
  <section class="declarations" aria-labelledby="declarations-title">
    <div class="container">
      <header class="declarations__header">
        <h1 id="declarations-title" class="declarations__title">Декларации</h1>
        <p class="declarations__subtitle">Здесь можно ознакомиться с документами. Откроется в новой вкладке.</p>
      </header>

      <div class="declarations__grid">
        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация. Пептиды</h2>
          <p class="declarations__item-desc">Краткое описание декларации (год, номер и т.п.).</p>
          <button class="declarations__button button" @click="openDoc(docPeptides)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация. Церамиды</h2>
          <p class="declarations__item-desc">Краткое описание декларации (год, номер и т.п.).</p>
          <button class="declarations__button button" @click="openDoc(docCeramides)">Открыть</button>
        </article>
      </div>

      <div v-if="currentDoc" class="modal" @click.self="closeDoc">
        <button class="modal__close" @click="closeDoc">Закрыть</button>
        <img :src="currentDoc" alt="Декларация" class="modal__image"/>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.declarations {
  padding: 40px 0;

  &__header {
    margin-bottom: 24px;
    text-align: left;
  }

  &__title {
    font-size: 24px;
    margin: 0 0 8px;
    font-weight: 700;

    @include vp-767 {
      font-size: 32px;
    }
  }

  &__subtitle {
    font-size: 15px;
    color: var(--color-bright-grey);
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @include vp-767 {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  &__item {
    padding: 20px;
    border: 1px solid var(--color-quartz);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include vp-767 {
      padding: 10px;
    }
  }

  &__item-title {
    font-size: 20px;
    margin: 0 0 8px;
  }

  &__item-desc {
    font-size: 15px;
    color: #444;
    margin: 0 0 16px;
    flex: 1;

    @include vp-767 {
      font-size: 13px;
    }
  }

  .declarations__button {
    align-self: start;
    display: inline-block;
    font-size: 15px;

    @include vp-767 {
      padding: 6px 33px;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
}

.modal__close {
  position: absolute;
  top: 70px;
  right: 471px;
  font-size: 16px;
  padding: 8px 18px;
  cursor: pointer;
  background: var(--color-default-black);
  color: var(--color-default-white);
  border: none;
  z-index: 1010;

  @include vp-767 {
    right: 30px;
    font-size: 12px;
    padding: 6px 14px;
    top: 60px;
  }
}

.modal__image {
  width: auto;
  height: 80%;
  max-width: 95%;

  //@include vp-767 {
  //  top: 10px;
  //  right: 10px;
  //  font-size: 14px;
  //  padding: 6px 12px;
  //}
}

.body-no-scroll {
  overflow: hidden;
}
</style>
