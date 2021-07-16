let vm = new Vue({
 el:'#app',
 data:{
  message:'message1'
 }
})

let vm2 = new Vue({
 el:'#app2',
 data:{
  message:'message2'
 },
 methods: {
  change:function(){
   vm.message='app2からの変更'
  }
 }
})