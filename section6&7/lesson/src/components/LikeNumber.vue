<template>
 <div>
 <p>いいね（{{halfNumber}}）</p>
 <button @click="incriment">+1</button>
   
 </div>
</template>

<script>
export default{
  props:['number'],
  computed:{
   halfNumber(){
    return this.number / 2
   }
  },
  methods:{
    incriment(){
     this.number++
    }
  }
}
</script>

<style scoped>
div{
  border:1px solid red;
}
</style>
