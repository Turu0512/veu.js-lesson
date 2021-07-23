<template>
<div class="main">
  <button @click="myAnimation='slide'">slide</button>
  <button @click="myAnimation='fade'">fade</button>
  <p>{{myAnimation}}</p>

  <br>
  <button @click="myComponent='myComponentA'">myComponentA</button>
  <button @click="myComponent='myComponentB'">myComponentB</button>
  <transition name="fade" mode="out-in">
  <component :is="myComponent"></component>
  </transition>

<button @click="show=!show">切り替え</button>
<br><br>
<transition
:css="false"
@before-enter="beforeEnter"
@enter="enter"
@leave="leave"
>
  <div class="circle" v-if="show"></div>
</transition>

<transition name="fade" mode="out-in">
<p v-if="show" key="bye">さよなら</p>
<p v-else key="hello">こんにちは</p>
<!-- keyを設定することで二つの要素を区別する。ないとトランジションがかからない -->
</transition>
<transition :name="myAnimation" appear>
  <p v-if="show">hello</p>
</transition>
<transition enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__shakeX" appear>
  <!-- typeでトランジションとアニメーションのどちらの時間に合わせるかを指定する -->
  <!-- appearでリロード時にも適用 -->
  <p v-if="show">hello</p>
</transition>
</div>
</template>

<script>
import myComponentA from './components/myComponentA.vue'
import myComponentB from './components/myComponentB.vue'


export default {
  components:{
    myComponentA,
    myComponentB
  },
  data(){
    return {
        show: true,
        myAnimation: 'slide',
        myComponent:'myComponentA',
    }
  },
  methods:{
    beforeEnter(el){
      // 現れる前
      
    },
    enter(el,done){
      // 現れる時
      let scale = 0;
      const interval= setInterval(()=>{
        el.style.transform = `scale(${scale})`;
        scale +=0.1;
        if(scale>1){
          clearInterval(interval);
          done();
        }
        // cssが無い場合は「必ず！done」をつける
      },20)
    },
    leave(el,done){
      // 消える時
      let scale = 1;
      const interval= setInterval(()=>{
        el.style.transform = `scale(${scale})`;
        scale -=0.1;
        if(scale<0){
          clearInterval(interval)
          done();
        };
        // cssが無い場合は「必ず！done」をつける
      },20)
    },
  }
}
</script>

<style scoped>
.circle{
  height:200px;
  width:200px;
  margin:auto;
  border-radius: 100%;
  background-color: deeppink;
}


.fade-enter {
  /* 現れる時の状態 */
  opacity:0;
}
.fade-enter-active{
/* 現れる時のトランジションの状態 */
transition: opacity 0.5s;
}
.fade-enter-to{
/* 現れる時の最後の状態 */
opacity:1;
}
.fade-leave{
  /* 消える時の状態 */
  opacity: 1;
}
.fade-leave-active{
  /* 消える時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to{
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to{
  opacity: 0;
}
.slide-enter-active{
  animation:slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active{
  animation:slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in{
  from{
    transform: translateX(100px);
  }
  to{
    transform: translateX(0);
  }
}
.main {
  width: 70%;
  margin: auto;
  padding: 5rem;
  text-align:center;
}
</style>