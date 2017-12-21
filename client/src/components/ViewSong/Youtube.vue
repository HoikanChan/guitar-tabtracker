<template>
  <panel title='Youtube Video'>
        <v-layout class='pa-3'>
           <youtube :video-id="videoId" player-width="600" player-height="200" />
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
    props:['youtubeId'],
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
</style>
