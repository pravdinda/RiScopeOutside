<template>
  <section class="opportunities">
    <div class="opportunities__wrapper">
      <h2 class="opportunities__title">Product opportunities</h2>
      <ul class="opportunities__list">
        <li
          v-for="(item, index) in opportunities"
          :key="index"
          class="opportunitie"
        >
          <div class="opportunitie__container">
            <h3 class="opportunitie__title">{{ item.title }}</h3>
            <div v-html="item.text" class="opportunitie__content"></div>
          </div>
          <div class="opportunitie__preview">
            <div class="opportunitie__img"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import { opportunities } from "./opportunities.list";
</script>
<style lang="scss">
.opportunities {
  margin: 0 0 150px 0;
  &__title {
    margin: 0 0 50px 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
  }
  &__wrapper {
    margin: 0 auto;
    max-width: 1440px;
  }
  &__list {
    @include rest-list;
  }
}
.opportunitie {
  padding: 0 0 0 30px;

  height: 390px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(1) .opportunitie__preview::before {
    background-image: url("img/opp_1_l.svg"), url("img/opp_1_r.svg");
    background-repeat: no-repeat;
    background-position: 100% top, -6% 50%;
  }
  &:nth-child(2) .opportunitie__preview::before {
    background-image: url("img/opp_2.svg");
    background-repeat: no-repeat;
    background-position: 0px -57px;
  }
  &:nth-child(3) .opportunitie__preview::before {
    background-image: url("img/opp_3.svg");
    background-repeat: no-repeat;
    background-position: 100% -73px;
    transform: rotate(-9.39deg);
    top: -33px;
    left: -25px;
  }
  &:nth-child(4) .opportunitie__preview::before {
    background-image: url("img/opp_4.svg");
    background-repeat: no-repeat;
    background-position: 0px -63px;
  }
  &:nth-child(5) .opportunitie__preview::before {
    height: 140%;
    background-image: url("img/opp_5.svg");
    background-repeat: no-repeat;
    background-position: -50px -10px;
    bottom: -10%;
  }
  &:nth-child(6) .opportunitie__preview::before {
    height: 115%;
    background-image: url("img/opp_6.svg");
    background-repeat: no-repeat;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
  }
  &__container {
    margin: 0 0 35px 0;
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__content {
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
  }
  &__preview {
    width: 58%;
    display: flex;
    justify-content: center;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
  }
  &__img {
    width: 560px;
    height: 320px;
    background-color: $lightgray-color;
    border-radius: 10px;
    z-index: 2;
  }
  &:nth-child(2n) {
    padding: 0 30px 0 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    .opportunitie__preview {
      width: 53%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .opportunitie__container {
      margin: auto 0 auto 0;
      width: 47%;
    }
  }
}
ol {
  @include rest-list;
}
p {
  margin: 0;
}
</style>
