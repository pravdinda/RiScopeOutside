<template>
  <section class="mechanics">
    <div class="mechanics__header">
      <span class="mechanics__soon">ComingSoon</span>
      <h2 class="mechanics__title">AI Assistant & AI based mechanics</h2>
      <p class="mechanics__description">
        By its nature, a fishman is an alternative to the traditional lorem
        ipsum, which causes some people to be puzzled when trying to read fish
        text.
      </p>
    </div>
    <div class="mechanics__versions">
      <div class="mechanic">
        <div class="mechanic__header">
          <h3 class="mechanic__title">Today RiScope</h3>
          <p class="mechanic__description">
            Some text for project to be based on my mind
          </p>
          <img :src="version" class="mechanic__img" />
        </div>
        <ul class="mechanic__list">
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
        </ul>
      </div>
      <div class="mechanic">
        <div class="mechanic__header">
          <h3 class="mechanic__title">Today RiScope</h3>
          <p class="mechanic__description">
            Some text for project to be based on my mind
          </p>
          <img :src="ai" class="mechanic__img" />
        </div>
        <ul class="mechanic__list">
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
          <li>By its nature, a fishman is an alternative</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import version from "@/public/img/version.svg";
import ai from "@/public/img/ai.svg";
</script>
<style scoped lang="scss">
.mechanics {
  margin: 0 0 150px 0;
  &__header {
    margin: 0 auto 70px;
    width: 690px;
  }
  &__soon {
    width: 100%;
    display: inline-block;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    color: rgba(55, 47, 143, 1);
    text-align: center;
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
  &__versions {
    display: flex;
    gap: 17px;
  }
}
.mechanic {
  max-width: 672px;
  width: 100%;
  &__header {
    margin: 0 0 100px 0;

    padding: 30px;
    min-height: 273px;
    background-color: rgba(249, 249, 249, 1);
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

    border-radius: 10px;
    position: relative;
  }
  &__title {
    margin: 0 0 20px 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
  }
  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    text-align: center;
  }
  &__img {
    margin: 0 auto 0 auto;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &__list {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      justify-content: center;
      margin: 0 0 20px 0;
      font-size: 16px;
      line-height: 25px;
      font-weight: 500;
      &:last-child {
        margin: 0 0 0 0;
      }
    }
  }
}
</style>
