<template>
  <div class="header">
    <PageLogo status="beta" class="header__logo" />
    <HeaderNavigation />
    <HeaderSubNavigation class="header__subnavigation" />
  </div>
</template>
<script setup lang="ts">
import PageLogo from "@/components/PageLogo/PageLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import HeaderSubNavigation from "./HeaderSubNavigation/HeaderSubNavigation";
</script>
<style scoped lang="scss">
.header {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 80px;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &__logo {
    position: absolute;
    left: 40px;
  }
  &__subnavigation {
    position: absolute;
    right: 40px;
  }
}
</style>
