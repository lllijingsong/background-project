<template>
<div style="width: 100%; height: calc(100vh - 60px)">
    <home-map style="width: 100%; height:100%"></home-map>
</div>
</template>

<script>
// 首先引入局部组件
import HomeMap from '@/components/Map'
export default {
    name: 'Home',
    // 需要声明局部组件
    components: {
        HomeMap
    }
}
</script>

<style scoped>
</style>
