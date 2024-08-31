<template>
  <section class="questions">
    <div class="questions__container container_left">
      <h2 class="questions__title">{{ $t("questions.title") }}</h2>
      <p class="questions__description">
        {{ $t("questions.description") }}
      </p>
    </div>
    <div class="questions__container container_right">
      <QuestionsList :questions="questions" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { QuestionsList } from "@/components/PageQuestions/QuestionsList";
import { questions } from "./questions.list";
</script>
<style lang="scss">
.questions {
  margin: 0 0 150px 0;
  display: flex;
  &__container {
    width: 50%;
  }
  &__title {
    margin: 0 0 25px 0;
    width: 390px;
    font-size: 40px;
    line-height: 50px;
    font-weight: 600;
    color: $main-color;
  }
  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    color: $main-color;
  }
  &__list {
    margin: 0 0 0 auto;
  }
}
.container_left {
  width: 558px;
}
.container_right {
  margin: 0 0 0 auto;
}
</style>
