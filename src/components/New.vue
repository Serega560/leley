<script setup>

</script>

<template>
  <div class="new">
    <div class="container">
      <h1 class="new__title">Новинки</h1>
      <div class="mew__block">
        <a href="https://www.ozon.ru/product/leley-lamellyarnyy-krem-dlya-kozhi-vokrug-glaz-s-lifting-effektom-ot-vseh-tipov-morshchin-ot-otekov-2121421631/?at=mqtkzGklEcLg2GrxCL52YGmF3LEwgQtVwonMJup2ERym">
          <img class="mew__img-ds" src="../assets/img/new_1.png" width="692" height="409" alt="фото крема">
          <img class="mew__img-mb" src="../assets/img/new_1mb.png" width="335" height="147" alt="фото крема">
          <div class="mew__subtitle-weight">
          <p class="new__subtitle">Ламеллярный крем с лифтинг — эффектом</p>
            <span class="mew__weight">15 мл</span>
          </div>
          <p class="new__description">Сыворотка содержит высокие концентрации активных компонентов и обладает
            антиоксидантным действием, замедляет процессы старения, стимулирует  синтез коллагена, эластина и
            гиалуроновой кислоты. Сыворотка борется....</p>
        </a>

        <a href="https://www.ozon.ru/product/leley-uvlazhnyayushchiy-omolazhivayushchiy-tonik-s-pantenolom-ektoinom-i-nuf-100-ml-1728660602/?at=08tYVyZDBcrKAow1UZBZ9LEsGwnXNGi6EqkW1HEmm2MV">
          <img class="mew__img-ds" src="../assets/img/new_2.png" width="488" height="409" alt="фото крема">
          <img class="mew__img-mb" src="../assets/img/new_2mb.png" width="335" height="147" alt="фото крема">
          <div class="mew__subtitle-weight">
            <p class="new__subtitle">Увлажняющий омолаживающий тоник</p>
            <span class="mew__weight">100 мл</span>
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
    display: grid;
    grid-template-columns: 692px 488px;
    gap: 20px;

    @include vp-767 {
      grid-template-columns: 1fr;
    }

    .mew__img-ds {
      margin-bottom: 14px;

      @include vp-767 {
        display: none;
      }
    }

    .mew__img-mb {
      display: none;

      @include vp-767 {
        display: block;
        margin-bottom: 12px;
        width: 100%;
        object-fit: cover;
      }
    }

    .mew__subtitle-weight {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 10px;

      .new__subtitle {
        width: 370px;

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
    }
  }
}

</style>