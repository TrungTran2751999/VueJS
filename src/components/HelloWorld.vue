<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ hihi }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
  <div v-for="check in listCheck" :key="check.id">
    <label>{{ check.name }}</label>
    <input 
      type="checkbox" 
      :value="check.id"
      v-model="quiz.listCheck"
    />
  </div>
  
  <header-app
    @cancel = "onAlerttt"
  >
  <template v-slot:slot1>
      hihihih
  </template>
  <input id="fullName" :class="{errorrr:errorText.status}" v-model="quiz.fullName"/>
  <input id="email" v-model="quiz.email">
  <button @click="onConsoleQuiz">Console</button>
  </header-app>
</template>

<script>
import Header from "./Header.vue"
export default {
  name: 'HelloWorld',
  data(){
    return {
      quiz:{
        fullName:"",
        address:"",
        listCheck:[]
      },
      errorText:{
        text:"",
        status: false
      },
      listCheck:[
        {
          id:1,
          name:"c1"
        },
        {
          id:2,
          name:"c2"
        },
        {
          id:3,
          name:"c3"
        },
      ]
    }
  },
  components: {
    HeaderApp: Header
  },
  props: {
    msg: String,
    hihi:String
  },
  methods:{
    onAlerttt(){
      alert("klklklklkl")
    },
    onConsoleQuiz(){
      console.log(this.quiz)
      if(this.quiz.fullName.length<=8){
        this.errorText = {
          text:"ahihi",
          status: true
        }
      }else{
        this.errorText.status = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
