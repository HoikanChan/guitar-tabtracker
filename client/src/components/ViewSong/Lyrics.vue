<template>
  <panel title='Lyrics'>
        <v-layout class='pa-3'>
            <textarea 
                readonly
                class='show-text px-5'>
                {{lyrics}}
            </textarea>
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
    props:['lyrics'],
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
    .show-text{
        border-style:none;
        border-color:transparent;
        overflow: auto;
        width: 100%;
        height: 300px;
        resize:none;
        outline:none;
    }

    .show-text::-webkit-scrollbar
    {
        width: 12px;
        background-color: #F5F5F5;
    }

    .show-text::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
</style>
