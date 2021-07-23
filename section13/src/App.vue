<template>
  <div style="width:200px; margin:auto; padding-top:50px;">
    <nav>
      <router-link to="/" class="link" exact active-class="link--active">Home</router-link>
      <router-link to="/users" class="link" exact active-class="link--active">Usues</router-link> 
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link{
  margin-right: 10px;
}

.link--active{
  font-size: 20px;
}
</style>