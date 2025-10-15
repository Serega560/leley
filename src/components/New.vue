<script setup>

</script>

<template>
  <div class="new">
    <div class="container">
      <h1 class="new__title">Новинки</h1>
      <div class="mew__block">
        <a target="_blank" href="https://www.ozon.ru/product/leley-syvorotka-vyravnivayushchaya-ton-s-traneksamovoy-kislotoy-i-ekstraktom-tsentelly-aziatskoy-2797212826/?at=Vvtz3oVVMuWX0KQGSgOJ3ALTPR65PMUDnYDRGTQGJ54z">
          <img class="mew__img" src="../assets/img/kislota.jpg" width="387" height="384" alt="фото крема">
          <div class="mew__subtitle-weight">
          <p class="new__subtitle">Сыворотка выравнивающая тон с транексамовой кислотой и экстрактом центеллы азиатской</p>
            <span class="mew__weight">30 мл</span>
          </div>
          <p class="new__description">Сыворотка содержит высокие концентрации активных компонентов и обладает
            антиоксидантным действием, замедляет процессы старения, стимулирует  синтез коллагена, эластина и
            гиалуроновой кислоты. Сыворотка борется....</p>
        </a>

        <a target="_blank" href="https://www.ozon.ru/product/leley-lifting-syvorotka-ot-morshchin-s-retinolom-0-15-i-ekstraktom-tsentelly-aziatskoy-2848551772/?at=ywtAZ5GGYTBBX04niyzOAPLh4PKA2Lu8AOXm8CVP0OW">
          <img class="mew__img" src="../assets/img/retinol.jpg" width="387" height="384" alt="фото крема">
          <div class="mew__subtitle-weight">
            <p class="new__subtitle">Лифтинг-сыворотка от морщин с ретинолом 0,15% и экстрактом центеллы азиатской</p>
            <span class="mew__weight">30 мл</span>
          </div>
          <p class="new__description">Сыворотка содержит высокие концентрации активных компонентов и
            обладает  антиоксидантным действием, замедляет процессы старения,
            стимулирует  синтез коллагена, эластина и гиалуроновой кислоты. Сыворотка борется....</p>
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

    .mew__img {
      margin-bottom: 14px;
      border-radius: 15px;

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
