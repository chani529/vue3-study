<template>
  <div class="filmo-page">
    <WidgetMobileTabs :tabs="filmoTabs" @onChanged="onChangeTabs"/>
    <div class="filmo-list grid-view">
      <WidgetThumnail
        v-for="filmo in showingList"
        :id="filmo.id"
        :key="filmo.id"
        :title="filmo.title"
        :start-date="filmo.start_date"
        :end-date="filmo.end_date"
        :type="filmo.type"
        :image_url="filmo.image_url"
        :link="filmo.homepage_url"
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
      filmoTabs: [
        { label: 'All', code: 0, count: 0 },
        { label: 'Movie', code: 1, count: 0 },
        { label: 'Drama', code: 2, count: 0 },
      ],
      // List filter code
      filterCode: 0,
      // Filmography Data
      filmoList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterCode === 0) {
        return this.filmoList
      }

      return this.filmoList.filter(filmo => {
        return filmo.filmo_type === this.filterCode
      })
    },
  },
  created() {
    this.setTitle('Filmograpy')
    this.getFilmographyList()
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
    getFilmoType(filmo_type) {
      switch(filmo_type) {
        case 1:
          return 'Movie'
        case 2:
          return 'Drama'
      }
    },
    /* ------------------------------ GET DATA METHOD ------------------------------ */
    async getFilmographyList() {
      const tempList = await this.$api.filmography.getList()

      // 최근 날짜 순으로 정렬
      tempList.sort( (a,b) => {
        if( a.start_date < b.start_date ) return 1
        if( a.start_date > b.start_date ) return -1

        return 0
      })

      // Type 및 종류 별 갯수 설정
      this.filmoList = tempList.map( filmo => {
        const tabItem = this.filmoTabs.find(tab => tab.code === filmo.filmo_type)

        if( tabItem ) {
          this.filmoTabs[0].count++
          tabItem.count++
        }

        return {
          ...filmo,
          type: this.getFilmoType(filmo.filmo_type)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.filmo-list {
  padding: 10px;
  .mobile & {
    padding: 10px 30px;
  }
}
</style>
