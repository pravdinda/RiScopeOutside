<template>
  <div>
    <PageHeader />

    <slot />
    <PageFooter />
  </div>
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader/PageHeader";
import PageFooter from "@/layouts/PageFooter/PageFooter";
</script>
