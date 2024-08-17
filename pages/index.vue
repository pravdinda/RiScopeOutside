<template>
  <PageHeader />
  <PageWelcome
    title="Risk management automation Service "
    description="Our service offers an advanced automation system that helps you manage
        risks effectively and reduce your time costs"
  />
  <PageFooter />
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader/PageHeader";

useHead({
  title: "RIScope",
  meta: [
    { name: "description", content: "Risk management automation Service" },
  ],
});
</script>
