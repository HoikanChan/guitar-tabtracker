<template>
  <v-toolbar fixed class="cyan" dark>
    <router-link class="mr-4" :to="{name:'songs'}" tag="v-toolbar-title">
      TabTube
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
    <transition name="slide">
      <v-btn 
        icon 
        @click="show = !show"
        style={z-index:10}
      >
        <v-icon >search</v-icon> 
      </v-btn>
    </transition>
    <transition name="slide">
    <v-text-field 
      dark
      v-if="show"
      v-model='search'
      placeholder='Search song by title, singer ,album and genre...'
    />
    </transition>
    <v-toolbar-items 
      v-if='$store.state.isUserLoggedIn'
      style={z-index:20}
    >
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
      msg: 'Welcome to Your Vue.js App',
      show: false,
      search: ''
    }
  },
  // watch: {
  //   search: _.debounce(async function (val) {
  //     const route = {
  //       name: 'songs'
  //     }
  //     if (this.search !== '') {
  //       route.query = {
  //         search: this.search
  //       }
  //     }
  //     this.$router.push(route)
  //   }, 700),
  //   '$route.query.search': {
  //     immediate: true,
  //     handler (val) {
  //       this.search = val
  //     }
  //   }
  // },
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
  .slide-enter-active {
    transition: all 0.5s ease;
  }
  .slide-leave-active {
    transition: all 0.5s ease;
  }
  .slide-enter, .slide-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0.5;
}
</style>
