<template>
  <div>
    <el-table :data="goodsList" style="width: 100%" border fit>
      <el-table-column prop="id" label="id" width="200" align="center"></el-table-column>
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

<style scoped>

</style>
