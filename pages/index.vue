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
  <PageOpportunities :opportunities="opportunities" />
  <div class="wrapper">
    <PageOptimize />
    <PageQuestions />
  </div>
</template>
<script setup lang="ts">
import { opportunities } from "~/components/PageOpportunities/opportunities.list";
definePageMeta({
  layout: "default",
  footerWelcome: true,
});
</script>
