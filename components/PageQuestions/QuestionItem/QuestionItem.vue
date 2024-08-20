<template>
  <li class="question-item">
    <div class="question-item__header">
      <h3
        class="question-item__title"
        :class="{ 'question-item__title_open': itemOpen }"
        @click="handleOpenQuestion"
      >
        {{ question.question }}
      </h3>
      <img :src="itemOpen ? close : open" />
    </div>
    <div class="question-item__content" :class="{ open: itemOpen }">
      <p class="question-item__text">
        {{ question.answer }}
      </p>
    </div>
  </li>
</template>
<script setup lang="ts">
import open from "@/public/img/open.svg";
import close from "@/public/img/close.svg";
const itemOpen = ref(false);
function handleOpenQuestion() {
  return (itemOpen.value = !itemOpen.value);
}
defineProps<{
  question: {
    question: string;
    answer: string;
  };
}>();
</script>
<style scoped lang="scss">
.question-item {
  margin: 0 0 20px 0;
  border-bottom: 1px solid $gray-color;
  &__header {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: ease-in-out 0.365s;
    &:hover {
      color: $blue-color;
      cursor: pointer;
    }
  }
  &__content {
    height: 0;
    opacity: 0;
    display: none;
  }
  &__title {
    margin: 0;
    width: 100%;
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    &_open {
      color: $blue-color;
    }
  }
  &__text {
    margin: 0 0 15px 0;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
  }
  &:last-child {
    margin: 0;
  }
}
.open {
  animation-name: item-open;
  animation-duration: 1s;
  height: auto;
  opacity: 1;
  display: block;
}
@keyframes item-open {
  from {
    height: auto;
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
