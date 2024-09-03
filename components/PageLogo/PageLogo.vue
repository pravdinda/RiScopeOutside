<template>
  <NuxtLink to="/">
    <div class="logo" :class="{ logo_white: isWhite }">
      <h2 class="logo__title">Riscope</h2>
      <span class="logo__status">{{ status }}</span>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Logo } from "@/types/index";
withDefaults(defineProps<Logo>(), {
  status: "",
  isWhite: false,
});
</script>
<style lang="scss">
.logo {
  display: flex;
  align-items: flex-end;
  color: var(--text-color);
  &_white {
    color: var(--bg-color);
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
    color: var(--blue-color);
  }
}
</style>
