<template>
  <div>
    <LayoutsPageHeader />

    <slot />
    <LayoutsPageFooter>
      <PageWelcome
        v-if="route.meta.footerWelcome"
        :title="$t('footer.title')"
        :description="$t('footer.description')"
        class="welcome_footer"
        :showFooter="false"
        dark
      />
    </LayoutsPageFooter>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
