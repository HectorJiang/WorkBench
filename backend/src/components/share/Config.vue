<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" sortable :filters="dataList"
                :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}
                    </el-tag>
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
                axios.get("/test.json").then(res => {
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