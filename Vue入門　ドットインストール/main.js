(function(){
'use strict';
//two way data binding(to UI)
// 双方向データバインディング（データとUIを結びつける）
//データを更新すればUIも更新され、UIを更新すればデータも更新されるという考え

let vm = new Vue({
el:'#app',
data: {
  newItem:'',
  todos: [{
    title: 'task1',
    isDone: false
  },
  {
    title: 'task2',
    isDone: false
  },
  {
    title: 'task3',
    isDone: true
  }]

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
    }
  },

  computed:{
    remaining: function(){
      let items = this.todos.filter(function(todo){
        return !todo.isDone;
        // isDoneがfalse、要素が残っていれば
      });
      return items.length;
    }
  }

});
})();