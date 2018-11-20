<template>
  <div class="goods-create">
    <el-form ref="form" :model="goods" size="small" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="goods.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="goods.price"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" rows="5" v-model="goods.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GoodsCreate',
  data () {
    return {
      goods: {
        name: '',
        price: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/api/goods', Object.assign({}, this.goods)).then(res => {
        if (res.data.success) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        }
      })
      console.log(this.goods)
    }
  }
}
</script>

<style lang="stylus">
.goods-create {
  margin: 0 auto;
  width: 500px;

  textarea {
    resize: none;
  }
}
</style>
