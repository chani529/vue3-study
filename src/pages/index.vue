<template>
  <div class="image-cover">
    <Background />
    <div ref="cover" class="cover-text">
      <p class="cover-text__header">
        <b id="withU"> With U </b>
        <b id="IU" class="accent"> IU </b>
      </p>
      <template v-if="!$device.isMobile">
        <DateInfo />
        <NuxtLink :to="$urls.main">
          <p class="cover-text__link">
            Go to Fansite
            <img class="img-link-arrow" width="30px" height="30px" src="/img/arrow_yellow.png">
          </p>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    countDate() {
      const day = 1000 * 60 * 60 * 24
      const debut = new Date(2008, 9 - 1, 23) // 월 -1 로 작성해야 함.

      const now = new Date()
      const diffDate = now.getTime() - debut.getTime()
      return Math.ceil(diffDate / day)
    },
  },
  mounted() {
    // TODO CHECK :: Mobile splash effect
    if( this.$device.isMobile ) {
      setTimeout(() => {
        this.$router.push(this.$urls.main)
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scope>
@include slide-up(60);
@include slide-right(100);

.image-cover {
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), black);
}

.cover-text {
  margin: auto;
  width: 260px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  line-height: 70px;
  font-family: 'Roboto';
  font-style: italic;

  .accent {
    color: $IU-Neon;
  }
}

.cover-text__header {
  #withU, #IU {
    display: block;
    font-size: 50px;
    line-height: 60px;
    opacity: 0;

    @include animation(slide-up-60, 1.5s)
  }

  #IU {
    animation-delay: .7s;
    @include animation(slide-up-60, 1.5s, .7s)
  }
}

.cover-text__link {
  background: linear-gradient(45deg, $IU-White, $IU-Neon);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0;

  @include animation(slide-right-100, 1s, 1s);

  .img-link-arrow {
    position: relative;
    top: 5px;
    margin-left: 10px;
  }
}

@media screen and (max-width: 768px) {
  .image-cover {
    max-width: 50%;
  }
}
</style>
