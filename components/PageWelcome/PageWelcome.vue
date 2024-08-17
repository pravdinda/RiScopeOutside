<template>
  <section class="welcome">
    <div class="welcome__content">
      <h1 class="welcome__title">{{ title }}</h1>
      <p class="welcome__paragraph">
        {{ description }}
      </p>
      <WelcomeForm />
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
<style scoped lang="scss">
.welcome {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("./img/welcome_bg.svg");
  background-repeat: no-repeat;
  background-position: 0 50px;
  &__content {
    margin: 80px auto 0 auto;
    max-width: 670px;
    width: 100%;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 55px;
    line-height: 67px;
    font-weight: 600px;
    text-align: center;
  }
  &__paragraph {
    margin: 25px 0 0 0;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
}
.welcome_footer {
  height: auto;
  background: none;
  .welcome__content {
    max-width: 780px;
    width: 100%;
    margin: 80px auto 50px auto;
    .welcome__paragraph {
      margin: 0 auto;
      width: 670px;
    }
  }
}
</style>
