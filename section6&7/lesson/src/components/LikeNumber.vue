<template>
  <div>
  <p>いいね（{{number / 2}}）</p>
  <button @click="incriment">+1</button>
    
  </div>
</template>

<script>
export default{
  props:['number'],
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
