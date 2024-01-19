<template>
    <div class="login">
        <div class="box">
            <h2>智慧园区-登录</h2>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
            </el-form>

            <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%;">
                登录
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {loginApi} from '@/api/api'
import type { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter()

interface RuleForm {
    username: string
    password: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: 'demo',
    password: 'zh@hm#23',
})
const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 4, max: 8, message: '请输入4-8个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '请输入6-12个字符', trigger: 'blur' },
    ],

})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            loginApi(ruleForm).then((res:any)=>{
                console.log(res);
                if(res.code == 10000){
                    localStorage.setItem('token',res.data.token)
                    ElMessage.success('登录成功')
                    router.push('/admin')
                }else{
                    ElMessage.success('账号或密码错误')
                }
                
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}



</script>

<style lang="scss" scoped>
.login {
    background-color: #3d69c0;
    height: 100vh;
    display: flex;
    justify-content: right;

    .box {
        background-color: #fff;
        width: 600px;
        padding: 120px 160px;
    }
}
</style>