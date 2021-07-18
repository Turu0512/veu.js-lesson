<template>
<div>
 <LikeHeader v-slot="userHogeo">
  <h1>トータルのいいね数</h1>
  <h2>{{userHogeo}}</h2>
 </LikeHeader>
 <LikeNumber :number="number" @my-click="number=$event"></LikeNumber>
 <LikeNumber :number="number" @my-click="incrementNumber"></LikeNumber>
</div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
 data(){
  return {
  number:40,
  }
},
components:{
　LikeHeader
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