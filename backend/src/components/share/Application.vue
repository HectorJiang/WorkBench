<template>
<el-card class="box-card card">
    <el-form :inline="true" :model="formInline" class="demo-form-inline form">
        <el-form-item>
            <el-input v-model="formInline.title" placeholder="博客标题" style="width:300px!important"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" class="form-btn">查询</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="danger" @click="onSubmit" class="form-btn">批量删除</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData">
        <el-table-column type="selection">
        </el-table-column>
        <el-table-column prop="created_time" label="日期" width="180" sortable :filters="dataList" :filter-method="filterHandler">
        </el-table-column>
        <el-table-column label="标题" width=" 180">
            <template slot-scope="scope">
                <a :href="'https://jiangyongxu.club/#/article/'+scope.row.blog_id" target="_blank" class="buttonText">
                    <div slot="reference" class="name-wrapper">
                        {{ scope.row.title }}
                    </div>
                </a>
            </template>
        </el-table-column>
        <el-table-column prop="category" label="权限">
                <template slot-scope=" scope">
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.category }}</el-tag>
            </div>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <router-link :to="{path:'/article_edit/'+scope.row.blog_id}">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </router-link>
                <el-button class="btn" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="50">
    </el-pagination>
</el-card>
</template>

<script>
import axios from 'axios'
export default {
    inject: ["reload"],
    data() {
        return {
            formInline: {
                title: '',
            },
            tableData: [],
            dataList: []
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        //请求数据
        getData() {
            axios.get("/blog/articles").then(res => {
                console.log(res)
                if (res.data.code == "200") {
                    this.tableData = res.data.result;
                    for (var i = 0; i < this.tableData.length; i++) {
                        this.dataList.push({
                            text: this.tableData[i].date,
                            value: this.tableData[i].date
                        })
                    }
                }
            })
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        //编辑文章
        handleEdit(index, row) {

        },
        //删除文章
        handleDelete(index, row) {
            this.$http.delete("/blog/articles", {
                data: {
                    "blog_id": row.blog_id
                }
            }).then(res => {
                console.log(res)
                if (res.data.code != "200") {
                    this.$message({
                        type: 'error',
                        message: res.data.message
                    });
                } else {
                    this.$message({
                        type: 'success',
                        message: res.data.message
                    });
                }
                //页面刷新
                this.reload();
            }, error => {
                this.$message({
                    type: 'error',
                    message: "网络出现异常"
                });
            })
        },
    },
    //生命周期函数：挂载完成
    mounted() {
        this.getData();
    },
}
</script>

<style>
.card {
    width: 100% !important;
}

.form {
    margin-left: 10px;
}

.form .form-btn {
    margin-left: 10px;
}

.btn {
    margin-left: 5px !important;
}

.el-pagination{
    margin-top:15px;
}
</style>
