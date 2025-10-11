<script setup>
import {ref} from "vue";
import Stars from "@/assets/icons/stars.svg";

const reviews = ref([
  {
    id: 1,
    name: "Галина Ф.",
    nameCream: "Восстанавливающий крем для лица",
    rating: "5.0",
    review: "Крем лёгкий, без запаха, быстро впитывается. Кажется стали бледнее сосуды расширенные. Надеюсь, " +
        "улучшит мою кожу. "
  },
  {
    id: 2,
    name: "Александра А.",
    nameCream: "Восстанавливающий крем для лица",
    rating: "5.0",
    review: "отличный крем, барьерный+нуф+много чего еще. структура шелковистая, " +
        "впитывается, кожа становится напитанная." +
        "Беру уже третий раз, хотелось бы подешевле и беру периодически другие крема " +
        "подешевле, но возвращаюсь к этому. Очень советую! "
  },
]);

</script>

<template>
  <div class="rating-reviews" id="rating-reviews">
    <h2 class="rating-reviews__title">Рейтинг и Отзывы</h2>
    <div class="rating-reviews__block">
      <div class="grade">
        <p>Cредняя оценка 4.83
          <Stars/>
        </p>
        <img src="../assets/img/rating.png" width="349" height="139" alt="рейтинг"/>
      </div>
      <div class="rating-reviews__reviews">
        <p>Всего <b>159 отзывов</b></p>
        <ul class="rating-reviews__list">
          <li class="rating-reviews__item" v-for="item in reviews" :key="item.id">
            <span class="rating-reviews__name">{{ item.name }}</span>
            <a class="rating-reviews__name-cream" target="_blank"
               href="https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739/?__rr=1&at=83tBDYNznIVvGmDPi1VwEnJCnAjO12IEEZDlDcwnR4lX">{{
                item.nameCream
              }}</a>
            <span class="rating-reviews__rating">
            {{ item.rating }}<Stars/>
          </span>
            <span class="rating-reviews__review">
            {{ item.review }}
          </span>
          </li>
        </ul>
        <a class="rating-reviews__link" target="_blank"
           href="https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739/?__rr=1&at=83tBDYNznIVvGmDPi1VwEnJCnAjO12IEEZDlDcwnR4lX">
          Читать все отзывы
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.rating-reviews {
  padding: 0 0 92px;

  @include vp-767 {
    padding: 0 0 9px;
  }

  .rating-reviews__block {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 0 77px;

    @include vp-767 {
      display: flex;
      flex-direction: column;
    }

    .grade {

      @include vp-767 {
        margin-bottom: 20px;
      }

      p {
        display: flex;
        gap: 0 7px;
        text-align: left;
        font-size: 16px;
        margin-bottom: 24px;

        @include vp-767 {
          font-size: 14px;
          margin-bottom: 10px;
          gap: 2px;
        }
      }

      svg {

        @include vp-767 {
          width: 73px;
          height: 16px;
        }
      }
    }

    .rating-reviews__reviews {

      p {
        margin-bottom: 20px;
        font-size: 16px;

        @include vp-767 {
          display: none;
        }
      }
    }
  }

  .rating-reviews__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .rating-reviews__list {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    margin-bottom: 20px;
  }

  .rating-reviews__item {
    padding: 17px;
    display: flex;
    flex-direction: column;
    gap: 5px 0;

    .rating-reviews__name {
      font-size: 24px;
      font-weight: 700;

      @include vp-767 {
        font-size: 16px;
      }
    }

    .rating-reviews__name-cream {
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid var(--color-default-black);
      width: max-content;
      cursor: pointer;

      &:hover {
        color: var(--color-dodger-blue);
        border-bottom: 1px solid var(--color-dodger-blue);

        @include vp-767 {
          color: var(--color-default-black);
          border-bottom: 1px solid var(--color-default-black);
        }
      }
    }

    .rating-reviews__rating {
      display: flex;
      align-items: center;
      gap: 0 4px;
      font-size: 18px;
      line-height: 18px;

      @include vp-767 {
        font-size: 14px;
        align-items: start;
        gap: 0;

        svg {
          height: 16px;
          width: 73px;
        }
      }
    }

    .rating-reviews__review {
      font-size: 16px;
      line-height: 16px;

      @include vp-767 {
        font-size: 14px;
        line-height: 14px;
      }

      a {
        display: flex;
        justify-content: end;
        font-size: 14px;
        color: var(--color-jordy-blue);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .rating-reviews__link {
    display: block;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid var(--color-default-black);
    width: max-content;

    @include vp-767 {
      font-size: 14px;
      line-height: 14px;
    }

    &:hover {
      color: var(--color-dodger-blue);
      border-bottom: 1px solid var(--color-dodger-blue);

      @include vp-767 {
        color: var(--color-default-black);
        border-bottom: 1px solid var(--color-default-black);
      }
    }
  }
}
</style>
