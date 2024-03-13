<template>
    <div ref="chartRef" style="width: 1000px; height: 400px;"></div>
</template>

<script setup>
import {watch, ref, onMounted, defineProps} from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    chartData: {
        type: Array,
        required: true,
        default: []
    }
})

const chartRef = ref(null);
onMounted(() => {
    renderChart();
});

let myChart = null;
watch(() => props.chartData, () => {
    if (myChart) {
        myChart.dispose(); // 清除之前的图表实例
    }
    renderChart(); // 重新渲染图表
});

const renderChart = () => {
    myChart = echarts.init(chartRef.value);
    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: props.chartData.map(item => item.name),
            axisLabel: {
                rotate: 45
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: props.chartData.map(item => item.value),
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                }
            }
        ]
    };
    myChart.setOption(options);
};
</script>

<style>
/* 根据需要添加样式 */
</style>
