new Vue({
 el:'#app',
 data:{
  count:0,
  x:0,
  y:0,
 },
 methods:{
  countUp:function(time){
   this.count+=1*time
  },
  changeMousePosition:function(event , divide){
    this.x = event.clientX/divide;
    this.y = event.clientY/divide;
   },
  myAlert(){
    alert('アラート')
   }
  }
 })