<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- v-model是降该控件跟对应变量进行绑定
    比如，在input里面用vmodel绑定一个 变量，那么每次修改input的值，绑定的那个变量
    就会对应修改，这个是双向绑定 ps(注意：v-model只能用于表单类型，就是输入性控件，其他控件不能用，用vbind)-->
    <input v-model=inputData type="text" />
    <!-- v-bind缩写直接：即可，v-bind动态绑定指令，
    默认情况下标签自带属性的值是固定的，在为了能够动态的给这些属性添加值，
    可以使用v-bind:你要动态变化的值="表达式" -->
    <Child :msg1= inputData @child1='handleChild1'/>

    <button @click="toTestRouter1">加载路由</button>
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Child from '@/components/childComponent1.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Child,
  },
  methods:{
    handleChild1(value1,value2){
      console.log('收到child1回传的数据： ' + value1 + ' ' + value2);
    },
    toTestRouter1(){
      this.router.push('testrouter1')
    }
  },
  data(){
    return{
      inputData:'',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
