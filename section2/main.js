new Vue({
 el:'#app',
 data:{
  counter:0, 
  othercounter:0
 },
 computed:{
  lessThanThreeComputed:function(){
   console.log('computed')
   return this.counter > 3? '3より上' : '３以下'
  },
 },
  methods: {
   lessThanThreeMethod:function(){
    console.log('methods')
    return this.counter > 3? '3より上' : '３以下'
   }

  }
 })