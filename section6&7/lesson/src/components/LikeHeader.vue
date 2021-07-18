<template>
<div>
 <slot></slot>

</div>
</template>

<script>
export default{
 data(){
  return {
   hogeUser:{
    firstName:"hogeo",
    lastName:"hoge"
 },
}
 }}
</script>

<style scoped>
h1{
 color:red;
}
</style>