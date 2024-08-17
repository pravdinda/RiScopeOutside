<template>
  <ul class="header-navigation">
    <li class="header-navigation__item">
      <NuxtLink to="/price" class="header-navigation__link">Price</NuxtLink>
    </li>
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
  &__link {
    color: $main-color;
    text-decoration: none;
    transition: ease-in-out 0.365s;
    &:hover {
      color: $blue-color;
    }
  }
}
</style>
