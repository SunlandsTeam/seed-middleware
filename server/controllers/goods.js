import goods from '../models/goods'

const getGoodsList = async (ctx) => {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  ctx.query.page_index = parseInt(ctx.query.page_index) || 1
  ctx.query.page_size = parseInt(ctx.query.page_size) || 10
  const result = id ? await goods.getGoodsListById(id) : await goods.getGoodsListByPage(ctx.query.page_index, ctx.query.page_size)
  const page = ctx.query.page_index
  const total = await goods.getGoodsListTotalNumber()
  ctx.body = {
    success: true,
    result, // 将请求的结果放到response的body里返回
    page,
    total
  }
}

const createGoodsList = async function (ctx) {
  const data = ctx.request.body
  const success = await goods.createGoodsList(data)
  ctx.body = {
    success
  }
}

const removeGoodsList = async function (ctx) {
  const id = ctx.params.id
  const success = await goods.removeGoodsList(id)
  ctx.body = {
    success
  }
}

const updateGoodsList = async function (ctx) {
  const goodsID = ctx.params.goodsID
  const id = ctx.request.body.id
  const name = ctx.request.body.name
  const description = ctx.request.body.description

  const success = await goods.updateGoodsList(goodsID, id, name, description)
  ctx.body = {
    success
  }
}

export default {
  getGoodsList,
  createGoodsList,
  removeGoodsList,
  updateGoodsList
}
