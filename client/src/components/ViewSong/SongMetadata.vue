
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
                }"
                >
                Edit
                </v-btn>
            </v-flex>
            <v-flex xs6 class="ml-2">
                <img :src='song.albumImageUrl' class='song-poster'/>
            </v-flex>           
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    props:['song'],
    components:{
        Panel
    },
    data () {
        return {
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
