<template>
  <section class="opportunities">
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
  </section>
</template>
<script setup lang="ts">
import { opportunities } from "./opportunities";
</script>
<style scoped lang="scss">
.opportunities {
  margin: 0 0 150px 0;
  &__title {
    margin: 0 0 70px 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
  }
  &__list {
    @include rest-list;
  }
}
.opportunitie {
  padding: 0 30px;
  margin: 0 0 70px 0;
  display: flex;
  justify-content: space-between;
  &:nth-child(1) .opportunitie__preview {
    background-image: url("img/opp_1_l.svg"), url("img/opp_1_r.svg");
    background-repeat: no-repeat;
    background-position: 100% top, -15% bottom;
  }
  &:nth-child(2) .opportunitie__preview {
    background-image: url("img/opp_2.svg");
    background-repeat: no-repeat;
    background-position: top;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
  }
  &__container {
    padding: 30px 0;
    width: 45%;
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
    width: 55%;
    display: flex;
    justify-content: center;
  }
  &__img {
    width: 560px;
    height: 320px;
    background-color: $lightgray-color;
    border-radius: 10px;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
    justify-content: space-between;
    .opportunitie__preview {
      justify-content: center;
    }
    .opportunitie__container {
      margin: 0 auto 0 0;
      width: 45%;
      padding: 30px 0;
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
