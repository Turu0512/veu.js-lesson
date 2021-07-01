<template>
  

<div class="hello">
 
<h1>FormB</h1>
 
    
<p><input type="text" v-model="age" placeholder="input your age"></p>
    
<P><input type="text" v-model="address" placeholder="input your address"></p>
    
<p>Age:{{ age }}</p>
    
<p>Address:{{ address }}</p>
    <button v-on:click="check">Check</button>
</div>
</template>

<script>
export default {
  name: 'FormB',
  data () {
    return {
      age: '',
      address: ''
    }
  },
  methods: {
    check () {
      alert('Your age is ' + this.age + '\nYour address is ' + this.address)
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
