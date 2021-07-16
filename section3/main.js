new Vue({
 el:'#app',
 data:{
  fruits:["バナナ","りんご","ぶどう"],
  },
 methods:{
  remove: function(){
   this.fruits.shift()
  }
 }
})