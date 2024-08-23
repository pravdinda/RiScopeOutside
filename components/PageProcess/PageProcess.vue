<template>
  <section class="process">
    <div class="process__header">
      <h2 class="process__title">
        We changed the way <br />
        we assess risk
      </h2>
      <p class="process__description">
        With our service, you can minimize risks, improve operational control,
        and significantly save time and resources
      </p>
    </div>
    <div class="process__content">
      <div class="process__content-block">
        <h3 class="process__content-title">Riscope process view</h3>
        <img :src="riscope_process" />
      </div>
      <div class="process__content-block">
        <h3 class="process__content-title">Your company process view</h3>
        <img :src="company_process" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import riscope_process from "@/public/img/riscope_process.png";
import company_process from "@/public/img/company_process.png";
</script>
<style scoped lang="scss">
.process {
  margin: 0 0 150px 0;
  &__header {
    margin: 0 auto 70px;
    width: 690px;
  }
  &__title {
    margin: 0 0 25px 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
  }
  &__description {
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    text-align: center;
  }
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      object-fit: contain;
    }
  }
  &__content-title {
    margin: 0 0 30px 0;
    color: $blue-color;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
