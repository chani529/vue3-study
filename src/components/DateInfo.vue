<template>
  <b class="cover-text__days">
    <br />
    B-day | 1993. 05. 16 <br />
    Debut | 2008. 09. 23 <br />
    With | {{ countDate }} Days
    <br />
  </b>
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
}
</script>
