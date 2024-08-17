<template>
  <div>
    <PageHeader />

    <slot />
    <PageFooter>
      <PageWelcome
        title="Transform Your Project Management with Riscope"
        description="Leveraging years of experience working with over 30 companies, we have developed Riscope — a revolutionary solution for automating calculations and risk analysis in projects."
        class="welcome_footer"
      />
    </PageFooter>
  </div>
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader/PageHeader";
import PageFooter from "@/layouts/PageFooter/PageFooter";
</script>
