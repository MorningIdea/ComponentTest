<template>
  <div class="genyuansu">
    <ul>
        <MoviesTag v-for="(items,idx) in movingList2"  :dataList2="items"  :keys="idx"></MoviesTag>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List2',
    components: {
        'MoviesTag': (resolve) => {
            require(['./ListFor2.vue'], resolve)
        }
    },
    computed: {
        movingList2 () {
            console.log("movingList2...")
            return [
                { name: '肖辛克的救赎2' },
                { name: '盗梦空间2' },
                { name: '霍比特人' },
                { name: '朗读者' },
                { name: '本杰明巴顿往事' },
                { name: '完美的世界' },
                { name: '当幸福来敲门222' }
            ]
        }
    }
  }
</script>

<style>
  .parentDiv{ width: 100%; height: 100%;}
</style>
