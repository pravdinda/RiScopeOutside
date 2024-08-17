<template>
  <div class="footer">
    <PageWelcome
      title="Transform Your Project Management with Riscope"
      description="Leveraging years of experience working with over 30 companies, we have developed Riscope — a revolutionary solution for automating calculations and risk analysis in projects."
      class="welcome_footer"
    />
    <FooterNavigation />
    <FooterCopyright />
  </div>
</template>
<script setup lang="ts">
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
</script>
<style scoped lang="scss">
.footer {
  background-color: $main-color;
  color: rgba(249, 249, 249, 1);
}
</style>
