<template>
  <div>
    <LayoutsPageHeader />

    <slot />
    <LayoutsPageFooter>
      <PageWelcome
        v-if="route.meta.footerWelcome"
        title="Transform Your Project Management with Riscope"
        description="Leveraging years of experience working with over 30 companies, we have developed Riscope — a revolutionary solution for automating calculations and risk analysis in projects."
        class="welcome_footer"
        :showFooter="false"
      />
    </LayoutsPageFooter>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
