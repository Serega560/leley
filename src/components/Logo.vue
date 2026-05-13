<script setup>
import Logo from "@/assets/icons/logo.svg";

defineProps({
  inFooter: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a class="img" href="#">
    <Logo class="logo" :class="{ 'logo--footer': inFooter }" />
  </a>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.img {
  font-size: 0;
  width: min-content;

  @include vp-767 {
    grid-column: 1/3;
    grid-row: 3/4;
    width: 100%;
    text-align: center;
  }

  .logo {
    width: 135px;
    height: 27px;
  }

  .logo--footer {
    width: 135px;
    height: 27px;

    @include vp-767 {
      width: 110px;
    }
  }
}
</style>
