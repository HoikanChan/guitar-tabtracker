<template>
  <panel title="Songs">
    <v-btn 
      slot='actions' 
      to='songs/create'
      absolute right light fab medium 
      class='cyan accent-2'
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-layout 
      v-for='song in songs' 
      :key='song.id'
      class='pa-3'
    >
      <v-flex xs6>
        <div class='song-title' label='title'>
        {{song.title}}
        </div>
        <div class='song-artist' label='artist'>
        {{song.artist}}
        </div>
        <div class='song-album' label='album'>
        {{song.album}}
        </div>
        <v-btn class='cyan' dark :to="{
            name:'song',
            params:{
              songId:song._id
            }
          }"
        >
          View
        </v-btn>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <img :src='song.albumImageUrl' class='song-poster'/>
      </v-flex>
    </v-layout>
  </panel>
</template>
<script>
import SongsService from '@/services/SongsService'
export default {
  data  () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (val) {
        this.songs = (await SongsService.index(val)).data
      }
    }
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