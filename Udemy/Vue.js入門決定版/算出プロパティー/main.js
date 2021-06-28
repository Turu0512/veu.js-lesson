let app = new Vue({
  el:'#app',
  data:{
    basePrice:100
  },
  computed:{
taxIncludePrice: {
  get:function(){
  return parseInt(this.basePrice * 1.1)
  // parseInt　整数を返す
  },
  set:function(taxIncludePrice){
this.basePrice = Math.ceil(taxIncludePrice /1.1)
// ceil　小数点以下切り上げ
  }
}
  }
  })