<template>
  <div class="welcome__form">
    <div class="inputWrapper">
      <span
        class="inputCheck"
        :class="{
          inputCheck_error: isEmailError,
          inputCheck_success: isEmailSuccess,
        }"
        >@</span
      >
      <Input
        inputType="email"
        :inputPlaceholder="$t('form.emailPlaceholder')"
        v-model:email="email"
        :class="{
          emailInput_error: isEmailError,
          emailInput_success: isEmailSuccess,
        }"
        :isDark="isDark"
      />
    </div>
    <div class="welcome-form__footer">
      <button class="welcome__submit" :disabled="!isEmailSuccess">
        {{ $t("form.button") }}
      </button>
      <p class="welcome-form__comment">{{ $t("form.requestBankCard") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { WelcomeFormComponent } from "@/types/index";
import { Input } from "../UI/Input";

withDefaults(defineProps<WelcomeFormComponent>(), {
  isDark: false,
});

const email = ref("");
const isEmailError = ref(false);
const isEmailSuccess = ref(false);
const validateEmailRegex = /^\S+@\S+\.\S+$/;
function isEmailValid() {
  return validateEmailRegex.test(email.value);
}
watch(email, () => {
  let emailValid = isEmailValid();
  if (!emailValid) {
    isEmailError.value = true;
    isEmailSuccess.value = false;
  }
  if (emailValid) {
    isEmailError.value = false;
    isEmailSuccess.value = true;
  }
  if (email.value === "") {
    isEmailError.value = false;
    isEmailSuccess.value = false;
  }
});
</script>
<style lang="scss">
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
