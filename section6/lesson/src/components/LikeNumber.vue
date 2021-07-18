<template>
  <div>
  <p>いいね（{{number}}）</p>
  <button @click="incriment">+1</button>
    
  </div>
</template>

<script>
export default{
  data:function(){
    return {
      number:5
    }
  },
  methods:{
    incriment:function(){
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
