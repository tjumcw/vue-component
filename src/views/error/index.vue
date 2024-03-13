<template>
    <div class="error-page">
        <div class="error-content">
            <h1>Oops! 出错啦！</h1>
            <p>{{ errorMessage }}</p>
            <el-button type="primary" @click="goToHomePage">返回首页</el-button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const errorMessage = "出现错误，请重试"; // 你可以根据具体情况修改错误信息

const goToHomePage = () => {
    router.push("/");
};
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #667eea, #764ba2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-content {
    text-align: center;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
}

h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

p {
    font-size: 18px;
    margin-bottom: 20px;
}

el-button {
    margin-top: 20px;
}
</style>
