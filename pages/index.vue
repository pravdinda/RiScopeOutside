<template>
  <PageWelcome
    :title="$t('welcome.title')"
    :description="$t('welcome.description')"
    showFooter
  />
  <div class="wrapper">
    <PageProcess />
    <PageMechanics />
  </div>
  <PageOpportunities />
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
<style scoped lang="scss"></style>
