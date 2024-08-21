<template>
  <NuxtLink to="/">
    <div class="logo" :class="{ logo_white: white }">
      <h2 class="logo__title">Riscope</h2>
      <span class="logo__status">{{ status }}</span>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    status?: string;
    white?: boolean;
  }>(),
  {
    status: "",
    white: false,
  }
);
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: flex-end;
  color: $main-color;
  &_white {
    color: $background-color;
  }
  &__title {
    margin: 0;
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
  &:hover {
    color: $blue-color;
  }
}
</style>
