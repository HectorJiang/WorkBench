<template>
    <el-card class="box-card" style="margin: 0 auto;" shadow="always">
        <div slot="header" class="clearfix">
            <span>文章分类</span>
            <el-button style="float: right;" size="small" type="primary" @click="open">添加</el-button>
        </div>
        <el-table :data="tableData" style="text-align:center;">
            <el-table-column label="分类" width=" 180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.category_name }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>

</template>


<script>
    export default {
        inject:["reload"],
        data() {
            return {
                tableData: []
            }
        },

        methods: {
            //请求数据
            getData(){
                this.$http.get("/api/v1/admin/category").then(res => {
                    console.log(res)
                    if (res.data.status == "200") {
                        this.tableData = res.data.data
                        // this.tableData = res.data.result;
                    }
                }, error => {

                })
            },
            //编辑分类
            handleEdit(index, row) {
                console.log(index,row)
                this.$prompt('请输入分类', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    //inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    //发送请求
                    this.$http.put("/api/v1/admin/category/"+row.category_id, { "category_name":value }).then(res => {
                        console.log(res)
                        if (res.data.status != "200") {
                            this.$message({
                                type: 'error',
                                message: res.data.message
                            });
                        } else {
                            this.$message({
                                type: 'success',
                                message: '分类修改为: ' + value
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
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });   
            },
            //删除分类
            handleDelete(index, row) {
                this.$http.delete("/api/v1/admin/category/"+row.category_id).then(res => {
                    console.log(res)
                    if(res.data.status!="200"){
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
            //添加分类
            open() {
                this.$prompt('请输入分类', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    //inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    //发送请求
                    this.$http.post("/api/v1/admin/category/add", { "category_name": value }).then(res => {
                        console.log(res)
                        if (res.data.status != "200") {
                            this.$message({
                                type: 'error',
                                message: res.data.message
                            });
                        } else {
                            this.$message({
                                type: 'success',
                                message: '添加的分类是: ' + value
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

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        },
        //生命周期函数：挂载完成
        mounted() {
            this.getData();
        },
    }
</script>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>