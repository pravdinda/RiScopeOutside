<template>
  <section class="price">
    <div class="wrapper">
      <div class="price__container">
        <h1 class="price__title" v-html="$t('price.title')"></h1>
        <PagePrice
          v-for="(item, index) in structures"
          :priceValue="item"
          :key="index"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { structures } from "~/components/PagePrice/structures.list";
definePageMeta({
  layout: "default",
  footerWelcome: false,
});
useHead({
  title: `RIScope price`,
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
<style lang="scss">
.price {
  min-height: calc(100vh - 80px - 195px);
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    margin: 80px auto;
    width: 900px;
  }
  &__title {
    margin: 0 0 40px 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
