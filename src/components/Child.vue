<template>
  <div class="childNode">
    <!-- 添加一个input输入框 添加keypress事件-->
    <input type="text" v-model="inputValue" @keypress.enter="enter">
    <p>{{mes}}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    props:['mes'],
    // 添加data, 用户输入绑定到inputValue变量，从而获取用户输入
    data: function () {
      return {
        inputValue: ''
      }
    },
    methods: {
      enter () {
        this.$emit("sendiptVal", this.inputValue)
        //子组件发射自定义事件sendiptVal   并携带要传递给父组件的值，
        // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather);
      }
    }
  }
</script>

<style >
	/*body{ background:#fc0;}*/
	div{ font-size:18px;}
  input{background: #fff; border: #ccc solid 1px;}
</style>
