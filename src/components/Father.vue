<template>
      <div>
      　　<p>FatherAAAAAAAAAAAA</p>

          <hr/>
          <h3>child Page</h3>
      　　 <accept-and-refuse :mes='loginJson.animal'  @sendiptVal='showChildMsg'></accept-and-refuse> <!-- v-bind:mes='loginJson.animal'  v-on:sendiptVal='showChildMsg' -->
    　</div>
</template>

<script type="text/javascript">
  import AcceptAndRefuse from './Child.vue'
  export default {
    name: 'Father',
    data() {
      return {
        message: 'hello message',
        loginJson: {
          "animal": "dog"
        }
      }
    },
    components:{
      AcceptAndRefuse
    },

    methods: {
        showChildMsg:function(data){
          console.log("datasssssss= " + data);
        }
      }
    }
</script>

<style >
	/*body{ background:#fc0;}*/
	div{ font-size:18px;}
</style>
