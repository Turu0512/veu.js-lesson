(function(){
'use strict';
//two way data binding(to UI)
// 双方向データバインディング（データとUIを結びつける）
//データを更新すればUIも更新され、UIを更新すればデータも更新されるという考え

let vm = new Vue({
el:'#app',
data: {
  newItem:'',
  todos: []
},

watch: {
  todos:{
    // localStorage.setItem('todos',JSON.stringify(this.todos));
    // alert('Data saved');
    // データの中身までは記録してくれない↓を使う
      handler:function(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
    // alert('Data saved');
      },
deep:true
    }
  
},

mounted: function(){
  this.todos = JSON.parse(localStorage.getItem('todos'))||[]
},

methods: {

  addItem: function(){
    let item ={
      title:this.newItem,
      isDone: false
    }
    this.todos.push(item);
    this.newItem = ""
    // Boxの中を空にする
  },
  deleteItem: function(index){
    if(confirm('are you sure?')){
    this.todos.splice(index,1);
    }
    },
  purge: function(){
    if(!confirm('delete finished ?')){
    return;
    }
    // this.todos = this.todos.filter(function(todo){
    //   return !todo.isDone;
    // });
    this.todos = this.remaining
    }
    
  },

  computed:{
    remaining: function(){
      // let items = this.todos.filter(function(todo){
      //   return !todo.isDone;
      // });
      // return items.length;
      return this.todos.filter(function(todo){
        return !todo.isDone;
      });
      
    }
  }

});

})();
