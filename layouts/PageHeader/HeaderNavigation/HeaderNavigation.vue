<template>
  <ul class="header-navigation">
    <li class="header-navigation__item">Price</li>
    <li class="header-navigation__item">Document</li>
  </ul>
</template>
<style scoped lang="scss">
.header-navigation {
  @include rest-list;
  width: 170px;
  display: flex;
  align-items: center;
  gap: 25px;
  &__item {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
