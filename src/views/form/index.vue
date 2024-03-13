<template>
    <DynamicForm :fields="fields" :style="styles"/>
</template>

<script setup>
import DynamicForm from '@/components/DynamicForm';

const fields = [
    {
        type: 'input',
        prop: 'name',
        label: '姓名',
        rules: [
            {
                required: true,
                message: "请输入姓名",
                trigger: 'submit'
            }
        ]
    },
    {
        type: 'select',
        prop: 'gender',
        label: '性别',
        options: [
            {
                value: 'male',
                label: '男'
            },
            {
                value: 'female',
                label: '女'
            }
        ]
    },
    {
        type: 'date',
        prop: 'birthday',
        label: '生日',
        rules: [
            {
                type: 'date',
                title: '请选择生日',
                trigger: 'change'
            }
        ]
    },
    {
        type: 'radio',
        prop: 'favoriteColor',
        label: '喜欢的颜色',
        options: [
            {
                value: 'red',
                label: '红色'
            },
            {
                value: 'blue',
                label: '蓝色'
            },
            {
                value: 'green',
                label: '绿色'
            }
        ]
    },
    {
        type: 'checkbox',
        prop: 'hobbies',
        label: '爱好',
        initValue: [],
        options: [
            {
                value: 'reading',
                label: '阅读'
            },
            {
                value: 'traveling',
                label: '旅行'
            },
            {
                value: 'gaming',
                label: '游戏'
            }
        ]
    },
    {
        type: 'textarea',
        prop: 'introduction',
        label: '介绍'
    }
]

const styles = {
    width: '300px',
}
</script>
