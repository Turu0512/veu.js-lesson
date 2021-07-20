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
 <div style="padding:10rem;">
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

  <p>参加条件</p>
  <input type="checkbox" id="10" value="10" v-model="eventData.target">
  <label for="10">10代</label> 
  <input type="checkbox" id="20" value="20" v-model="eventData.target">
  <label for="20">20代</label> 
  <input type="checkbox" id="30" value="30" v-model="eventData.target">
  <label for="30">30代</label> 
  <p>{{eventData.target}}</p>

  <p>参加費</p>
  <input type="radio" id="flee" value="無料" v-model="eventData.price">
  <label for="flee">無料</label>
  <input type="radio" id="paid" value="有料" v-model="eventData.price">
  <label for="paid">有料</label>

  <p>開催場所</p>
  <select v-model="eventData.location">
   <option v-for="location in locations" key="locarion">{{location}}</option>
  </select>
   <p>{{eventData.location}}</p>
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
  locations:["東京","大阪","名古屋"],
  eventData:{
   title:"",
   number:0,
   host:"",
   detail:"",
   isPrivate:false,
   target:[],
   price:"無料",
   location:[]
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