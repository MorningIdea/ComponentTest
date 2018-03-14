<template>
  <div class="">
      <a v-bind:href="urlTxt">Test</a>
      <div :class="{ red: isRed }">Red</div>
      <div :style="{ fontSize: size + 'px' }">Hello........</div>
      <div v-bind="{ id: someProp, 'other-attr': otherProp }">哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div class="div1">SCSS测试222222222222</div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data(){
      return {
        urlTxt:"http://www.baidu.com",
        size:28,
        isRed:true,
        someProp:"IdNodeName",
        otherProp:"other-attrother-attr"
      }
    }
  }
</script>

<style>
  body{ font-size: 18px; text-align: center;}
  .red{ color: #fa0000}
</style>
