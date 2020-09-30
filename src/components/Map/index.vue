<template>
<div>
    <div id="map"></div>
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
        var layers = [
            new TileLayer({
                source: new OSM()
            }),
            new TileLayer({
                extent: [-23884991, 2870341, -1455066, 6338219],
                source: new TileArcGISRest({
                    url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer'
                })
            })
        ]

        var map = new Map({
            layers: layers,
            target: 'map',
            view: new View({
                center: [-10997148, 4569099],
                zoom: 4
            })
        })
    },
    data() {
        return {

        }
    },
    methods: {
        init() {

        }
    }
}
</script>

<style lang="stylus" scoped>
#map {
    height: 100%;
    width: 100%;
}
</style>
