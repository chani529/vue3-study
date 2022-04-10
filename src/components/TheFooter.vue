<template>
  <footer ref="footer">
    © 2021. HLS all rights reserved.
  </footer>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$isMobileDevice()
    }
  },
  mounted() {
    if( this.$isMobileDevice() ) {
      this.$refs.footer.classList.add('mobile')
    }
  },
}
</script>

<style lang="scss" scope>
footer {
  height: 80px;
  @include flex-center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: $IU-Black;
  color: $IU-White;

  &.mobile {
    height: 60px;
  }
}
</style>
