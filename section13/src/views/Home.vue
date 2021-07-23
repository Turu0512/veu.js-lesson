<template>
 <div>
  <h2>home</h2>
  <button @click="toUsers">Usersのページへ行く</button>
 </div>
</template>

<script>
export default {
 methods: {
  toUsers(){
   this.$router.push("users")
  }
 },
}
</script>