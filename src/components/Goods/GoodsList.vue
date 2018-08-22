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
    </el-table>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'GoodsList',
  data () {
    return {
      size: 'small',
      goodsList: []
    }
  },
  mounted () {
    this.$http.get('/api/goods').then(res => {
      if (res.data.success) {
        this.goodsList = res.data.result
      }
    })
  },
  methods: {
    dateFormat (datetime) {
      return moment(datetime).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style>
.goods-list {
  text-align: center;
  padding: 0 20px;
}
</style>
