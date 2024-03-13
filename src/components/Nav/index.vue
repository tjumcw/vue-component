<template>
    <div class="navbar">
        <el-menu
            :default-active="activeIndex"
            class="menu"
            mode="horizontal"
            background-color="#14161f"
            text-color="#b4b7c1"
            active-text-color="#61dafb"
        >
            <el-menu-item index="1" @click="jumpPage('/home')">首页打卡</el-menu-item>
            <el-menu-item index="2" @click="jumpPage('/student')">个人中心</el-menu-item>
            <el-menu-item index="3" @click="jumpPage('/exception')">异常上报</el-menu-item>
            <el-menu-item index="4" @click="jumpPage('/notification')">通知和提醒</el-menu-item>
            <el-menu-item index="5" @click="jumpPage('/leave')">请假管理</el-menu-item>
            <el-menu-item index="6" @click="handleLogOut">退出登录</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import {defineProps, onMounted, onUnmounted, ref} from 'vue';
import {useStore} from "vuex";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import {ElMessage} from "element-plus";

const store = useStore();
const props = defineProps({
    activeIndex: {
        type: Number,
        required: true
    },
});

const stompClient = ref(null);

const initWebSocket = () => {
    const sock = new SockJS('http://localhost:8081/websocket');
    stompClient.value = Stomp.over(sock);

    stompClient.value.connect({}, (frame) => {
        sendMessage(store.getters.userId);
        stompClient.value.subscribe('/topic/check.status', (response) => {
            ElMessage.success(response.body);
        });
    });
};

const sendMessage = (message) => {
    if (stompClient.value && stompClient.value.connected) {
        stompClient.value.send("/app/leave/request", {}, JSON.stringify({'id': message}));
    } else {
        console.error('STOMP连接尚未建立。');
    }
};

const tearDownWebSocket = () => {
    if (stompClient.value && stompClient.value.connected) {
        stompClient.value.disconnect();
    }
};
onMounted(() => {
    initWebSocket();
});

onUnmounted(() => {
    tearDownWebSocket();
});

const jumpPage = (path) => {
    window.open(path, "_self");
}
const handleLogOut = async () => {
    store.dispatch("app/logOut");
};
</script>

<style scoped>
li {
    font-size: 20px;
}
</style>
