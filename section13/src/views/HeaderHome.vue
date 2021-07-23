<template>
 <nav>
  <h2>Home</h2>
  <router-link to="/users" class="link" exact active-class="link--active">Usues</router-link> 
  <router-link to="/" class="link" exact active-class="link--active">Home</router-link>
 </nav>
</template>

<style scoped>
.link{
  margin-right: 10px;
}

.link--active{
  font-size: 20px;
}
</style>