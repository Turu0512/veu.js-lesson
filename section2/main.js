new Vue({
  el:'#app',
  data:{
    message: 'hello world',
    number:3,
    ok:true,
  },
  methods: {
    sayHi:function(){
      return 'hi';
    }
    },
})