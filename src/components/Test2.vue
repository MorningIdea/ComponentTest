<template>
  <div>
     <hr/>
      <h6>child page</h6>
      <h6>父亲传过来的值：{{message}}</h6>
      <div></div>
      <button v-on:click="sendMsgToParent">向父组件传值</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    props:["message"],
    methods:{
      sendMsgToParent:function(){
         this.$emit("listenToChildEvent", "this message is from child");
      }
    }
  }
</script>

<style >
	/*body{ background:#fc0;}*/
	div{ font-size:18px;}
</style>
