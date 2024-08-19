<template>
  <PageWelcome
    title="Risk management automation Service "
    description="Our service offers an advanced automation system that helps you manage
        risks effectively and reduce your time costs"
    showFooter
  />
  <div class="wrapper">
    <PageOptimize />
    <PageQuestions />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
  footerWelcome: true,
});
useHead({
  title: "RIScope",
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
<style scoped lang="scss">
.wrapper {
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
}
</style>
