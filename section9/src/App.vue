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

   <label for="detail">イベントの内容</label>
   <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
   <p style="white-space: pre;">{{eventData.detail}}</p>

   <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
   <label for="isPrivate">非表示</label>
   <p>{{eventData.isPrivate}}</p>
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
   title:"",
   number:0,
   host:"",
   detail:"",
   isPrivate:false,
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