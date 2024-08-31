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
import type { Question } from "@/types";
import { QuestionItem } from "../QuestionItem";
defineProps<{
  questions: Array<Question>;
}>();
</script>
<style lang="scss">
.questions-list {
  @include rest-list;
  display: flex;
  flex-direction: column;
}
</style>
