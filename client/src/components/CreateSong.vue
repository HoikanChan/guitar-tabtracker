<template>
  <div class="hello">
    <v-layout>
      <v-flex xs6 class="mx-3">
        <panel title="Create Song">
          <div class='px-4 py-2'>
            <v-text-field label='Title' :rules='[required]' required v-model="song.title" />
            <v-text-field label='Artist' :rules='[required]' required v-model="song.artist" />
            <v-text-field label='Genre' :rules='[required]' required v-model="song.genre" />
            <v-text-field label='Album' :rules='[required]' required v-model="song.album" />
            <v-text-field label='Youtube  Id' :rules='[required]' required v-model="song.youtubeId" />
            <v-text-field label='Album Image Url' :rules='[required]' required v-model="song.albumImageUrl" />
          </div>
        </panel>
      </v-flex>
      <v-flex xs6 class="mx-3">
        <panel title="Song Structure">
          <div class='px-4 py-2'>
            <v-text-field label='lyrics' :rules='[required]' multi-line required v-model="song.lyrics" />
            <v-text-field label='tab' :rules='[required]' multi-line required v-model="song.tab" />
          </div>
          <div v-if='error' class='danger-alert'>{{error}}</div>
          <v-btn class="cyan" dark @click="submitSong">
            Submit
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import SongService from '@/services/SongsService.js'
  export default {
    data () {
      return {
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImageUrl: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        },
        error: null,
        required: value => !!value || 'Required'
      }
    },
    methods: {
      async submitSong () {
        const isAllFilled = Object.keys(this.song).every(key => !!this.song[key])
        if (!isAllFilled) {
          this.error = 'Please fill in all the text fields'
          return
        }
        try {
          await SongService.post(this.song)
          this.$route.push({
            name: 'song'
          })
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danger-alert {
    color: red;
  }
</style>
