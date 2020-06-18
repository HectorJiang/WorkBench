<template>
    <el-card class="box-card card">
        <el-table :data="tableData">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="created_time" label="日期" width="180" sortable :filters="dataList"
                :filter-method="filterHandler">
            </el-table-column>
            <el-table-column  label="标题"" width="180">
                <template slot-scope="scope">
                    <a :href="'https://jiangyongxu.club/#/article/'+scope.row.blog_id" target="_blank" class="buttonText">
                        <div slot="reference" class="name-wrapper">
                            {{ scope.row.title }}
                        </div>
                    </a>
                </template>
            </el-table-column>
            <el-table-column prop="category" label="分类"">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.category }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link :to="{path:'/article_edit/'+scope.row.blog_id}"><el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button></router-link>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
<script>
    import axios from 'axios'
    export default {
        inject:["reload"],
        data() {
            return {
                tableData: [],
                dataList: []
            }
        },
        methods: {
            //请求数据
            getData() {
                axios.get("/blog/articles").then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.tableData = res.data.result;
                        for (var i = 0; i < this.tableData.length; i++) {
                            this.dataList.push({ text: this.tableData[i].date, value: this.tableData[i].date })
                        }
                    }
                }, error => {

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
                this.$http.delete("/blog/articles",{data:{"blog_id":row.blog_id}}).then(res => {
                    console.log(res)
                    if(res.data.code!="200"){
                        this.$message({
                            type: 'error',
                            message: res.data.message
                        });
                    }else{
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
    width: 100%!important;
  }
</style>