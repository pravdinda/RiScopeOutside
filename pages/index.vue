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
</script>
