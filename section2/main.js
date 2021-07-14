new Vue({
 el:'#app',
 data:{
  message: 'hello world',
   
 },
 methods: {
  sayHi:function(){
   this.message="hello Vue.js"
    return this.message;
  }
  },
})