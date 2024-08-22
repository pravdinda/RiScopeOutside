<template>
  <div class="inputWrapper">
    <input
      v-model="inputEmail"
      :type="inputType"
      :placeholder="inputPlaceholder"
      autocomplete="off"
      class="emailInput"
      :class="[!emailError ? 'emailInput_success' : '', 'emailInput_error']"
    />
    <div v-if="emailError" class="inputError">Поле заполено неверно</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  inputType: string;
  inputPlaceholder: string;
}>();
const inputEmail = ref("");
const emailError = ref(null);
const validateEmailRegex = /^\S+@\S+\.\S+$/;
function isEmailValid() {
  return validateEmailRegex.test(inputEmail.value);
}
watch(inputEmail, () => {
  let emailValid = isEmailValid();
  if (!emailValid) {
    emailError.value = true;
  } else {
    emailError.value = false;
  }
});
</script>
<style scoped lang="scss">
.inputWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
}
.inputError {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(217, 78, 78, 1);
}
.emailInput {
  padding: 10px;
  margin: 0 0 5px 0;
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
