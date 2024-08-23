<template>
  <div class="welcome__form">
    <div class="inputWrapper">
      <Input
        inputType="email"
        inputPlaceholder="@ Enter email"
        v-model:email="email"
        :class="{
          emailInput_error: emailError,
          emailInput_success: emailSuccess,
        }"
      />
      <div v-if="emailError" class="inputError">Поле заполено неверно</div>
      <div v-if="emailSuccess" class="inputSuccess">
        Вы молодец, ждите письмо
      </div>
    </div>
    <div class="welcome-form__footer">
      <button class="welcome__submit" :disabled="!emailSuccess">
        To get a taste
      </button>
      <p class="welcome-form__comment">We do not request any bank card</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Input } from "../UI/Input";
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
}
.inputError {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(217, 78, 78, 1);
}
.inputSuccess {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: rgba(11, 140, 86, 1);
}
</style>
