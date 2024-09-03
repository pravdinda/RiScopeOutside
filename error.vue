<template>
  <section class="error">
    <PageLogo status="beta" class="error__logo" />
    <div class="error__container">
      <div class="error__content">
        <h1 class="error__code">{{ error.statusCode }}</h1>
        <p v-if="error.statusCode === 404" class="error__message">
          This page could not be found
        </p>
        <NuxtLink to="/" class="error__button error__button_style"
          >Main page</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app";
defineProps({
  error: Object as () => NuxtError,
});

useHead({
  title: `RIScope - ${error.statusCode}`,
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
<style lang="scss">
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: url("@/public/img/error_bg.svg");
  background-position: 50% 65%;
  background-repeat: no-repeat;
  &__container {
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    width: 453px;
  }
  &__logo {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__code {
    margin: 0;
    font-size: 55px;
    line-height: 67px;
    color: $blue-color;
    text-align: center;
  }
  &__message {
    margin: 10px 0 40px;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
  }
  &__button {
    @include base-button;
    &_style {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 152px;
      height: 49px;
    }
  }
}
</style>
