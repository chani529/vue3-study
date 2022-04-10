<template>
  <div class="album-page">
    <WidgetMobileTabs v-if="$device.isMobile" :tabs="albumTabs" @onChanged="onChangeTabs"/>
    <div class="album-list grid-view">
      <WidgetThumnail
        v-for="album in showingList"
        :key="album.id"
        :id="album.id"
        :title="album.title"
        :date="album.release_date"
        :type="album.type"
        :image_url="album.image_url"
        />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'MainLayout',
  data() {
    return {
      // Static Data
      albumTabs: [
        { label: 'All', code: 0, count: 0 },
        { label: 'Studio', code: 1,  count: 0 },
        { label: 'Mini', code: 2,  count: 0 },
        { label: 'Remake', code: 3,  count: 0 },
        { label: 'Single', code: 4,  count: 0 },
        { label: 'Digital', code: 5,  count: 0 },
        { label: 'OST', code: 6,  count: 0 },
        { label: 'ETC', code: 7,  count: 0 },
      ],
      filterCode: 0, // List filter code
      // Album Data
      albumList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterCode === 0) {
        return this.albumList
      }

      return this.albumList.filter(album => {
        return album.album_type === this.filterCode
      })
    },
  },
  created() {
    this.setTitle('ALBUM')
    this.getAlbumList()
  },
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapMutations({
      setTitle: 'title/setTitle' 
    }),
    /* ------------------------------ EVENT METHOD ------------------------------ */
    onChangeTabs(filterCode) {
      this.filterCode = filterCode
    },
    /* ------------------------------ GETTER METHOD ------------------------------ */
    getAlbumType(album_type) {
      switch(album_type) {
        case 1:
          return 'Studio'
        case 2:
          return 'Mini'
        case 3:
          return 'Remake'
        case 4:
          return 'Single'
        case 5:
          return 'Digital'
        case 6:
          return 'OST'
        case 7:
          return 'ETC'
      }
    },
    /* ------------------------------ GET DATA METHOD ------------------------------ */
    async getAlbumList() {
      const tempList = await this.$api.album.getList()

      // 앨범 나온 날짜 순으로 정렬
      tempList.sort( (a,b) => {
        if( a.release_date < b.release_date ) return 1
        if( a.release_date > b.release_date ) return -1

        return 0
      })

      // 앨범 Type 및 종류 별 갯수 설정
      this.albumList = tempList.map( album => {
        const tabItem = this.albumTabs.find(tab => tab.code === album.album_type)

        if( tabItem ) {
          this.albumTabs[0].count++
          tabItem.count++
        }

        return {
          ...album,
          type: this.getAlbumType(album.album_type)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.album-list {
  padding: 10px;
  .mobile & {
    padding: 10px 30px;
  }
}
</style>
