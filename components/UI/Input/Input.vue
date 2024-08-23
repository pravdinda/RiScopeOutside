<template>
  <input
    v-model="email"
    :type="inputType"
    :placeholder="inputPlaceholder"
    autocomplete="off"
    class="emailInput"
  />
</template>
<script setup lang="ts">
const email = defineModel("email");
defineProps<{
  inputType: string;
  inputPlaceholder: string;
}>();
</script>
<style scoped lang="scss">
.emailInput {
  padding: 10px;
  width: 100%;
  background-color: $lightgray-color;
  border: 1px solid $lightgray-color;
  outline: none;
  border-radius: 5px;
  &_error {
    border: 1px solid rgba(217, 78, 78, 1);
  }
  &_success {
    border: 1px solid rgba(47, 104, 70, 1);
  }
}
</style>
