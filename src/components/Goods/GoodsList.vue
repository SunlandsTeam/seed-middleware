<template>
  <div class="goods-list">
    <el-table :size="size" :data="goodsList" style="width: 100%" border fit>
      <el-table-column prop="id" label="ID" width="200" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" width="200" align="center"></el-table-column>
      <el-table-column prop="price" label="价格" align="center"></el-table-column>
      <el-table-column prop="description" label="描述" align="center"></el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
        <template slot-scope="scope">
          {{dateFormat(scope.row.created_at)}}
        </template>
      </el-table-column>
      <el-table-column prop="updated_at" label="修改时间" align="center">
        <template slot-scope="scope">
          {{dateFormat(scope.row.updated_at)}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="onPreview(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="onDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-pagination layout="total, prev, pager, next, jumper" :current-page="currentPage" :page-size="pageSize" :total="total" @current-change="onCurrentChange" />
    </el-row>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'GoodsList',
  data () {
    return {
      size: 'small',
      goodsList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    this.onQuery()
  },
  methods: {
    dateFormat (datetime) {
      return moment(datetime).format('YYYY/MM/DD HH:mm:ss')
    },
    onQuery (payload) {
      this.$http.get('/api/goods').then(res => {
        if (res.data.success) {
          this.goodsList = res.data.result
          this.currentPage = res.data.page
          this.total = res.data.total
        }
      })
    },
    onPreview (row) {
      console.log(row.id)
    },
    onDelete (row) {
      this.$http.delete(`/api/goods/${row.id}`).then(res => {
        if (res.data.success) {
          this.onQuery()
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      })
    },
    onCurrentChange () {}
  }
}
</script>

<style>
.goods-list {
  text-align: center;
  padding: 0 20px;
}
</style>
