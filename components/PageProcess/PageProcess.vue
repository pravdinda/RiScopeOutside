<template>
  <section class="process">
    <div class="process__header">
      <h2 class="process__title" v-html="$t('risk.title')"></h2>
      <p class="process__description">
        {{ $t("risk.description") }}
      </p>
    </div>
    <div class="process__content">
      <div class="process__content-block">
        <h3 class="process__content-title">{{ $t("risk.riscope_process") }}</h3>
        <img :src="riscope_process" />
      </div>
      <div class="process__content-block">
        <h3 class="process__content-title">{{ $t("risk.company_process") }}</h3>
        <img :src="company_process" />
      </div>
      <div class="process__banner banner">
        <div class="banner__wrapper">
          <div class="banner__progress">
            <div class="banner__progress-container">
              <div class="banner__label">
                <span>{{ $t("risk.riscope_process") }}</span>
                <span>45 {{ $t("global.min") }}</span>
              </div>
              <progress value="10" max="100" class="banner__progress-item" />
            </div>
            <div class="banner__progress-container">
              <div class="banner__label">
                <span>{{ $t("risk.company_process") }}</span>
                <span>7 {{ $t("global.hour") }}</span>
              </div>
              <progress value="100" max="100" class="banner__progress-item" />
            </div>
          </div>
          <span class="banner__hours"
            >– 6{{ $t("global.hour_short") }} 15{{ $t("global.min") }}</span
          >
        </div>
        <p class="banner__text">
          {{ $t("risk.banner_text") }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import riscope_process from "@/public/img/riscope_process.svg";
import company_process from "@/public/img/company_process.svg";
</script>
<style lang="scss">
.process {
  margin: 0 0 150px 0;
  &__header {
    margin: 0 auto 70px;
    width: 690px;
  }
  &__title {
    margin: 0 0 25px 0;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
  }
  &__description {
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    text-align: center;
  }
  &__content {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      object-fit: contain;
    }
  }
  &__banner {
    padding: 25px 40px;
    width: 817px;
    min-height: 171px;
    background-color: $blue-color;
    color: $background-color;
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &__content-title {
    margin: 0 0 30px 0;
    color: $blue-color;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
  }
}
.banner {
  background-image: url("img/bluetab_bg_l.svg");
  background-position: 114% 89px;
  background-repeat: no-repeat;
  background-size: 50%;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__progress {
    display: flex;
    max-width: 360px;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
  }
  &__progress-item {
    width: 100%;
    height: 5px;
    border: none;
    background-color: transparent;
  }
  &__progress-item::-moz-progress-bar {
    background-color: transparent;
  }

  &__progress-item::-webkit-progress-bar {
    background-color: transparent;
  }

  &__progress-item::-webkit-progress-value {
    background-color: $background-color;
    border-radius: 5px;
  }
  &__hours {
    margin: auto 0 auto auto;
    font-size: 55px;
    line-height: 67px;
    font-weight: 600;
  }
  &__text {
    margin: 10px 0 0 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
}
</style>
