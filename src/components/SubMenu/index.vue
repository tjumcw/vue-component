<template>
    <template v-for="item in menuList">
        <!--    只有自己，表示末级菜单，也就是真正可点击的菜单    -->
        <template v-if="!item.childrenNodes || item.childrenNodes.length === 0">
            <el-menu-item :index="String(item.data.id)" @click="goRoute(item)">
                <template #title>
                    <span>{{ item.data.name }}</span>
                </template>
            </el-menu-item>
        </template>

        <el-sub-menu v-if="item.childrenNodes && item.childrenNodes.length > 0" :index="String(item.data.id)">
            <template #title>
                <div>{{ item.data.name }}</div>
            </template>
            <Menu :menuList="item.childrenNodes"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup>
import {defineProps} from 'vue';
import router from "@/router";

const props = defineProps(['menuList']);
const goRoute = (item) => {
    if (item.data.path) {
        router.push(item.data.path)
    }
}

// 组件逻辑
</script>

<script>
export default {
    name: 'Menu',
}
</script>

<style scoped>
/* 样式保持不变 */
</style>
