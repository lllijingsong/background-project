<template>
<div>
    <div>
        <div id="map"></div>
    </div>

    <div>
        <el-button @click="moveToLeft">左移</el-button>
        <el-button @click="moveToRight">右移</el-button>
        <el-button @click="moveToUp">上移</el-button>
        <el-button @click="moveToDown">下移</el-button>
        <el-button @click="moveToQingdao">移到青岛</el-button>
        <el-button @click="zoomIn">放大</el-button>
        <el-button @click="zoomOut">缩小</el-button>
    </div>
</div>
</template>

<script>
import 'ol/ol.css'
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import {
    transform
} from 'ol/proj';
import {
    OSM,
    TileArcGISRest
} from 'ol/source'
export default {
    name: 'OlMapLoc',
    data() {
        return {
            map: null,
            view: null,
            layers: null
        }
    },
    mounted() {
        //渲染地图
        //1、首先创建一个视图
        var view = new View({
            // 设置青岛为地图中心，此处进行坐标转换， 把EPSG:4326的坐标，转换为EPSG:3857坐标，因为ol默认使用的是EPSG:3857坐标
            center: transform([120.374798, 36.07316], 'EPSG:4326', 'EPSG:3857'),
            zoom: 10
        })

        //2、创建地图图层
        var layers = [
            new TileLayer({
                source: new OSM()
            })
        ]
        //3、创建地图
        var map = new Map({
            target: 'map',
            layers: layers,
            view: view
        })
        this.map = map;
        this.view = view;
        this.layers = layers;
    },
    methods: {
        //左移
        moveToLeft: function (e) {
            var view = this.map.getView();
            var mapCenter = this.view.getCenter();
            // 让地图中心的x值增加，即可使得地图向左移动，增加的值根据效果可自由设定
            mapCenter[0] += 50000;
            view.setCenter(mapCenter);
            this.map.render();
        },
        //右移
        moveToRight: function (e) {
            var view = this.map.getView();
            var mapCenter = this.view.getCenter();
            // 让地图中心的x值减少，即可使得地图向右移动，增加的值根据效果可自由设定
            mapCenter[0] -= 50000;
            view.setCenter(mapCenter);
            this.map.render();
        },
        //上移
        moveToUp: function (e) {
            var view = this.map.getView();
            var mapCenter = this.view.getCenter();
            // 让地图中心的y值减少，即可使得地图向上移动，增加的值根据效果可自由设定
            mapCenter[1] -= 50000;
            view.setCenter(mapCenter);
            this.map.render();
        },
        //下移
        moveToDown: function (e) {
            var view = this.map.getView();
            var mapCenter = this.view.getCenter();
            // 让地图中心的y值增加，即可使得地图向下移动，增加的值根据效果可自由设定
            mapCenter[1] += 50000;
            view.setCenter(mapCenter);
            this.map.render();
        },
        //移动到青岛
        moveToQingdao: function (e) {
            var view = this.map.getView();
            // 设置地图中心为青岛的坐标，即可让地图移动到青岛
            view.setCenter(transform([120.374798, 36.07316], 'EPSG:4326', 'EPSG:3857'));
            this.map.render();
        },
        //放大
        zoomIn: function (e) {
            var view = this.map.getView();
            // 让地图的zoom增加1，从而实现地图放大
            view.setZoom(view.getZoom() + 1);
        },
        //缩小
        zoomOut: function (e) {
            var view = this.map.getView();
            // 让地图的zoom增加1，从而实现地图缩小
            view.setZoom(view.getZoom() - 1);
        }
    }

}
</script>

<style lang="stylus" scoped>
#map {
    width: 900px;
    height: 350px;
}
</style>
