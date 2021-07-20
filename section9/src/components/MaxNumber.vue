<template>
<div>
 <h2>イベントの最大人数</h2>
  <label for="number">最大人数</label>
  <input Id="number" 
  type="number" 
  :value="value" 
  @input="$emit('input',$event.target.value)">
  <pre>{{ value }}</pre>
</div>
</template>

<script>
export default{
 props:["value"],
}
</script>