<template>
  <div class="footer-navigation">
    <NavigationList class="footer-navigation__navigation" />
    <PageLogo status="beta" white />
    <SubNavigation class="footer-navigation__subnavigation" />
  </div>
</template>
<script setup lang="ts">
import PageLogo from "@/components/PageLogo/PageLogo";
</script>
<style scoped lang="scss">
.footer-navigation {
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-top: 1px solid $gray-color;
}
.footer-navigation {
  &__navigation {
    position: absolute;
    left: 0;
  }
  &__subnavigation {
    position: absolute;
    right: 0;
  }
}
</style>
