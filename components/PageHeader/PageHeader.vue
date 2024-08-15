<template>
  <div class="header">
    <PageLogo status="beta" />
    <HeaderNavigation />
    <HeaderSubNavigation />
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
  justify-content: space-between;
  align-items: center;
  position: relative;
}
</style>
