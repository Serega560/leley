<script setup>
import Logo from '@/components/Logo.vue'
import Contacts from "@/components/Contacts.vue";
import Menu from '@/components/Menu.vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

const route = useRoute()

// Определяем, находимся ли на главной странице
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__block">

        <Logo class="header__logo" :is-home-page="isHomePage"/>
        <Menu class="header__menu"/>
        <Contacts class="header__contacts" :is-home-page="isHomePage"/>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  .header__block {
    display: flex;
    gap: 15px 0;
    width: 100%;
    align-items: center;
    z-index: 0;

    @include vp-767 {
      flex-direction: column;
      gap: 10px;
    }

    .header__logo {
      padding: 21px;

      svg {
        width: 110px;
        height: 18px;

        @include vp-767 {
          width: 131px;
          height: 21px;
        }
      }

      @include vp-767 {
        padding: 29px 0 15px;
      }
    }

    .header__menu {
      margin-left: auto;

      @include vp-767 {
        margin: 0;
      }
    }

    .header__contacts {
      margin-left: 60px;

      @include vp-767 {
        display: none;
      }
    }
  }
}
</style>
