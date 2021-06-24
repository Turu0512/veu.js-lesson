(function(){
'use strict';
//two way data binding(to UI)
// 双方向データバインディング（データとUIを結びつける）
//データを更新すればUIも更新され、UIを更新すればデータも更新されるという考え

let vm = new Vue({
el:'#app',
data: {
  newItem:'',
  todos: [
    'task 1',
    'task 2',
    'task 3'
  ]
},
methods: {
  // addItem: function(e){
  //   e.preventDefault();文の遷移（初期状態に戻る、リロードされる）を止める
  //   this.todos.push(this.newItem);
  addItem: function(){
    this.todos.push(this.newItem);
    this.newItem = ""
    // Boxの中を空にする
  },
  deleteItem: function(index){
    if(confirm('are you sure?'))
    this.todos.splice(index,1);
    }
}

});
})();