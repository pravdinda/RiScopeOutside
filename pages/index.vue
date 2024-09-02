<template>
  <div class="welcome-screen">
    <PageWelcome
      :title="$t('welcome.title')"
      :description="$t('welcome.description')"
      showFooter
    />
  </div>
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
useHead({
  title: "RIScope",
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
<style type="scss">
.welcome-screen {
  background-image: url("./img/welcome_bg.svg");
  background-repeat: no-repeat;
  background-position: center 10%;
  background-size: 90%;
  background-size: contain;
}
</style>
