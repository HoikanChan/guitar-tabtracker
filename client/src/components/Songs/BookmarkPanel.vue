<template>
  <panel title="Bookmark">
    <template>
      <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.artist }}</td>
          <td class="text-xs-right">{{ props.item.album }}</td>
        </template>
      </v-data-table>
    </template>
  </panel>
</template>

<script>
  import {mapState} from 'vuex'
  import BookmarkService from '@/services/BookmarkService'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Title',
            
            sortable: false,
            value: 'title'
          },
          { 
            text: 'Artist',
            sortable: false,
            
            value: 'artist'
          },
          { 
            text: 'Album', 
            sortable: false,
            
            value: 'album' 
          },
        ],
        items: []
      }
    },
    computed: mapState(['user']),
    mounted: async function () {
      this.items = (await BookmarkService.index({
        userId: this.user.id
      })).data
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
