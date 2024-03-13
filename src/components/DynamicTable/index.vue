<template>
    <div>
        <el-table
            :data="tableData"
        >
            <el-table-column
                v-for="(col, index) in column"
                :key="index"
                :label="col.label"
                :prop="col.prop"

            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import {ref, defineProps, defineExpose} from 'vue';

const props = defineProps({
    fields: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
})

const column = ref([]);
column.value = props.fields.map(field => {
    return {
        prop: field.prop,
        label: field.label
    }
})
const tableData = ref(props.data);
defineExpose({
    column,
    tableData
})
</script>
