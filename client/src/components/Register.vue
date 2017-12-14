<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field label='Email' v-model="email" />
          <v-text-field label='Password' v-model="password" type='password' />
          <div class="error" v-html="error" />
          <v-btn color="primary" class="cyan" @click="register">
            Register
          </v-btn>
        </div>
      </panel>
    </v-flex>
  
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService.js'
  import Panel from '@/components/Panel.vue'
  export default {
    components: {
      Panel
    },
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register() {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
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
