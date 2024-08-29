<template>
  <section class="price">
    <div class="wrapper">
      <div class="price__container">
        <h1 class="price__title">
          The system is in beta testing. <br />You can use the service for free
        </h1>
        <PagePrice
          :priceValue="{
            currency: '$',
            price: '0',
            period: 'month',
            launched: '1 March',
            structure: structures[0].structure,
          }"
        />
        <PagePrice
          :priceValue="{
            currency: '$',
            price: '10',
            period: 'year',
            launched: '10 December',
            structure: structures[1].structure,
          }"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { structures } from "~/components/PagePrice/structures";
definePageMeta({
  layout: "default",
  footerWelcome: false,
});

useHead({
  title: "RIScope - price",
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
<style scoped lang="scss">
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
