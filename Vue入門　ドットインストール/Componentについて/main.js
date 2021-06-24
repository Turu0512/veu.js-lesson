(function(){
  'use strict';

  //Components

  let likeComponent = Vue.extend({
    template:'<button>like</button>'
    // template:'<button>like</button><button>like</button>'二つは入れれない。するならdivなどの親要素で囲む

  });

  let app = new Vue({
el:'#app',
components:{
  'like-component':likeComponent
}
  });
})();