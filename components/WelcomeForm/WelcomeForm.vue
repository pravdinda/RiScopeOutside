<template>
  <div class="welcome__form">
    <input type="email" class="welcome__input" placeholder="@ Enter email" />
    <div class="welcome-form__footer">
      <button class="welcome__submit">To get a taste</button>
      <p class="welcome-form__comment">We do not request any bank card</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.welcome__form {
  margin: 40px auto 0 auto;
  width: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcome__input {
  margin: 0 0 15px 0;
  width: 100%;
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
</style>
