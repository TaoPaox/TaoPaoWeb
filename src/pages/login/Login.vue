<template>
  <div class="btn_tip" @click="login()">登录</div>
</template>

<script>
export default {
  name: "Login",
  created(){
   
    
  },

  mounted() {
     console.log(this.$app);
  },
  methods: {
    login: function() {

      this.$app.isLogin(true);
      let redirect = decodeURIComponent(this.$route.query.redirect||'/');
      console.log(redirect);
      this.$router.replace({
        path:redirect
      });
    }
  }
};
</script>



<style >
.home {
  display: flex;
  flex-direction: column;
}
.btn_tip {
  background-color: darkred;
  font-size: 18px;
  padding: 10px;
  color: white;
}
</style>
