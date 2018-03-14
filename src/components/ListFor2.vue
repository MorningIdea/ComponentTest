<template>
        <li>
          {{keyName+1}}、{{ dataList2.name }}
        </li>
</template>

<script>
  export default {
    name: 'ListFor2',
    props: {
      dataList2:{},
      keyName:""
    }
  }
</script>

<style>
  .parentDiv{ width: 100%; height: 100%;}
</style>
