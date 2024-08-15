<template>
  <section class="welcome">
    <PageHeader />
    <div class="welcome__content">
      <h1 class="welcome__title">Risk management automation Service</h1>
      <p class="welcome__paragraph">
        Our service offers an advanced automation system that helps you manage
        risks effectively and reduce your time costs
      </p>
    </div>
  </section>
</template>
<style scoped lang="scss">
.welcome {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("./img/welcome_bg.svg");
  background-repeat: no-repeat;
  background-position: 0 50px;
  &__content {
    margin: 80px auto 0 auto;
    max-width: 670px;
    width: 100%;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 55px;
    line-height: 67px;
    font-weight: 600px;
    text-align: center;
  }
  &__paragraph {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
}
</style>
