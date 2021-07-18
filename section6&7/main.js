let lesson = {
 data:function(){
  return {number:0
  }
},
template:
 '<p>いいね{{number}}<button @click="incriment">+1</button></p>',
methods: {
incriment: function (){
 this.number++
}
}
}
// グローバルコンポーネント
// Vue.component("lesson-component",{
//  data:function(){
//    return {number:0
//    }
// },
//  template:
//   '<p>いいね{{number}}<button @click="incriment">+1</button></p>',
//  methods: {
//  incriment: function (){
//   this.number++
//  }
//  }
// })


new Vue({
 el:'#app',
 components:{
  "lesson-component" : lesson
 }
 })
new Vue({
 el:'#app2',
 
 })