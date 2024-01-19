<template>
    <div class="top">
        <div class="z">
            <span>车牌号码</span>
            <el-input v-model="from.carNumber" placeholder="Please input" />
        </div>
        <div class="z">
            <span>车主姓名</span>
            <el-input v-model="from.personName" placeholder="Please input" />
        </div>
        <div class="z">
            <span>状态</span>
            <el-input v-model="from.cardStatus" placeholder="Please input" />
        </div>
        <el-button type="primary" @click="getlist">查询</el-button>
    </div>

    <el-button type="primary" @click="$router.push('/add')">新增</el-button>
    <el-table ref="multipleTableRef" :data="list" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" label="序号" width="55">

        </el-table-column>
        <el-table-column property="personName" label="车主名称" width="120" />
        <el-table-column property="phoneNumber" label="联系方式" show-overflow-tooltip />
        <el-table-column property="carBrand" label="车辆品牌" show-overflow-tooltip />
        <el-table-column property="totalEffectiveDate" label="剩余有效天数" show-overflow-tooltip />
        <el-table-column property="cardStatus" label="状态" show-overflow-tooltip>
            <template #default="scope">
                <span>{{ scope.row.cardStatus == 0 ? '有效' : '已过期' }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
            <template #default="scope">
                <span>续费</span>
                <span>查看</span>
                <span>编辑</span>
                <span @click="del(scope.row)">删除</span>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination v-model:current-page="from.page" v-model:page-size="from.pageSize" :page-sizes="[100, 200, 300, 400]"
         layout="total, prev, pager, next"
        :total="total" @size-change="getlist" @current-change="getlist" />
</template>

<script lang="ts" setup>
import { fr } from "element-plus/es/locale/index.mjs";
import { ref, reactive } from "vue";
import { getlistApi,delApi} from '@/api/api'
const from = reactive({
    page: 1,
    pageSize: 2,
    carNumber: '',
    personName: '',
    cardStatus: ''
})
const total = ref(0)
const list = ref([])
const getlist = () => {
    getlistApi(from).then((res: any) => {
        console.log(res);
        list.value = res.data.rows
        total.value =res.data.total
    })
}
getlist()
const handleSelectionChange = (val: any) => {
    console.log(val);

}

const del = (row:any)=>{
    console.log(row);
    
    delApi({ids:row.id}).then((res:any)=>{
        console.log(res);
        
    })
}

</script>

<style lang="scss" scoped>
.top {
    display: flex;
    align-items: center;

    .z {
        display: flex;
        align-items: center;

        .el-input {
            width: 200px;
        }
    }
}
</style>