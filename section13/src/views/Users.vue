<template>
 <div>
  <h2>users</h2>
  <hr>
  <router-link to="/users/1">user1</router-link>
  <router-link to="/users/2">user2</router-link>
  <hr>
  <!-- <h1>User No.{{ $route.params.id }}</h1> -->
  <h1>User No.{{ id }}</h1>
  
 </div>
</template>

<script>
export default {
   props:["id"],
 }

</script>