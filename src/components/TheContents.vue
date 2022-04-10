<template>
  <div ref="mainPanel" class="main-panel">
    <div class="content-header" :class="{'main': !isNotMainPage}">
      <b v-if="isNotMainPage" class="content-title">{{ getTitle }}</b>
    </div>
    <div class="contents-body" :class="{'main': !isNotMainPage}">
      <Nuxt class="container" />
    </div>
  </div>
</template>

// TODO :: CREATE MAIN PAGE
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getTitle: 'title/getTitle'
    }),
    isNotMainPage() {
      return this.$route.path !== this.$urls.main
          && this.$route.path !== this.$urls.mobile.main
    },
  },
}
</script>

<style lang="scss" scoped>
.main-panel {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .content-header {
    height: calc(100vh - 480px);
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: $IU-Black-A20;
    padding-top: 80px;

    &.main {
      height: calc(100vh - 100px);
    }

    .mobile & {
      width: 100%;
      height: calc(100vh - 200px);
      @include flex-center;
      padding-top: 60px;
    }

    // TODO CHECK MOBILE POSITION
    .content-title {
      position: absolute;
      top: 50%;
      left: 60%;
      font-family: Roboto;
      font-size: 70px;
      font-weight: bold;
      font-style: italic;
      color: $IU-Title-Violte;

      .mobile & {
        position: relative;
        top: 0;
        left: 0;
      }
    }
  }

  .contents-body {
    min-height: calc(100vh - 160px);
    position: relative;
    background-color: $IU-Black;
    // z-index: 1500;

    &.main {
      min-height: calc(100vh - 80px);
    }

    .mobile & {
      min-height: calc(100vh - 120px);

      &.main {
        min-height: calc(100vh - 60px);
      }
    }
  }
}
</style>