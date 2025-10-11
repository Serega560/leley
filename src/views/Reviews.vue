<script setup>
import {ref, computed} from "vue";
import Stars from "@/assets/icons/stars.svg";
import reviews_1 from "@/assets/img/reviews_1.png"
import reviews_2 from "@/assets/img/reviews_2.png"
import reviews_3 from "@/assets/img/reviews_3.png"

const reviews = ref([
  {
    id: 1,
    img: reviews_2,
    name: "Марина К.",
    nameCream: "Ламеллярный крем с лифтинг эффектом",
    rating: "4.9",
    review: "Крем очень нравится, заказала вторую баночку. Отличный состав крема. В составе есть все, чтобы уменьшить " +
        "выраженность возрастных и мимических морщин, улучшить плотность кожи. Крем делает кожу более упругой и гладкой. " +
        "Хорошо увлажняет кожу. Текстура крема лёгкая, быстро впитывается, никакой липкости нет. Крем пришел хорошо упакованный. "
  },
  {
    id: 2,
    img: reviews_1,
    name: "Наталья Л.",
    nameCream: "Тоник с пантенолом и эктоином",
    rating: "4.8",
    review: "Повторный заказ , очень довольна. Увлажнение, снятие раздражения, комфорт. " +
        "В жаркую погоду могу обходится без крема или сыворотки. Наношу на очищенную кожу " +
        "( гидрофильное масло, пенка), потом сыворотка, затем крем. Кожа комбинированная. " +
        "Колпачек меняю на распылитель ( идет в комплекте), очень удобно и приятно, что " +
        "производитель побеспокоился об этом. Спасибо. "
  },
  {
    id: 3,
    img: reviews_3,
    name: "Оксана Г.",
    nameCream: "Антивозрастная сыворотка с пептидами",
    rating: "4.9",
    review: "Использую вторую банку. Действием довольна, хорошо увлажняет, прошли островки " +
        "обезвоженности (мелких морщинок) на щеках. Про антиейдж эффект говорить сложно, " +
        "но в целом кожа выглядит лучше. Использую вместе с кремом того же бренда с церамидами. "
  }
]);

// Храним состояние раскрытия для каждого отзыва
const expandedReviews = ref({});

const toggleReview = (id) => {
  expandedReviews.value[id] = !expandedReviews.value[id];
};

const getTruncatedReview = (text, id, limit = 100) => {
  if (expandedReviews.value[id] || text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
};
</script>

<template>
  <div class="reviews" id="reviews">
    <div class="container">
      <h2 class="reviews__title">Отзывы</h2>
      <ul class="reviews__list">
        <li class="reviews__item" v-for="item in reviews" :key="item.id">
          <img :src="item.img" width="387" height="73" alt="фото крема">
          <span class="reviews__name">{{ item.name }}</span>
          <p class="reviews__name-cream">{{ item.nameCream }}</p>
          <span class="reviews__rating">
            {{ item.rating }}<Stars/>
          </span>
          <span class="reviews__review">
            {{ getTruncatedReview(item.review, item.id) }}
            <template v-if="item.review.length > 100">
              <a href="#" @click.prevent="toggleReview(item.id)">
                {{ expandedReviews[item.id] ? "Скрыть" : "читать полностью" }}
              </a>
            </template>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media.scss" as *;
@use "@/assets/styles/container.scss" as *;

.reviews {
  margin-bottom: 80px;

  @include vp-767 {
    padding: 0 0 9px;
    margin-bottom: 60px;
  }

  .reviews__title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: "Source Serif 4", serif;

    @include vp-767 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  .reviews__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 18px;

    @include vp-767 {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 0;
      margin-bottom: 2px;
    }
  }

  .reviews__item {
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    min-height: 245px;
    background: #F4F4F4;
    border-radius: 9px;

    @include vp-767 {
      padding: 9px 12px;
      min-height: 115px;
    }

    .reviews__name {
      font-size: 16px;
      font-weight: 700;

      @include vp-767 {
        font-size: 14px;
      }
    }

    .reviews__name-cream {
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid var(--color-default-black);
      width: max-content;

      //&:hover {
      //  color: var(--color-dodger-blue);
      //  border-bottom: 1px solid var(--color-dodger-blue);
      //
      //  @include vp-767 {
      //    color: inherit;
      //    border-bottom: 1px solid var(--color-default-black);
      //  }
      //}
    }

    .reviews__rating {
      display: flex;
      align-items: center;
      gap: 0 4px;
      font-size: 18px;
      line-height: 18px;

      @include vp-767 {
        font-size: 14px;
        align-items: start;

        svg {
          height: 16px;
        }
      }
    }

    .reviews__review {
      font-size: 16px;
      line-height: 16px;

      @include vp-767 {
        font-size: 14px;
      }

      a {
        display: flex;
        justify-content: end;
        font-size: 14px;
        color: var(--color-dodger-blue);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .reviews__item:nth-child(1) {

    .reviews__name-cream{
      color: #E31762;
    }
  }

  .reviews__item:nth-child(2) {

    .reviews__name-cream{
      color: #27B5F3;
    }
  }

  .reviews__item:nth-child(3) {

    .reviews__name-cream{
      color: #568627;
    }
  }
}
</style>
