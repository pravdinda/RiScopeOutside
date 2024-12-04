<template>
  <select v-model="lang">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const lang = ref(locale.value);
watch(lang, () => {
  setLocale(lang.value);
});
</script>
