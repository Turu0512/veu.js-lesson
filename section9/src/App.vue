<template>
<div>
 <LikeHeader>
  <h1>初めまして</h1>
 </LikeHeader>
 <LikeNumber :number="number" @my-click="number=$event"></LikeNumber>
 <button @click="currentComponent='Home'">Home</button>
 <button @click="currentComponent='About'">About</button>
 <keep-alive>
 <component :is="currentComponent"></component>
 </keep-alive>
 <div>
   <h2>イベントのフォーム</h2>
   <label for="title">タイトル</label>
   <input Id="title" type="text" v-model.lazy="eventData.title">
   <pre>{{eventData.title}}</pre>

   <h2>イベントの最大人数</h2>
   <label for="number">タイトル</label>
   <input Id="number" type="number" v-model.number="eventData.number">
   <pre>{{ typeof eventData.number}}</pre>
   
   <h2>主催者</h2>
   <label for="host">主催者名</label>
   <input Id="host" type="text" v-model.trim="eventData.host">
   <pre>{{ eventData.host}}</pre>
 </div>
</div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
 data(){
  return {
  number:40,
  currentComponent:Home,
  eventData:{
   title:"hogeo",
   number:0,
   host:""
  }
  }
},
components:{
　LikeHeader,
 About,
 Home,

 },
 methods:{
  incrementNumber(value){
   return this.number=value
  }
 }
}
</script>

<style scoped>
div{
  border:1px solid blue;
}
</style>