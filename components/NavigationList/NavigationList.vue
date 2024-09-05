<template>
  <ul class="navigation">
    <li
      class="navigation__item"
      v-for="(item, index) in navigation"
      :key="index"
    >
      <NuxtLink :to="localePath(item.link)" class="navigation__link">
        {{ $t(`navigation.mainNavigation[${index}].name`) }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
import { navigation } from "./navigation.list";
</script>
<style lang="scss">
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
