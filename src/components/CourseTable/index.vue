<template>
    <div class="container">
        <div class="left-container">
            <ul class="header">
                <li style="width: 100px;">时间段</li>
                <li style="border-right: none; width: 100px;">节次</li>
            </ul>
            <div class="left-content">
                <ul class="timeUl">
                    <li>上午</li>
                    <li>下午</li>
                    <li style="height: 120px;">晚上</li>
                </ul>
                <ul style="flex-direction: column">
                    <li v-for="num in nums" :key="'time' + num" style="width: 100px;">{{ num }}</li>
                </ul>
            </div>
        </div>
        <div class="right-container">
            <ul class="header">
                <li v-for="(label, index) in labels" :key="label">
                    {{ label }}
                    <p v-if="checkIsToday(index)" class="today">✔️</p>
                    <p v-if="checkIsToday(index)" class="todayText">{{ fullTime }}</p>
                </li>
            </ul>
            <div class="content">
                <ul v-for="(data, index) in courses" :key="index">
                    <li v-for="(course, subIndex) in data" :key="index + '-' + subIndex"
                        @click="handleClick(course, index + 1, subIndex + 1, currentIndex + 1)">
                        {{ course.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import {getCurrentFullTime} from "@/utils/timeUtils";

const props = defineProps({
    courses: {
        type: Array,
        required: true,
        default: () => new Array(11).fill(new Array(7).fill({}))
    },
    handleClick: {
        type: Function,
        required: true
    }
})

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const labels = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
const fullTime = getCurrentFullTime().split(" ")[0];
const currentIndex = ref(null);

const checkIsToday = (index) => {
    const day = new Date().getDay();
    if ((index + 1) % 7 === day) {
        currentIndex.value = index;
        return true;
    }
    return false;
}


</script>

<style scoped>
li {
    height: 40px;
}

.container {
    display: flex;
    align-items: flex-start;
}

.left-container {
    width: 200px;
    border: 2px solid #e8d8d8;
    border-bottom: none;
    border-right: none;
}

.right-container {
    width: 840px;
    border: 2px solid #e8d8d8;
    border-bottom: none;
}

.header {
    display: flex;
    align-items: center;
    background-color: #93d3e5;
}

.header li {
    width: 120px;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    border-right: 2px solid #e8d8d8;
}

.header li:last-child {
    width: 120px;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    border-right: none;
}

.content {
    background-color: beige;
}

.left-content {
    display: flex;
    align-items: center;
    background-color: beige;
}

.left-content ul {
    width: 100px;
}

.timeUl li {
    height: 160px;
    border-right: 2px solid #e8d8d8;
    border-bottom: 2px solid #e8d8d8;
}

.left-content li {
    width: 100px;
    padding: 10px;
    text-align: center;
    border-bottom: 2px solid #e8d8d8;
}

.content ul {
    display: flex;
    align-items: center;
}

.content ul li {
    width: 120px;
    text-align: center;
    padding: 10px;
    border-right: 2px solid #e8d8d8;
    border-bottom: 2px solid #e8d8d8;
    cursor: pointer;
}

.content ul li:last-child {
    width: 120px;
    border-right: none;
}

.today {
    position: relative;
    top: -30px;
    left: -40px;
}

.todayText {
    position: relative;
    top: -80px;
}
</style>
