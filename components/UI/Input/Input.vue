<template>
  <input
    v-model="email"
    :type="inputType"
    :placeholder="inputPlaceholder"
    autocomplete="off"
    class="emailInput"
    :class="{ emailInput_dark: dark }"
  />
</template>
<script setup lang="ts">
const email = defineModel("email");
withDefaults(
  defineProps<{
    inputType: string;
    inputPlaceholder: string;
    dark: boolean;
  }>(),
  {
    inputType: "",
    inputPlaceholder: "",
    dark: false,
  }
);
</script>
<style lang="scss">
.emailInput {
  padding: 10px 35px;
  width: 100%;
  background-color: $lightgray-color;
  border: 1px solid $lightgray-color;
  outline: none;
  border-radius: 5px;
  transition: ease-in-out 0.365s;
  &::placeholder {
    color: $main-color;
    opacity: 0.5;
  }
  &_dark {
    background-color: rgba(42, 42, 42, 1);
    color: $background-color;
    border: 1px solid rgba(42, 42, 42, 1);
    &::placeholder {
      color: $background-color;
    }
  }
}
</style>
