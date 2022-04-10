<template>
  <div class="thumnail">
    <img :src="image_url" />
    <div class="thumnail-cover" @click="goToLink">
      {{ title }}
      <template v-if="date">
        <br />
        {{ date }} <br />
        {{ type.toUpperCase() }}
      </template>
      <template v-else-if="startDate">
        <br />
        {{ startDate }} - {{ endDate }} <br />
        {{ cast }}<br />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    image_url: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: -1,
    },
    cast: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  mounted() {
    console.log('image', this.image)
  },
  methods: {
    goToLink() {
      if (this.$route.path.includes('album')) {
        this.$router.push(`/album/${this.id}`)
      } else {
        window.open(this.link)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$IU-Thumnail-LightViolet: rgba(183, 150, 200, 0.3);
.thumnail {
  .grid-view & {
    aspect-ratio: 1/1;
  }

  @include match-parent;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  img {
    @include match-parent;
    border-radius: 10px;
  }

  &-cover {
    @include flex-center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30%;
    border-radius: 10px;
    background: linear-gradient(to top, $IU-LightViolet, transparent);
    color: white;
    text-align: center;
    transition: 0.25s;

    .mobile & {
      height: 50%;
    }
  }
  

  &:hover {
    .thumnail-cover {
      height: 100%;
      background: linear-gradient(to top, $IU-LightViolet, $IU-Thumnail-LightViolet);
      transition: 0.25s;
    }
  }
}
</style>
