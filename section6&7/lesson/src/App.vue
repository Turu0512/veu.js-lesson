<template>
<div>
 <LikeHeader>
  <h1>初めまして</h1>
 </LikeHeader>
 <LikeNumber :number="number" @my-click="number=$event"></LikeNumber>
 <button @click="currentComponent='Home'">Home</button>
 <button @click="currentComponent='About'">About</button>
 <component :is="currentComponent"></component>
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