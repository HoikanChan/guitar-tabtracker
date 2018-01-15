<template>
  <panel title='Youtube Video'>
        <v-layout class='pa-3'>
           <youtube :video-id="youtubeId" player-width="600" player-height="200" />
        </v-layout>
    </panel>
</template>

<script>

export default {
  props: ['youtubeId']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
