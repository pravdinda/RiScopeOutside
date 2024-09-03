<template>
  <div class="footer">
    <slot></slot>
    <FooterNavigation />
    <FooterCopyright />
  </div>
</template>
<script setup lang="ts">
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
</script>
<style lang="scss">
.footer {
  width: 100%;
  background-color: $main-color;
  color: rgba(249, 249, 249, 1);
}
</style>
