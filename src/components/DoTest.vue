<template>
  <div class="gnode">
      <h3>
        {{showMsg}}，hello, <p>姓名： {{showName}},</p>
        <p>性别：{{showsexAA}}, </p>
        <p>学校： {{showSchool}}, </p>
        <p>txt：{{showTxt}}, </p>
        <p>城市：{{showCity}}，</p>
        <p>微信：{{showWeixin}}, {{showTalk}}</p>
      </h3>
     <zizujian v-bind:message="parentMsg" v-on:listenToChildEvent="showMsgFromChild"></zizujian> <!-- "zizujian" 使用import时的名称 :冒号表示 v-bind -->

    <button @click="showFunInfo('hello')" style="margin-top: 30px">展示函数信息</button>
    <!-- <zizujian message="dad info....."></zizujian> -->
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue';
	import * as FunAll from '../test/Test';  /*使用export时定义的名字来import*/
	import citys from '../test/Test2'; /*导入default声明的变量*/
  import Wechat from '../test/Test3';
  import {toTalk} from '../test/Test4';

  import msg from './Test.vue';
  import zizujian from './Test2.vue'; /*父组件给数据子组件*/

  export default {
	  data(){
	  	return {
        showName:FunAll.name,
        showsexAA:FunAll.sex,
        showSchool:FunAll.school,
        showTxt:FunAll.tobj.helloTxt,
        showCity:FunAll.citys,
        showWeixin:Wechat.toolName,
        showTalk:toTalk("Hello my friend , welcome to 2018!"),
        showMsg:msg.txt,
        parentMsg:"父组件给数据子组件 a message from parent",
        loginJson:{
          "animal":"dog"
        }
		  }
	  },
    components: { /*多个组件用逗号隔开名称*/
      zizujian
    },
    methods:{
      showMsgFromChild:function(data){
          console.log(data);
      },
      showFunInfo(txt){
        FunAll.showInfo(txt);
      }
    }
	}

</script>

<style >
	/*body{ background:#fc0;}*/
	div{ font-size:18px;}
</style>
