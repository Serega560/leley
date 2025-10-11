<script setup>
import Logo from '@/assets/icons/logo.svg';

</script>

<template>
  <div class="brand" id="brand">
    <div class="container">
      <h1 class="brand__title">О бренде</h1>
      <div class="brand__block">
        <div class="brand__description">
          <div class="brand__mobile">
            <Logo />
            <p> — молодой и амбициозный российский бренд основан в апреле 2023 года,
            производящий высокоэффективную</p>
          </div>
          <div class="brand__desc">
            <Logo />
            <p>
              — молодой и амбициозный российский бренд основан в апреле 2023 года,
              производящий высокоэффективную</p>
          </div>
          <p>косметику для домашнего ухода за кожей лица и тела. В основе наших разработок лежат принципы корнеотерапии и
            комплексное воздействие на различные типы и состояния кожи. В приоритете - работа с возрастными изменениями, а
            также с такими проблемами, как купероз, розацеа, акне, пигментация и другие. Мы создаем рабочие формулы косметических средств с
            учетом современных исследований и достижений науки в области ухода за кожей.
          </p>
          <p>Косметику LELEY производят на предприятии, которое постоянно развивается и совершенствуется. Мы используем
            современные технологии базы и многоуровневую систему контроля качества — от момента поступления сырья до
            складирования готовой продукции. Наши ключевые особенности:
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.brand {
  padding: 28px 0 0;

  @include vp-767 {
    border: none;
    padding: 0;
  }

  .brand__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .brand__block {

    .brand__description {

      .brand__mobile {
       display: none;

        @include vp-767 {
          display: grid;
          grid-template-columns: 110px 1fr;
          align-items: center;
          gap: 10px;
        }
      }

      .brand__desc {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: start;
        gap: 10px;
        margin-bottom: 13px;

        @include vp-767 {
          display: none;
        }

        svg {
          margin-top: 4px;
        }
      }

      p {
        font-size: 18px;
        line-height: 1.3;
        display: inline-block;

        @include vp-767 {
          font-size: 14px;
          align-self: end;
        }
      }

      p:not(:last-child) {
        margin-bottom: 13px;
      }

      span {
        display: inline-block;
        margin-bottom: 13px;
      }
    }
  }
}
</style>
