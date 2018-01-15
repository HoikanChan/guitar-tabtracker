<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <form class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field label='Email' v-model="email" />
          <v-text-field label='Password' v-model="password" type='password' />
          <div class="error" v-html="error" />
          <v-btn color="primary" class="cyan" @click="login">
            LOGIN
          </v-btn>
        </form>
      </panel>
    </v-flex>
  
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService.js'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const res = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.user)
          this.$router.push({name: 'songs'})
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
