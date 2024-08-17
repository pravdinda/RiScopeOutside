<template>
  <div class="footer-navigation">
    <PageLogo status="beta" white />
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
  position: relative;

  border-top: 1px solid $gray-color;
}
</style>
