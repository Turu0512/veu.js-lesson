let vm = new Vue({
 el:'#app',
 data:{
  message:'message1'
 }
})

new Vue({
 data:{
  message:'message2'
 },
 template:"<h1>{{message}}</h1>"

}).$mount("#app2")