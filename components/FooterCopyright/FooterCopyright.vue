<template>
  <div class="footer-copyright">
    <p class="footer-copyright__text">
      Copyright &copy; {{ currentYear }} ООО. Все права зарегистрированы.
    </p>
  </div>
</template>
<style scoped lang="scss">
.footer-copyright {
  padding: 0 0 50px 0;
  text-align: center;
  &__text {
    margin: 0;
    color: $gray-color;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  }
}
</style>
<script setup lang="ts">
import { computed } from "vue";
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
