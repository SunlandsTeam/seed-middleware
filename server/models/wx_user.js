import db from '../config/db.js' // 引入user的表结构
import moment from 'moment'
import Sequelize from 'Sequelize'

const wxUserModel = '../schema/wx_user.js'
const TodolistDb = db.Todolist // 引入数据库

const wxUser = TodolistDb.import(wxUserModel) // 用sequelize的import方法引入表结构，实例化了User。

const getNewUserList = async function (pageIndex, pageSize) {
  const Op = Sequelize.Op

  let results = []
  const list = await wxUser.findAll({
    where: {
      create_time: {
        [Op.gte]: moment().format('YYYY-MM-DD')
      }
    }
  })

  if (list.length) {
    results = await wxUser.findAll({
      limit: pageSize,
      offset: pageSize * (pageIndex - 1),
      where: {
        create_time: {
          [Op.gte]: moment().format('YYYY-MM-DD')
        }
      }
    })
  }

  return {
    total: list.length,
    results
  }
}

export default {
  getNewUserList
}
