<template>
  <div class="home">
    <button class="btn_tip" @click="next()">下一页</button>
    <button class="btn_tip" @click="rnext()">下一页,覆盖上一页</button>
    <button class="btn_tip" @click="login()">登录页面</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "My Example Appwqeqwe",
    titleTemplate: "%s - Yay!",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  /**组件实例刚被创建，组件属性计算之前 */
  beforeCreate() {},
  /**组件实例创建完成，属性已将绑定，但DOM还没有生成，el属性还不存在 */
  created() {
    console.log('2321312321');
    
  },
  /**模板挂载编译之前 */
  beforeMount() {},
  /**模板挂载编译之后 */
  mounted() {},
  /**组件更新之前 */
  beforeUpdate() {},
  /**模板挂载编译之后 */
  updated() {},
  /**组件销毁之前 */
  beforeDestroy() {},
  /**组件销毁之后 */
  destroyed() {
    
    
  },
  /**加载组件 */
  components: {},
  /**方法集 */
  methods: {
    next() {
      this.$router.push({
        //核心语句
        path: "/about", //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id: "6567567"
        }
      });
    },
    rnext() {
      this.$router.replace({
        //核心语句
        path: "/about", //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id: "123"
        }
      });
    },
    login: function() {
      this.$router.push({
        //核心语句
        path: "/login", //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id: "dsad"
        }
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
