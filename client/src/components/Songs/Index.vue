<template>
   <v-layout row>
   <v-flex xs6 v-if='isUserLoggedIn'>
    <bookmark-panel class='ma-3' />
    <history-panel class='ma-3' />
   </v-flex>
    <v-flex :class="{
        xs6:isUserLoggedIn,
        xs12:!isUserLoggedIn
      }" >
      <search-panel class='ma-3'/>
      <song-panel class='ma-3'/>
    </v-flex>
  
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import SearchPanel from './SongsSearchPanel'
import BookmarkPanel from './BookmarkPanel'
import SongPanel from './SongPanel'
import HistoryPanel from './HistoryPanel'
import {mapState} from 'vuex'
export default {
  components: {
    SearchPanel,
    SongPanel,
    BookmarkPanel,
    HistoryPanel
  },
  data  () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
<style scoped>
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 20px;
}
.song-album {
  font-size: 16px;
}
.song-poster {
  width: 70%;
}
</style>