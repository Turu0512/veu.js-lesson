<template>
<div class="main">
<button @click="show=!show">切り替え</button>
<transition name="fade" appear>
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
export default {
  data(){
    return {
        show: true,
    }
  }
}
</script>

<style scoped>
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