<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180" sortable :filters="dataList"
                :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="title" label="标题"" width="180">
                <!-- <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.title }}</el-tag>
                        </div>
                </template> -->
            </el-table-column>
            <el-table-column prop="category" label="分类"">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
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
            }
        },
        //生命周期函数：挂载完成
        mounted() {
            this.getData();
        },
    }
</script>