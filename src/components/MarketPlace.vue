<script setup>
import Ozon from "@/assets/icons/ozon.svg"
import Wilberris from "@/assets/icons/wildberries.svg"
</script>

<template>
  <div class="market">
    <div class="container">
      <div class="market__block">
        <a class="market__ozon" target="_blank" href="https://www.ozon.ru/seller/effektivnaya-kosmetika-792385/?miniapp=seller_792385">
<!--          <picture>-->
<!--            <img class="market__bg market__bg&#45;&#45;ds" src="../assets/img/ozon_ds.png" width="588" height="172"-->
<!--                 alt="фото крема на фоне ozon"/>-->
<!--            <img class="market__bg market__bg&#45;&#45;mb" src="../assets/img/ozon_mb.png" width="335" height="94"-->
<!--                 alt="фото крема на фоне ozon"/>-->
<!--          </picture>-->
          <div class="market__content">
            <div>
              <span>Мы на</span>
              <Ozon/>
            </div>
            <a class="market__button button" target="_blank"
               href="https://www.ozon.ru/seller/effektivnaya-kosmetika-792385/?miniapp=seller_792385">Подробнее</a>
          </div>
        </a>
<!--        стили для двух маркетплэйсов-->
<!--        <a class="market__wildberres" target="_blank" href="#">-->
<!--          <picture>-->
<!--            <img class="market__bg market__bg&#45;&#45;ds" src="../assets/img/wildberres_ds.png" width="588" height="172"-->
<!--                 alt="фото крема на фоне wilberris"/>-->
<!--            <img class="market__bg market__bg&#45;&#45;mb" src="../assets/img/wildberres_mb.png" width="335" height="94"-->
<!--                 alt="фото крема на фоне wilberris"/>-->
<!--          </picture>-->
<!--          <div class="market__content">-->
<!--            <div>-->
<!--              <span>Мы на</span>-->
<!--              <Wilberris/>-->
<!--            </div>-->
<!--            <a class="market__button button" target="_blank"-->
<!--               href="#">Подробнее</a>-->
<!--          </div>-->
<!--        </a>-->
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;


.market {
  padding: 80px 0 40px;

  @include vp-767 {
    padding: 30px 0 0;
    margin-bottom: 20px;
  }

  .market__block {
    background-image: url("../assets/img/ozon_ds_only.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 172px;
    width: 100%;

    @include vp-767 {
      grid-template-columns: 1fr;
      gap: 20px;
      min-height: 100px;
      border-radius: 30px;
    }

    .market__ozon,
    .market__wildberres {
      position: relative;
      border-radius: 30px;
      cursor: auto;
      width: 100%;

      @include vp-767 {
        cursor: pointer;
      }
    }

    .market__wildberres {

      .market__content {

        span {
          gap: 10px;
        }
      }
    }

    .market__bg--ds {
      display: block;
      height: auto;

      @include vp-767 {
        display: none;
      }
    }

    .market__bg--mb {
      display: none;

      @include vp-767 {
        display: block;
        width: 100%;
      }
    }

    .market__content {
      top: 35px;
      left: 55px;
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      // стили для двух маркетплэйсов
      //transform: translateX(-50%) translateY(-50%);
      position: absolute;

      @include vp-767 {
        // стили для двух маркетплэйсов
        //gap: 5px;
        //left: 50%;

        top: 23px;
        left: 7%;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 24px;
          font-weight: 700;

          @include vp-767 {
            font-size: 14px;
            font-weight: 500;
            width: 50px;
          }
        }

        @include vp-767 {
          gap: 10px;
        }

        svg {
          color: var(--color-dodger-blue);
          width: 166px;

          @include vp-767 {
            width: 110px;
          }
        }
      }

      .market__button {
        padding: 9px 50px;
        text-align: center;
        border-radius: 16px;
        border: 1px solid var(--color-default-black);

        @include vp-767 {
          display: none;
        }
      }
    }
  }
}

</style>
