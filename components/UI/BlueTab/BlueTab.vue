<template>
  <div class="bluetab">
    <div class="bluetab__content">
      <h3 class="bluetab__title">{{ $t("optimise.title") }}</h3>
      <p class="bluetab__description">
        {{ $t("optimise.description") }}
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.bluetab {
  padding: 80px 40px;
  width: 100%;

  color: $background-color;
  background-color: rgba(55, 47, 143, 1);
  background-image: url("img/bluetab_bg_l.svg");
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 10px;
  &__content {
    width: 730px;
  }
  &__title {
    margin: 0 0 30px 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
  }
  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
  }
}
</style>
