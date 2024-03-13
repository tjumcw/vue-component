<template>
    <el-card :style="{...styles}">
        <el-form
            :model="formData"
            :rules="formRules"
            ref="formRef"
        >
            <el-form-item
                v-for="(field, index) in fields"
                :key="index"
                :label="field.label"
                :prop="field.prop"
            >
                <el-input
                    v-if="field.type === 'input'"
                    v-model="formData[field.prop]"
                    placeholder="请输入"
                />
                <el-select
                    v-if="field.type === 'select'"
                    v-model="formData[field.prop]"
                    placeholder="请选择"
                >
                    <el-option
                        v-for="(option, optionIdx) in field.options"
                        :key="optionIdx"
                        :value="option.value"
                        :label="option.label"
                    />
                </el-select>
                <el-date-picker
                    v-if="field.type === 'date'"
                    v-model="formData[field.prop]"
                    type="date"
                    placeholder="选择日期"
                />
                <el-input
                    v-if="field.type === 'textarea'"
                    type="textarea"
                    v-model="formData[field.prop]"
                    placeholder="请输入内容"
                />
                <el-radio-group
                    v-if="field.type === 'radio'"
                    v-model="formData[field.prop]"
                >
                    <el-radio
                        v-for="(option, optionIdx) in field.options"
                        :key="optionIdx"
                        :label="option.value"
                    >
                        {{ option.label }}
                    </el-radio>
                </el-radio-group>
                <el-checkbox-group
                    v-if="field.type === 'checkbox'"
                    v-model="formData[field.prop]"
                >
                    <el-checkbox
                        v-for="(option, optionIdx) in field.options"
                        :key="'checkbox_' + optionIdx"
                        :label="option.value"
                    >
                        {{ option.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup>
import {ref, defineProps, defineExpose} from 'vue';

const props = defineProps({
    fields: {
        type: Array,
        required: true
    },
    styles: {
        type: Object,
        required: true
    }
})

const formData = ref({});
const formRules = ref({});

props.fields.forEach(field => {
    formData.value[field.prop] = field.initValue || '';
    formRules.value[field.prop] = field.rules;
})

const formRef = ref(null);

const submitForm = async () => {
    formRef.value.validate(async (valid, fields) => {
        if (valid) {
            console.log(formData.value);
        } else {
            console.log("error submit!", fields);
        }
    });
}

defineExpose({
    formData,
    formRules,
    submitForm,
})
</script>
