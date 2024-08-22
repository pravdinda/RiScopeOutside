<template>
  <div class="welcome__form">
    <Input inputType="email" inputPlaceholder="@ Enter email" />
    <div class="welcome-form__footer">
      <button class="welcome__submit">To get a taste</button>
      <p class="welcome-form__comment">We do not request any bank card</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Input } from "../UI/Input";
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
</style>
