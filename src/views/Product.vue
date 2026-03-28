<script setup>
import { computed} from 'vue'
import {useRoute} from 'vue-router'
import {creams} from '../data/creams.js'
const route = useRoute()
const creamId = computed(() => Number(route.params.id))
const cream = computed(() => creams.find(c => c.id === creamId.value) || {})

</script>

<template>
  <div class="product">
    <h2 class="product__title">Описание</h2>
    <ul class="product__list">
      <li class="product__text">{{cream.info.advertising}}</li>
      <li class="product__item product__item--mb">
        <p class="product__name">{{ cream.info.action }}</p>
        <p class="product__text">{{cream.info.actionDescription}}</p>
        <p class="product__text">{{cream.info.actionDescription_1}}</p>
        <p class="product__text">{{cream.info.actionDescription_2}}</p>
        <p class="product__text">{{cream.info.actionDescription_3}}</p>
        <p class="product__text">{{cream.info.actionDescription_4}}</p>
        <p class="product__text">{{cream.info.actionDescription_5}}</p>
      </li>
      <li class="product__item product__item--mb">
        <p class="product__name">{{cream.info.choice}}</p>
        <p class="product__text">{{cream.info.choiceAdvantages}}</p>
        <p class="product__text">{{cream.info.choiceAdvantages_1}}</p>
        <p class="product__text">{{cream.info.choiceAdvantages_2}}</p>
        <p class="product__text">{{cream.info.choiceAdvantages_3}}</p>
      </li>
      <li class="product__item product__item--mb">
        <p class="product__name">{{cream.info.result}}</p>
        <p class="product__text">{{cream.info.resultDescription}}</p>
      </li>
      <li class="product__item product__item--mb">
        <p class="product__name">{{cream.info.application}}</p>
        <p class="product__text">{{cream.info.applicationDescription}}</p>
        <p class="product__text">{{cream.info.applicationDescription_1}}</p>
        <p class="product__text">{{cream.info.applicationDescription_2}}</p>
        <p class="product__text">{{cream.info.applicationDescription_3}}</p>
        <p class="product__text">{{cream.info.applicationDescription_4}}</p>
        <p class="product__text">{{cream.info.applicationDescription_5}}</p>
      </li>
    </ul>
    <router-link :to="{ name: 'Declarations' }" class="declaration">декларация</router-link>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/styles/media.scss" as *;
@use '@/assets/styles/container.scss' as *;

.product {
  padding: 60px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .product__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .product__list {
    display: flex;
    flex-direction: column;
    gap: 25px 0;

    @include vp-767 {
      gap: 10px 0;
      margin-bottom: 10px;
    }

    .product__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 100%;
      margin-bottom: 5px;


      @include vp-767 {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }

    .product__text {
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;

      @include vp-767 {
        font-size: 14px;
        line-height: 100%;
      }
    }

    .product__text:not(:last-child) {
      margin-bottom: 7px;
    }
  }

  .product__declaration,
  .product__item--ds {
    display: none;

    @include vp-767 {
      display: block;
    }
  }

  .product__declaration {
    font-size: 14px;
    border-bottom: 1px solid var(--color-default-black);
    width: min-content;
  }
}

</style>
