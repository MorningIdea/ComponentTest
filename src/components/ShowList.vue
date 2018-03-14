<template>
  <MoviesTag :dataList="movingList"></MoviesTag> <!-- 给子模板的dataList变量注入数据 -->
</template>

<script>
  export default {
    name: 'List',
    components: {
        'MoviesTag': (resolve) => {
            require(['./ListFor.vue'], resolve)
        }
    },
    computed: {
        movingList () {
            return [
                { name: '肖辛克的救赎' },
                { name: '盗梦空间' },
                { name: '霍比特人' },
                { name: '朗读者' },
                { name: '本杰明巴顿往事' },
                { name: '完美的世界' },
                { name: '当幸福来敲门' }
            ]
        }
    }
  }
</script>

<style>
  .parentDiv{ width: 100%; height: 100%;}
</style>
