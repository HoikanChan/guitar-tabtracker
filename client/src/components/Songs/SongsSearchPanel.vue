<template>
  <panel title='Search' >
    <div class='py-2 px-4'>
      <v-text-field 
        v-model='search'
        placeholder='Search song by title, singer ,album and genre...'/>
    </div>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce (async function (val) {
      const route = {
        name: 'songs'
      }
      if(this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },700),
    '$route.query.search': {
      immediate: true,
      handler (val) {
        this.search = val
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
