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
 watch:{
  // 非同期処理に使う。それ以外は基本computed
  counter:function(){
   let vm =this
   setTimeout(function(){
    vm.counter=0
   },2000)
 }
}
 })