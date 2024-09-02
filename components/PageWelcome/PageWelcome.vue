<template>
  <section class="welcome">
    <div class="welcome__content">
      <h1 class="welcome__title">{{ title }}</h1>
      <p class="welcome__paragraph">
        {{ description }}
      </p>
      <WelcomeForm :isDark="isDark" />
    </div>
    <div class="welcome__footer" v-if="showFooter">
      <div class="welcome__raiting">
        <div class="raiting">
          <img :src="star" v-for="n in 5" :key="n" />
        </div>
        <p class="raiting__comment">{{ $t("welcome.raitingUsersCount") }}</p>
      </div>
      <ul class="welcome__links">
        <li>
          <NuxtLink to="#" class="welcome__link"> Privacy </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="welcome__link"> Terms </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import star from "@/public/img/star.svg";
import type { PageWelcomeComponent } from "@/types/index";
withDefaults(defineProps<PageWelcomeComponent>(), {
  title: "",
  description: "",
  showFooter: false,
  isDark: false,
});
</script>
<style lang="scss">
.welcome {
  margin: 0 auto 150px;
  max-width: 1440px;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__content {
    margin: auto;
    max-width: 820px;
    width: 100%;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 55px;
    line-height: 67px;
    font-weight: 600;
    text-align: center;
  }
  &__paragraph {
    margin: 25px auto 0 auto;
    width: 670px;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
  &__footer {
    margin: 0 0 40px 0;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__links {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    list-style: none;
  }
  &__link {
    color: $blue-color;
    text-decoration: underline;
    transition: ease-in-out 0.365s;
    &:hover {
      color: $main-color;
    }
  }
}
.welcome_footer {
  margin: 0 auto 0;
  height: auto;
  background: none;
  .welcome__content {
    max-width: 810px;
    width: 100%;
    margin: 80px auto 50px auto;
    .welcome__paragraph {
      margin: 0 auto;
      width: 670px;
    }
  }
}
.raiting {
  margin: 0 0 10px 0;
  height: 25px;
  img {
    margin: 0 5px 0 0;
    &:last-child {
      margin: 0 0 0 0;
    }
  }
  &__comment {
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    color: $gray-color;
  }
}
</style>
