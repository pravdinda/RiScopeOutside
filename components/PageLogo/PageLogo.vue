<template>
  <div class="logo">
    <h1 class="logo__title">Riscope</h1>
    <span class="logo__status">{{ status }}</span>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    status?: string;
  }>(),
  {
    status: "",
  }
);
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: flex-end;
  &__title {
    margin: 0;
    color: $main-color;
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
  }
  &__status {
    margin: 0 0 0 5px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    font-style: italic;
  }
}
</style>
