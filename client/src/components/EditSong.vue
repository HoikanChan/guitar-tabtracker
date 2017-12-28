<template>
  <div class="hello">
    <v-layout>
      <v-flex xs6 class="mx-3">
        <panel title="Edit Song">
          <div class='px-4 py-2'>
            <v-text-field label='Title' v-model="song.title" />
            <v-text-field label='Artist' v-model="song.artist" />
            <v-text-field label='Genre' v-model="song.genre" />
            <v-text-field label='Album' v-model="song.album" />
            <v-text-field label='Youtube  Id' v-model="song.youtubeId" />
            <v-text-field label='Album Image Url' v-model="song.albumImageUrl" />
          </div>
        </panel>
      </v-flex>
      <v-flex xs6 class="mx-3">
        <panel title="Song Structure">
          <div class='px-4 py-2'>
            <v-text-field label='lyrics' multi-line v-model="song.lyrics" />
            <v-text-field label='tab' multi-line v-model="song.tab" />
          </div>
          <v-btn class="cyan" dark @click="editSong">
            Edit
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import SongsService from '@/services/SongsService.js'
  import {
    mapState
  } from 'vuex'
  
  export default {
    data () {
      return {
        song: {},
        songId: null
      }
    },
    methods: {
      async editSong () {
        try {
          await SongsService.put(this.songId, this.song)
          this.$router.push({
            name: 'song',
            params: {
              songId: this.songId
            }
          })
        } catch (err) {
          console.error(err)
        }
      }
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
  .danger-alert {
    color: red;
  }
</style>
