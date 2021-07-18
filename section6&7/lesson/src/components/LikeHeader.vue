<template>
<div>
 <slot name="title" :user="user"></slot>
 <hr>
 <slot name="likeNumber"></slot>
</div>
</template>

<script>
export default{
 data(){
  return {
   user:{
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