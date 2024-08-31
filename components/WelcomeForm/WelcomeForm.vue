<template>
  <div class="welcome__form">
    <div class="inputWrapper">
      <span
        class="inputCheck"
        :class="{
          inputCheck_error: emailError,
          inputCheck_success: emailSuccess,
        }"
        >@</span
      >
      <Input
        inputType="email"
        :inputPlaceholder="$t('form.emailPlaceholder')"
        v-model:email="email"
        :class="{
          emailInput_error: emailError,
          emailInput_success: emailSuccess,
        }"
        :dark="dark"
      />
    </div>
    <div class="welcome-form__footer">
      <button class="welcome__submit" :disabled="!emailSuccess">
        {{ $t("form.button") }}
      </button>
      <p class="welcome-form__comment">{{ $t("form.requestBankCard") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Input } from "../UI/Input";

withDefaults(
  defineProps<{
    dark: boolean;
  }>(),
  {
    dark: false,
  }
);

const email = ref("");
const emailError = ref(false);
const emailSuccess = ref(false);
const validateEmailRegex = /^\S+@\S+\.\S+$/;
function isEmailValid() {
  return validateEmailRegex.test(email.value);
}
watch(email, () => {
  let emailValid = isEmailValid();
  if (!emailValid) {
    emailError.value = true;
    emailSuccess.value = false;
  }
  if (emailValid) {
    emailError.value = false;
    emailSuccess.value = true;
  }
  if (email.value === "") {
    emailError.value = false;
    emailSuccess.value = false;
  }
});
</script>
<style scoped lang="scss">
.welcome__form {
  margin: 40px auto 0 auto;
  width: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcome__submit {
  @include base-button($min-w: 250px);
}
.welcome-form__footer {
  display: flex;
}
.welcome-form__comment {
  margin: 0 0 0 15px;
  width: 180px;
  color: $gray-color;
  font-size: 16px;
  line-height: 25px;
}
.footer {
  .welcome__submit {
    @include base-button($min-w: 250px, $dark: true);
  }
  .welcome-form__comment {
    color: $lightgray-color;
  }
}
.inputWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
  position: relative;
}
.inputCheck {
  display: inline-block;
  position: absolute;
  font-size: 20px;
  top: 7px;
  left: 7px;
  transition: ease-in-out 0.365s;
  color: $main-color;
  &_success {
    color: rgba(11, 140, 86, 1);
  }
  &_error {
    color: rgba(217, 78, 78, 1);
  }
}
</style>
