<template>
  <div class="price-page">
    <PageHeader />

    <slot />
    <PageFooter class="price-footer" />
  </div>
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader/PageHeader";
import PageFooter from "@/layouts/PageFooter/PageFooter";
</script>
<style scoped lang="scss">
.price-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.price-footer {
  margin: auto 0 0 0;
  flex: 0 0 auto;
}
</style>
