<template>
    <el-container>
        <el-header>
            <div class="z">
                <div class="left">返回</div>
                <div class="right">新建月卡</div>
            </div>
        </el-header>
        <el-main>
            <div class="top">
                <h3>车辆信息</h3>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                    :size="formSize" status-icon>
                    <el-form-item label="车主姓名" prop="personName">
                        <el-input v-model="ruleForm.personName" />
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phoneNumber">
                        <el-input v-model="ruleForm.phoneNumber" />
                    </el-form-item>
                    <el-form-item label="车牌号码" prop="carNumber">
                        <el-input v-model="ruleForm.carNumber" />
                    </el-form-item>
                    <el-form-item label="车辆品牌" prop="carBrand">
                        <el-input v-model="ruleForm.carBrand" />
                    </el-form-item>
                </el-form>
            </div>
            <div class="b">
                <h3>车辆信息</h3>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                    :size="formSize" status-icon>
                    <el-form-item label="车主姓名" prop="personName">
                        
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phoneNumber">
                        <el-input v-model="ruleForm.phoneNumber" />
                    </el-form-item>
                    <el-form-item label="车牌号码" prop="carNumber">
                        <el-input v-model="ruleForm.carNumber" />
                    </el-form-item>
                    <el-form-item label="车辆品牌" prop="carBrand">
                        <el-input v-model="ruleForm.carBrand" />
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
        <el-footer>
            <div>
                <el-button>重置</el-button>
                <el-button type="primary">确定</el-button>
            </div>
        </el-footer>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
    personName: string
    phoneNumber: string
    carNumber: string
    carBrand: string
    cardStartDate: string
    cardEndDate: string
    paymentAmount: string
    paymentMethod: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    personName: '',
    phoneNumber: '',
    carNumber: '',
    carBrand: '',
    cardStartDate: '',
    cardEndDate: '',
    paymentAmount: '',
    paymentMethod: '',
})

const rules = reactive<FormRules<RuleForm>>({
    personName: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    phoneNumber: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    carNumber: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    carBrand: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    cardStartDate: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    cardEndDate: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    paymentAmount: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    paymentMethod: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3-5个字符', trigger: 'blur' },
    ],
    
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))

</script>

<style lang="scss" scoped>
.el-header {
    background-color: #fff;

    .z {
        display: flex;
        align-items: center;

        .left {
            padding: 10px;
            border-right: 1px solid #ccc;
        }

        .right {
            padding: 10px;
        }
    }
}
.top,b{
    background-color: #fff;
    padding: 10px;
    .el-form{
        display: flex;
        flex-wrap: wrap;
        .el-form-item{
            width: 50%;
        }
    }
}

.el-main {
    background-color: #f4f6f8;
    height: calc(100vh - 120px);
}

.el-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>