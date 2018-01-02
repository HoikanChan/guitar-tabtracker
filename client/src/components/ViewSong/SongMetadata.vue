
<template>
  <panel title='Metadata'>
    <v-layout class='pa-3'>
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
          name:'song-edit',
          params:{
            songId:song.id
          }
        }">
          Edit
        </v-btn>
        <v-btn 
          class='cyan' dark 
          v-if="isUserLoggedIn && !bookmark"
          @click="setBookmark"
        >
          Bookmark
        </v-btn>
        <v-btn 
          class='cyan' dark 
          v-if="isUserLoggedIn && bookmark"
          @click="unSetBookmark"
        >
          Unbookmark
        </v-btn>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <img :src='song.albumImageUrl' class='song-poster'/>
      </v-flex>           
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'
export default {
  props: ['song'],
  computed: mapState(['isUserLoggedIn', 'user']),
  data () {
    return {
      bookmark: null
    }
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmark = (await BookmarkService.index({
          userId: this.user.id,
          songId: this.song.id
        })).data
        if (bookmark.length > 0) {
          this.bookmark = bookmark[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarkService.post({
          UserId: this.user.id,
          SongId: this.song.id
        })).data
      } catch (error) {
        console.log(err)
      }
    },
    async unSetBookmark () {
       try {
        if(!!this.bookmark.id) {
          (await BookmarkService.delete(this.bookmark.id)).data
          this.bookmark = null
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
