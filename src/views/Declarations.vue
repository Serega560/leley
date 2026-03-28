<script setup>
import docAntyVozrast from '@/assets/img/diclaration/antiVozrast.jpg'
import docCeramidy from '@/assets/img/diclaration/ceramidy.jpg'
import docLifting from '@/assets/img/diclaration/lifting.jpg'
import docMatTonic from '@/assets/img/diclaration/matTonic.jpg'
import docPeptidyMio from '@/assets/img/diclaration/peptidyMio.jpg'
import docRetinol from '@/assets/img/diclaration/retinol.jpg'
import docRetinol03 from '@/assets/img/diclaration/retinol_0,3.jpg'
import docTraneksamovaya from '@/assets/img/diclaration/traneksamovaya.jpg'
import docUvlTonic from '@/assets/img/diclaration/uvlTonic.jpg'
import docPeptidy from '@/assets/img/diclaration/peptidy.jpg'
import docVitamin from '@/assets/img/diclaration/vitamin.jpg'
import docOval from '@/assets/img/diclaration/oval.jpg'

import {ref} from 'vue'
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
        <p class="declarations__subtitle">Здесь можно ознакомиться с документами.</p>
      </header>

      <div class="declarations__grid">
        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Ламеллярный крем для кожи вокруг глаз с
            лифтинг эффектом от всех типов морщин, от отеков</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 30.01.2030</p>
          <button class="declarations__button button" @click="openDoc(docAntyVozrast)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Ламеллярный крем-флюид для лица с церамидами и
            пребиотиком для всех типов кожи</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docCeramidy)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Ламеллярный крем для кожи вокруг глаз с
            лифтинг эффектом от всех типов морщин, от отеков</h2>
          <p class="declarations__item-desc">RU.0001.21ПН87</p>
          <p class="declarations__item-desc">Действительно до: 10.05.2030</p>
          <button class="declarations__button button" @click="openDoc(docLifting)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Матирующий, увлажняющий тоник с 5%
            ниацинамида, 0,5% цинка и пребиотиками для снижения жирности кожи</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docMatTonic)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Ламеллярный крем-флюид для лица и век с
            пептидами-миорелаксантами от мимических морщин, отеков, увлажняющий</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docPeptidyMio)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Сыворотку выравнивающую тон с транексамовой
            кислотой и экстрактом центеллы азиатской</h2>
          <p class="declarations__item-desc">RU.0001.21ПН87</p>
          <p class="declarations__item-desc">Действительно до: 11.09.2030</p>
          <button class="declarations__button button" @click="openDoc(docTraneksamovaya)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Лифтинг-сыворотку от морщин с ретинолом 0,15%
            и экстрактом центеллы азиатской</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docRetinol)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Омолаживающий крем-флюид для лица и век с
            пептидами и троксерутином против морщин</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docPeptidy)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Сыворотку с витамином С 2% и ниацинамидом 5%
            от морщин, пигментации, для сияния кожи</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 14.09.2029</p>
          <button class="declarations__button button" @click="openDoc(docVitamin)">Открыть</button>
        </article>

        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Увлажняющий, омолаживающий тоник с пантенолом,
            эктоином и НУФ</h2>
          <p class="declarations__item-desc">RU.0001.511172</p>
          <p class="declarations__item-desc">Действительно до: 16.10.2029</p>
          <button class="declarations__button button" @click="openDoc(docUvlTonic)">Открыть</button>
        </article>
        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Лифтинг-сыворотку от морщин с ретинолом 0,3% и экстрактом центеллы азиатской</h2>
          <p class="declarations__item-desc"> ЕАЭС N RU Д-RU.РА12.В.19296/25</p>
          <p class="declarations__item-desc">Действительно до: 29.12.2030</p>
          <button class="declarations__button button" @click="openDoc(docRetinol03)">Открыть</button>
        </article>
        <article class="declarations__item">
          <h2 class="declarations__item-title">Декларация соответствия на Крем-лифтинг для четкости контура лица, для профилактики птоза и купероза</h2>
          <p class="declarations__item-desc">ЕАЭС N RU Д-RU.РА12.В.19317/25</p>
          <p class="declarations__item-desc">Действительно до: 29.12.2030</p>
          <button class="declarations__button button" @click="openDoc(docOval)">Открыть</button>
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

  @include vp-767 {
    padding: 0 0 40px;
  }

  &__header {
    margin-bottom: 24px;
    text-align: left;
  }

  &__title {
    font-size: 24px;
    margin: 0 0 8px;
    font-weight: 700;

    @include vp-767 {
      font-size: 22px;
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
    margin: 0 0 15px;

    @include vp-767 {
      font-size: 16px;
    }
  }

  &__item-desc {
    font-size: 15px;
    color: #444;
    margin: 0 0 10px;
    flex: 1;

    @include vp-767 {
      font-size: 13px;
    }
  }

  .declarations__button {
    align-self: start;
    display: inline-block;
    font-size: 15px;
    margin-top: 15px;
    cursor: pointer;
    background-color: var(--color-quartz);

    &:hover {
      background-color: var(--color-bright-grey);
      color: var(--color-default-white);

      @include vp-767 {
        background-color: var(--color-quartz);
        color: var(--color-default-black);
      }
    }

    &:active {
      background-color: var(--color-default-black);
      color: var(--color-default-white);

      @include vp-767 {
        background-color: var(--color-quartz);
        color: var(--color-default-black);
      }
    }

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
  background-color: rgba(153, 153, 153, 0.7);
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
    top: 65px;
  }
}

.modal__image {
  width: auto;
  height: 80%;
  max-width: 95%;

  @include vp-767 {
    top: 10px;
    right: 10px;
    font-size: 14px;
    padding: 6px 12px;
    height: auto;
  }
}

.body-no-scroll {
  overflow: hidden;
}
</style>
