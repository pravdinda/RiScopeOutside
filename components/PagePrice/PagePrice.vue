<template>
  <div class="price-container">
    <div class="price-block">
      <div class="price-block__left">
        <ul class="price-block__structure-list">
          <li
            class="price-block__structure-item"
            v-for="(item, index) in sliceStructure"
            :key="index"
          >
            <img :src="check_price" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="price-block__right">
        <div class="price-block__price-container">
          <div class="price-block__price">
            <span v-html="$t('price.currency')"></span>
            <span>{{ priceValue.price }}</span>
          </div>
          <span class="price-block__time"
            >/{{ $t(`global.${priceValue.period}`) }}</span
          >
        </div>
        <button class="price-block__button price-block__button_price">
          {{ $t("price.tasteButton") }}
        </button>
      </div>
    </div>
    <p class="price-container__launch">
      {{ $t("price.launch") }} {{ launchDate }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { PriceValue } from "@/types";
import check_price from "@/public/img/check_price.svg";
const props = defineProps<{
  priceValue: PriceValue;
}>();
const sliceStructure = computed(() => {
  return props.priceValue.structure.slice(0, 6);
});
const launchDate = computed(() => {
  return `${props.priceValue.launched.day}  ${props.priceValue.launched.month}`;
});
</script>
<style lang="scss">
.price-container {
  margin: 0 0 40px 0;
  &__launch {
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-color);
    text-align: center;
  }
}
.price-block {
  margin: 0 0 20px 0;
  padding: 39px 70px;
  width: 100%;
  background-color: var(--blue-color);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-image: url("img/bluetab_bg_l.svg");
  background-repeat: no-repeat;
  background-position: 150% 50px;
  &__right {
    padding: 0 0 0 112px;
    display: flex;
    flex-direction: column;
    border-left: 2px solid var(--bg-color);
  }
  &__price-container {
    display: flex;
    align-items: flex-end;
    margin: 0 0 auto 0;
    color: var(--bg-color);
  }
  &__structure-list {
    list-style: none;
    margin: 0;
    padding: 0;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    font-size: 16px;
    line-height: 25px;
    color: var(--bg-color);
  }
  &__structure-item {
    margin: 0 30px 20px 0;
    display: flex;
    img {
      margin: 0 10px 0 0;
      width: 24px;
      height: 24px;
      display: inline-block;
    }
    &:nth-child(3n) {
      margin: 0 0 0 0;
    }
  }
  &__price {
    font-size: 40px;
    line-height: 45px;
    font-weight: 600;
  }
  &__time {
    margin: 0 0 5px 0;
  }
  &__button {
    @include base-button($min-w: 165px, $dark: true);
    &_price {
      height: 49px;
      background-color: var(--bg-color);
      &:hover {
        background-color: var(--main-color);
      }
    }
  }
}
</style>
