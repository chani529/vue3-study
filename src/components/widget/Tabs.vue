<template>
  <ul class="tab-menu">
    <li
      v-for="(item, idx) in tabs"
      :key="idx"
      class="tab-menu-item"
      :class="{ 'active': selectedIdx == idx }"
      @click="onClickTabs(idx, item.code)"
    >
      {{ item.label }}
      <span v-if="item.count != undefined" class="sub-text"> ({{ item.count }})</span>
    </li>
  </ul>
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
  mounted() {
    console.log('tabs', this.tabs)
    if (this.tabs.length > 0) {
      this.selectedIdx = 0
    }
  },
  methods: {
    onClickTabs(idx, code) {
      this.selectedIdx = idx

      this.$emit('onChanged', code)
    },
  },
}
</script>
<style lang="scss" scope>
.tab-menu {
  display: flex;

  #{&}-item {
    flex: 1;
    @include flex-center;
    color: $IU-LightViolet;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;

    &.active {
      color: $IU-DeepViolet;
    }

    &.count-text {
      font-weight: normal;
    }
  }
}
</style>
