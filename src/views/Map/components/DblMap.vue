<template>
<div>
    <p>地图1</p>
    <div id="map1"></div>
    <p>地图2</p>
    <div id="map2"></div>
</div>
</template>

<script>
import 'ol/ol.css'
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import {
    OSM,
    TileArcGISRest
} from 'ol/source';
export default {
    name: 'OlMap',
    mounted() {
        //渲染地图
        //1、首先创建一个视图
        var view = new View({
            center: [0, 0],
            zoom: 2
        })
        var view = new View({
            center: [0, 0],
            zoom: 2
        })
        //2、创建地图图层
        var layers1 = [
            new TileLayer({
                source: new OSM()
            })
        ]
        var layers2 = [
            new TileLayer({
                source: new OSM()
            })
        ]
        //3、创建第一个地图
        var map1 = new Map({
            target: 'map1',
            layers: layers1,
            view: view
        })
        //4、创建第二个地图
        var map2 = new Map({
            layers: layers2,
            target: 'map2',
            view: view
        })
    }

}
</script>

<style lang="stylus" scoped>
#map1 {
    width: 600px;
    height: 250px;
}

#map2 {
    width: 600px;
    height: 250px;
}
</style>
