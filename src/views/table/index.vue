<template>
    <DayamicTable :fields="fields" :data="tableData"/>
</template>

<script setup>
import {ref} from 'vue';
import DayamicTable from '@/components/DynamicTable';

const fields = ref([
    {
        prop: 'name',
        label: '姓名'
    },
    {
        prop: 'age',
        label: '年龄'
    }
])

const tableData = ref([
    {
        name: 'John',
        age: 20,
    },
    {
        name: 'Amy',
        age: 28
    }
])
</script>
