<template>
  <ul class="subnavigation">
    <li class="subnavigation__item">See demo</li>
    <li class="subnavigation__item">Try free</li>
  </ul>
</template>
<style lang="scss">
.subnavigation {
  @include rest-list;
  gap: 15px;
  display: flex;
  &__item {
    @include base-button;
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
