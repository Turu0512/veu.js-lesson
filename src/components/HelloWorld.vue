<template>

<div class="hello">

<h1>{{ msg }}</h1>
 
    <span>Selected: {{ selectedComponent }}</span>
    
    <input type="radio" id="FormA" value="FormA" v-model="selectedComponent">
    <label for="FormA">FormA</label>
    <input type="radio" id="FormB" value="FormB" v-model="selectedComponent">
    <label for="FormB">FormB</label>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
</div>
</template>

<script>
import FormA from './FormA.vue'
import FormB from './FormB.vue'
export default {
  name: 'HelloWorld',
  components: {
    FormA,
    FormB
  },
  data () {
    return {
      selectedComponent: '',
      msg: 'HelloWorld'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
