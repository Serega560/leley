<script setup>
import Science from '@/assets/icons/science.svg'
import FactCheck from '@/assets/icons/fact_check.svg'
import MaskedTransitions from '@/assets/icons/masked_transitions.svg'
import WaterDrop from '@/assets/icons/water_drop.svg'
</script>

<template>
  <div class="advantages">
    <div class="container">
      <ul class="advantages__list">
        <li class="advantages__item">
          <Science />
          <h2 class="advantages__title">НАУЧНЫЙ ПОДХОД</h2>
          <p class="advantages__text">Проверенно исследованиями.</p>
        </li>
        <li class="advantages__item">
          <FactCheck />
          <h2 class="advantages__title">РАБОЧИЕ ДОЗИРОВКИ</h2>
          <p class="advantages__text">Эффективность без лишнего.</p>
        </li>
        <li class="advantages__item">
          <MaskedTransitions />
          <h2 class="advantages__title">НЕКОМЕДОГЕННО</h2>
          <p class="advantages__text">Компоненты не закупоривающие поры.</p>
        </li>
        <li class="advantages__item">
          <WaterDrop />
          <h2 class="advantages__title">БЕЗ ЛИШНЕГО</h2>
          <p class="advantages__text">Без красителей и отдушек.</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.advantages {
  margin-top: 40px;
  margin-bottom: 80px;

  @include vp-767 {
    margin-top: 150px;
    margin-bottom: 50px;
  }

  .advantages__list {
    display: grid;
    grid-template-columns: repeat(4, 218px);
    justify-content: space-between;

    @include vp-767 {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 10px;
    }

    .advantages__item {
      display: flex;
      flex-direction: column;
      gap: 5px 0;
      align-items: center;
      justify-content: center;
      text-align: center;

      @include vp-767 {
        justify-content: flex-start;
      }

      svg {
        margin-bottom: 25px;

        @include vp-767 {
          width: 30px;
          height: 30px;
        }
      }

      .advantages__title {
        font-size: 16px;
        font-weight: 700;
      }

      .advantages__text {

        @include vp-767 {
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
}

</style>