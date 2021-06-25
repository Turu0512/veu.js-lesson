(function(){
  'use strict';

  //Components

  let likeComponent = Vue.extend({
    // props:["message"],
    props:{
      message:{
        type:String,
        default:"Like"
      }
    },

  data:function(){
  return{
    count:0
  }
},
// コンポーネントでdataを扱う際には関数で返してあげる

    template:'<button @click="countUp">{{message}}{{count}}</button>',
    // template:'<button>like</button><button>like</button>'二つは入れれない。するならdivなどの親要素で囲む
methods: {
  countUp: function(){
    this.count++;
  }
}
  });

  let app = new Vue({
el:'#app',
components:{
  'like-component':likeComponent
}
  });
})();