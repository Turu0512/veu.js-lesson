<template>
  

<div class="hello">
 
<h1>FormA</h1>
 
    
<p><input type="text" v-model="name" placeholder="input your name"></p>
    
<p><input type="text" v-model="msg" placeholder="input message"></p>
    
<p>Name:{{ name }}</p>
    
<p>Message:{{ msg }}</p>
    <button v-on:click="check">Check</button>
</div>
</template>

<script>
export default {
  name: 'FormA',
  data () {
    return {
      name: '',
      msg: ''
    }
  },
  methods: {
    check () {
      alert('Your name is ' + this.name)
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
