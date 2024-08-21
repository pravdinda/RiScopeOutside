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
  margin: 0 0 70px 0;
  display: flex;
  &__title {
    margin: 0 0 20px 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
  }
  &__container {
    padding: 30px;
    width: 50%;
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
    width: 50%;
    display: flex;
    justify-content: flex-start;
  }
  &__img {
    width: 560px;
    height: 320px;
    background-color: $lightgray-color;
    border-radius: 10px;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    .opportunitie__preview {
      justify-content: center;
    }
    .opportunitie__container {
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
