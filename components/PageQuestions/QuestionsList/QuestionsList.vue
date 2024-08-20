<template>
  <ul class="questions-list">
    <QuestionItem
      v-for="(item, index) in questions"
      :key="index"
      :question="item"
    />
  </ul>
</template>
<script setup lang="ts">
import { QuestionItem } from "../QuestionItem";
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
</style>
