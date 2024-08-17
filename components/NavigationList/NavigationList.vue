<template>
  <ul class="navigation">
    <li class="navigation__item" v-for="item in navigation">
      <NuxtLink :to="item.link" class="navigation__link">{{
        item.name
      }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { navigation } from "./navigation";
</script>
<style scoped lang="scss">
.navigation {
  @include rest-list;
  width: 170px;
  display: flex;
  align-items: center;
  gap: 25px;
  &__item {
    font-size: 16px;
    line-height: 19px;
  }
  &__link {
    color: $main-color;
    text-decoration: none;
    transition: ease-in-out 0.365s;
    &:hover {
      color: $blue-color;
      text-decoration: underline;
    }
  }
}
.footer {
  .navigation {
    &__link {
      color: $background-color;
    }
  }
}
</style>
