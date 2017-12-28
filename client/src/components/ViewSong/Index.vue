<template>
  <div class="hello">
    <v-layout>
      <v-flex xs6 class='ma-2'>
        <song-metadata :song='song' />
      </v-flex>
      <v-flex xs6 class='ma-2'>
        <youtube :youtubeId='song.youtubeId' />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class='ma-2'>
        <Lyrics :lyrics='song.lyrics' />
      </v-flex>
      <v-flex xs6 class='ma-2'>
        <Tabs :tabs='song.tab' />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import SongsService from '@/services/SongsService'
  import SongMetadata from './SongMetadata'
  import Youtube from './Youtube'
  import Lyrics from './Lyrics'
  import Tabs from './Tabs'
  import {
    mapState
  } from 'vuex'
  export default {
    data () {
      return {
        songId: null,
        song: {}
      }
    },
    components: {
      SongMetadata,
      Youtube,
      Lyrics,
      Tabs
    },
    computed: {
      ...mapState(['route'])
    },
    async mounted () {
      this.songId = this.route.params.songId
      this.song = (await SongsService.show(this.songId)).data[0]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
