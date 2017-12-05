<template>
  <div class="hello">
    <input
    type='email'
    placeholder="email"
    v-model="email"
    />
    <input
    type='password'
    placeholder="password"
    v-model="password"
    />
    <button
      @click="register">
      Register
    </button>
    </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods:{
    async register(){
      const res = await AuthenticationService.register({
        email:this.email,
        password:this.password
      });
      console.log(res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
