<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <search-panel/>
      <song-panel/>
    </v-flex>
  
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import SearchPanel from './SongsSearchPanel'
import SongPanel from './SongPanel'
export default {
  components: {
    SearchPanel,
    SongPanel
  },
  data  () {
    return {
      songs: null
    }
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