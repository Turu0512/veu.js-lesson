(function(){
'use strict';
//two way data binding(to UI)
// 双方向データバインディング（データとUIを結びつける）
//データを更新すればUIも更新され、UIを更新すればデータも更新されるという考え

let vm = new Vue({
el:'#app',
data: {
  todos: [
    'task 1',
    'task 2',
    'task 3'
  ]
}

});
})();