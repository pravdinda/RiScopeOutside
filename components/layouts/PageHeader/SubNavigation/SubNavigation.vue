<template>
  <ul class="subnavigation">
    <li
      class="subnavigation__item"
      v-for="(item, index) in subnavigation"
      :key="index"
    >
      <NuxtLink :to="item.link">{{
        $t(`navigation.subNavigation[${index}].name`)
      }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { subnavigation } from "./subnavigation.list";
</script>
<style lang="scss">
.subnavigation {
  @include rest-list;
  gap: 15px;
  display: flex;
  &__item {
    a {
      @include base-button;
    }
  }
}
.footer {
  .subnavigation {
    &__item {
      @include base-button($dark: true);
    }
  }
}
</style>
