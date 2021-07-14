new Vue({
  el:'#app',
  data:{
    message: 'hello world',
    
  },
  methods: {
    sayHi:function(){
      return this.message;
    }
    },
})