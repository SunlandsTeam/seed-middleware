<template>
  <div class="goods-list">
    <el-table :size="size" :data="goodsList" style="width: 100%" border fit>
      <el-table-column prop="id" label="ID" width="200" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" width="200" align="center"></el-table-column>
      <el-table-column prop="price" label="价格" align="center"></el-table-column>
      <el-table-column prop="description" label="描述" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
.goods-list {
  text-align: center;
  padding: 0 20px;
}
</style>
