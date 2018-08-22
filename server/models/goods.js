import db from '../config/db.js'

const goodsModel = '../schema/goods.js'
const TodoListDb = db.Todolist

const GoodsList = TodoListDb.import(goodsModel)

const getGoodsListTotalNumber = async function () {
  const list = await GoodsList.findAll()
  return list.length
}

const getGoodsListByPage = async function (pageIndex, pageSize) {
  pageIndex = pageIndex || 1
  pageSize = pageSize || 10
  const list = await GoodsList.findAll({
    limit: pageSize,
    offset: pageSize * (pageIndex - 1)
  })

  return list
}

const getGoodsListById = async function (id) {
  const list = await GoodsList.findAll({ // 查找全部的todolist
    where: {
      id: id
    }
  })

  return list // 返回数据
}

const createGoodsList = async function (data) {
  await GoodsList.create({
    avatar: data.avatar,
    name: data.name,
    description: data.description,
    price: data.price
  })
  return true
}

const removeGoodsList = async function (id) {
  const result = await GoodsList.destroy({
    where: {
      id
    }
  })
  return result === 1
}

const updateGoodsList = async function (goodsID, id, name, description) {
  const result = await GoodsList.update({
    id,
    name,
    description,
    updated_at: new Date()
  }, {
    where: {
      id: goodsID
    }
  })
  return result[0] === 1
}

export default {
  getGoodsListTotalNumber,
  getGoodsListByPage,
  getGoodsListById,
  createGoodsList,
  removeGoodsList,
  updateGoodsList
}
