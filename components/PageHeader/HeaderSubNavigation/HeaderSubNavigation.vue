<template>
  <ul class="header-subnavigation">
    <li class="header-subnavigation__item">See demo</li>
    <li class="header-subnavigation__item">Try free</li>
  </ul>
</template>
<style scoped lang="scss">
.header-subnavigation {
  @include rest-list;
  gap: 15px;
  display: flex;
  &__item {
    @include base-button;
  }
}
</style>
