<template>
  <div class="header-navigation">
    <PageLogo status="beta" />
    <HeaderNavigation />
  </div>
</template>
<script setup lang="ts">
import PageLogo from "@/components/PageLogo/PageLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
</script>
<style scoped lang="scss">
.header-navigation {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
