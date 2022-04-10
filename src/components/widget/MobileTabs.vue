<template>
  <div class="mobile-tab-menu">
    <a :disabled="!isFirst" class="prev-btn" :class="{'disabled': isFirst}" @click="onClickPrev"> &lt; </a>
    <b class="mobile-tab-menu-item">{{ showingTitle }}</b>
    <a :disabled="!isLast" class="next-btn" :class="{'disabled': isLast}" @click="onClickNext"> &gt; </a>
  </div>
</template>
<script>
export default {
  emit: ['onChanged'],
  props: {
    /** TODO CHECK :: Data Foramt
      [
        { label: 'All', code: 0, count: 0 },
        { label: 'Studio', code: 1,  count: 0 },
        { label: 'Mini', code: 2,  count: 0 },
        { label: 'Remake', code: 3,  count: 0 },
        { label: 'Single', code: 4,  count: 0 },
        { label: 'Digital', code: 5,  count: 0 },
        { label: 'OST', code: 6,  count: 0 },
        { label: 'ETC', code: 7,  count: 0 },
      ],
     */
    tabs: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      selectedIdx: -1,
    }
  },
  computed: {
    showingTab() {
      if( this.selectedIdx < 0 ) return {}

      return this.tabs[this.selectedIdx]
    },
    showingTitle() {
      if( this.selectedIdx < 0 ) return ''

      return this.showingTab.label
    },
    isFirst() {
      return this.selectedIdx < 1
    },
    isLast() {
      if( this.tabs.length < 0 ) return false

      return this.selectedIdx === this.tabs.length - 1
    }
  },
  mounted() {
    if (this.tabs.length > 0) {
      this.selectedIdx = 0
    }
  },
  methods: {
    onClickPrev() {
      --this.selectedIdx

      if( this.selectedIdx < 0 ) {
        this.selectedIdx = 0
      }

      this.$emit('onChanged', this.showingTab.code)
    },
    onClickNext() {
      ++this.selectedIdx

      if( this.selectedIdx === this.tabs.length ) {
        this.selectedIdx -= 1
      }

      this.$emit('onChanged', this.showingTab.code)
    },
  },
}
</script>
<style lang="scss" scope>
.mobile-tab-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  cursor: default;

  #{&}-item {
    flex: 1;
    @include flex-center;
    color: $IU-DeepViolet;
  }

  .prev-btn,
  .next-btn {
    @include flex-center;
    width: 90px;
    height: 60px;
    color: $IU-LightViolet;
    cursor: pointer;

    &.disabled {
      opacity: 0;
      cursor: default;
    }
  }
}
</style>
