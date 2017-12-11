<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4"
             @click="navigateTo({name:'Root'})"
        >
            TabTraker
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark>
                Broswer
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark 
                @click="navigateTo({name:'Login'})">
                    LOGIN
            </v-btn>
            <v-btn flat dark 
                @click="navigateTo({name:'Register'})">
                    SIGN-UP
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      navigateTo(route){
          this.$router.push(route);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
