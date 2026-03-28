<script setup>

</script>

<template>
  <div class="new">
    <div class="container">
      <h1 class="new__title">Новинки</h1>
      <div class="mew__block">
        <a target="_blank" href="https://www.ozon.ru/product/holl-leley-krem-lifting-protiv-vozrastnyh-izmeneniy-dlya-profilaktiki-ptoza-s-peptidami-i-kofeinom-3286844095/?_bctx=CAQQwa4w&hs=1&tab=reviews">
          <p class="new__text">NEW</p>
          <img class="mew__img" src="../assets/img/oval.jpg" width="960" height="1280" alt="фото крема">
          <div class="mew__subtitle-weight">
          <p class="new__subtitle">Крем-лифтинг для четкости контура лица, для профилактики птоза и купероза</p>
            <span class="mew__weight">30 мл</span>
          </div>
          <p class="new__description">Крем на основе ламеллярной эмульсии сочетает пептиды, экстракты центеллы азиатской и
            лимфодренажные активы для комплексного укрепления кожи и улучшения чёткости контура лица.
            Ускоряет микроциркуляцию и лимфодренаж, снижая отёчность. Повышает плотность, упругость и
            эластичность кожи, профилактируя гравитационный птоз, способствует разглаживанию морщин.</p>
        </a>

        <a target="_blank" href="https://www.ozon.ru/product/leley-lifting-syvorotka-ot-morshchin-s-retinolom-0-3-i-ekstraktom-tsentelly-aziatskoy-3267268576/?_bctx=CAQQwa4w&hs=1&tab=reviews">
          <p class="new__text">NEW</p>
          <img class="mew__img" src="../assets/img/retinol_0,3.jpg" width="1280" height="1102" alt="фото крема">
          <div class="mew__subtitle-weight">
            <p class="new__subtitle">Лифтинг-сыворотка от морщин с ретинолом 0,3% и экстрактом центеллы азиатской</p>
            <span class="mew__weight">30 мл</span>
          </div>
          <p class="new__description">Сыворотка с липосомальной формой ретинола позволяет доставлять его глубже в кожу и высвобождать постепенно,
            снижая риск раздражений. Доза в 0,3% - мягкий уровень: подходит как для новичков с плотной кожей, так и продолжающих
            использовать ретинол; работает на улучшение текстуры кожи, стимуляцию синтеза коллагена и профилактику морщин,
            эффективно борется с пигментацией. Снижает акне</p>
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.new {
  margin-bottom: 80px;

  @include vp-767 {
    margin-bottom: 50px;
  }

  .new__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .mew__block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @include vp-767 {
      grid-template-columns: 1fr;
    }

    a {
      position: relative;
    }

    .new__text {
      position: absolute;
      top: 15px;
      left: 15px;
      content: 'NEW';
      z-index: 1;
      color: red;
      font-weight: 600;
      box-shadow: 2px 2px 15px 5px var(--color-default-white);
    }

    .mew__img {
      margin-bottom: 14px;
      border-radius: 15px;
      width: 387px;
      height: 384px;
      z-index: 0;

      @include vp-767 {
        width: 100%;
        height: auto;
      }
    }

    .mew__subtitle-weight {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 10px;

      .new__subtitle {
        width: 320px;

        @include vp-767 {
          font-size: 14px;
          width: 100%;
        }
      }

      .mew__weight {
        color: #666666;

        @include vp-767 {
          font-size: 14px;
          width: 65px;
          justify-content: end;
          display: flex;
        }
      }
    }

    .new__description {
      font-size: 14px;
      color: #666666;
      width: 387px;

      @include vp-767 {
        width: 100%;
      }
    }
  }
}

</style>
