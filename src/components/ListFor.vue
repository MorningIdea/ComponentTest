<template>
  <div class="parentDiv">
    <ul>
        <li v-for="(item, idx) in dataList">
            {{idx+1}}、{{ item.name }}
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListFor',
    props: {
      dataList:{}
    }
  }
</script>

<style>
  .parentDiv{ width: 100%; height: 100%;}
</style>
