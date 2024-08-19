<template>
  <ul class="questions-list">
    <li v-for="(q, index) in questions" :key="index" class="question-item">
      <div class="question-item__header">
        <h3 class="question-item__title">{{ q.question }}</h3>
      </div>
      <p class="question-item__text">{{ q.answer }}</p>
    </li>
  </ul>
</template>
<script setup lang="ts">
defineProps<{
  questions: Array<T>;
}>();
</script>
<style scoped lang="scss">
.questions-list {
  @include rest-list;
  display: flex;
  flex-direction: column;
}
.question-item {
  margin: 0 0 20px 0;
  border-bottom: 1px solid $gray-color;
  &__title {
    margin: 15px 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
  }
  &__text {
    margin: 0 0 15px 0;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
  }
}
</style>
