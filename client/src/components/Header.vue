<template>
    <v-toolbar fixed class="cyan" dark>
    
        <router-link class="mr-4" :to="{name:'songs'}" tag="v-toolbar-title">
    
            TabTraker
    
        </router-link>
    
        <v-toolbar-items>
    
            <v-btn flat dark :to="{name:'songs'}">
    
                Broswer
    
            </v-btn>
    
        </v-toolbar-items>
    
        <v-spacer></v-spacer>
    
        <v-toolbar-items v-if='!$store.state.isUserLoggedIn'>
    
            <v-btn flat dark :to="{name:'login'}">
    
                LOGIN
    
            </v-btn>
    
            <v-btn flat dark :to="{name:'register'}">
    
                SIGN-UP
    
            </v-btn>
    
        </v-toolbar-items>
    
        <v-toolbar-items v-if='$store.state.isUserLoggedIn'>
    
            <v-btn flat dark @click="logout">
    
                LOGOUT
    
            </v-btn>
    
        </v-toolbar-items>
    
    </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    ...mapActions(['setToken', 'setUser']),

    navigateTo (route) {
      this.$router.push(route)
    },

    logout () {
      this.navigateTo({
        name: 'root'
      })

      this.setToken(null)

      this.setUser(null)
    }
  },

  computed: {
    ...mapState(['isUserLoggedIn'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
