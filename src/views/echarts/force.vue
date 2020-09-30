<template>
<div>
    <div id="manyColumn"></div>
</div>
</template>

<script>
const echarts = require("echarts");
export default {
    mounted() {
        var columLabel = ['方案1', '方案2', '方案3', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        var columName = ['保密性', '完整性', '可靠性', '方案4', '方案5', '方案6', '方案7'];
        var columnValue = new Array();
        var arrData = new Array();

        for (var i = 0; i < columLabel.length; i++) {
            for (var j = 0; j < columName.length; j++) {
                arrData.push(Math.floor(Math.random() * 1000 + 1000 * j - 1000 * i));
            }
            // console.info(arrData);
            columnValue.push(eval('(' + ("{'name':'" + columLabel[i] + "','type':'bar','data':[" + arrData + "]}") + ')'));
        }

        buildChart(columLabel, columName, columnValue);

        function buildChart(columLabel, columName, columnValue) {
            console.log(columLabel, columName, columnValue);
            var chart = document.getElementById('manyColumn');
            var echart = echarts.init(chart);
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: columLabel
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    min: 0,
                    type: 'category',
                    data: columName
                }],
                yAxis: [{
                    min: 0,
                    type: 'value'
                }],
                series: columnValue
            };

            echart.setOption(option);
        }
    }
}
</script>

<style scoped>
#manyColumn {
    width: 100%;
    height: 600px;
    font-size: 14px;
    font-family: "微软雅黑";
    backface-visibility: visible;
    background-blend-mode: inherit;
    background-origin: border-box;
    background: content-box;
    background-color: #5bc0de;
}
</style>
