<template>
<div>
    <div>
        <div id="map"></div>
    </div>
    <div>
        显示/隐藏：
        <input type="checkbox" checked="checked" @click="checkERSI($event)" />加载ArcGIS地图
        <input type="checkbox" checked="checked" @click="checkOSM($event)" />加载Open Street Map地图
        <input type="checkbox" checked="checked" @click="checkTDT($event)" />加载天地图
        <input type="checkbox" checked="checked" @click="checkAmap($event)" />加载高德地图 -->
    </div>
    <div>
        图层顺序：
        <input name="seq" type="radio" value @click="upArcGIS($event);" />ArcGIS地图在最上
        <input name="seq" type="radio" value @click="upOSM($event);" />OSM地图在最上
        <input name="seq" type="radio" value checked="checked" @click="upTDT($event);" />天地图在最上
        <input name="seq" type="radio" value checked="checked" @click="upAmap($event);" />高德地图在最上
    </div>
</div>
</template>

<script>
import 'ol/ol.css'
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
// import {Group as LayerGroup, Tile as TileLayer} from 'ol/layer'
import {
    transform
} from 'ol/proj';
import {
    OSM,
    TileArcGISRest,
    XYZ
} from 'ol/source'
export default {
    name: 'OlMapOnline',
    data() {
        return {
            map: null,
            view: null,
            //这里创建我们要添加的多个图层
            esriLayers: null,
            osmLayers: null,
            tiandituLayers: null,
            gaodeLayers: null
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
        this.view = view;
        //2、创建地图图层
        var esriLayers =
            new TileLayer({
                source: new XYZ({
                    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                }),
                title: 'ESRI影像'
            })

        //给data中的esriLayers赋值
        this.esriLayers = esriLayers;
        var osmLayers =
            new TileLayer({
                source: new OSM(),
                title: 'OSM影像'
            })

        this.osmLayers = osmLayers;
        var tiandituLayers =
            new TileLayer({
                source: new XYZ({
                    url: "http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=008a8816d2eee25a677670273eaee891",
                    crossOrigin: "anonymous"
                }),
                title: '天地图影像'
            })

        //给data赋值
        this.tiandituLayers = tiandituLayers;
        var gaodeLayers =
            new TileLayer({
                source: new XYZ({
                    url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
                }),
                title: '高德影像'
            })

        //给data赋值
        this.gaodeLayers = gaodeLayers;

        //3、创建地图
        var map = new Map({
            target: 'map',
            // 在地图上添加上面创建的四个图层， 图层顺序自下而上， 依次是ESRI地图， OSM地图， 天地图和高德地图
            layers: [esriLayers, osmLayers, tiandituLayers, gaodeLayers],
            view: view
        })
        this.map = map;

    },
    methods: {
        checkERSI: function (event) {
            console.log(event.target.checked)
            this.esriLayers.setVisible(event.target.checked);
        },
        checkOSM: function (event) {
            this.osmLayers.setVisible(event.target.checked);
        },
        checkTDT: function (event) {
            this.tiandituLayers.setVisible(event.target.checked);
        },
        checkAmap: function (event) {
            this.gaodeLayers.setVisible(event.target.checked);
        },
        upArcGIS: function (event) {
            if (event.target.checked) {
                this.esriLayers.setZIndex(3);
                this.osmLayers.setZIndex(this.osmLayers.getZIndex() - 1);
                this.tiandituLayers.setZIndex(this.tiandituLayers.getZIndex() - 1);
                this.gaodeLayers.setZIndex(this.gaodeLayers.getZIndex() - 1);
            }
        },
        upOSM: function (event) {
            if (event.target.checked) {
                this.osmLayers.setZIndex(3);
                this.esriLayers.setZIndex(this.esriLayers.getZIndex() - 1);
                this.tiandituLayers.setZIndex(this.tiandituLayers.getZIndex() - 1);
                this.gaodeLayers.setZIndex(this.gaodeLayers.getZIndex() - 1);
            }
        },
        upTDT: function (event) {
            if (event.target.checked) {
                this.tiandituLayers.setZIndex(3);
                this.esriLayers.setZIndex(this.esriLayers.getZIndex() - 1);
                this.osmLayers.setZIndex(this.osmLayers.getZIndex() - 1);
                this.gaodeLayers.setZIndex(this.gaodeLayers.getZIndex() - 1);
            }
        },
        upAmap: function (event) {
            if (event.target.checked) {
                this.gaodeLayers.setZIndex(3);
                this.esriLayers.setZIndex(this.esriLayers.getZIndex() - 1);
                this.osmLayers.setZIndex(this.osmLayers.getZIndex() - 1);
                this.tiandituLayers.setZIndex(this.tiandituLayers.getZIndex() - 1);
            }
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
