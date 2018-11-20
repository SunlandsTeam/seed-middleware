import db from '../config/db.js'
import Sequelize from 'Sequelize'

const recorderModel = '../schema/recorder'
const TodoListDb = db.Todolist

const RecorderList = TodoListDb.import(recorderModel)

const getRecorderListById = async function (id) {
  const Op = Sequelize.Op
  const results = await RecorderList.findAll({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  return {
    total: results.length,
    results
  }
}

const getRecorderListByPhone = async function (phone, pageIndex, pageSize) {
  const Op = Sequelize.Op
  pageIndex = pageIndex || 1
  pageSize = pageSize || 10
  let results = []
  const list = await RecorderList.findAll({
    where: {
      data: {
        [Op.like]: `%${phone}%`
      },
      report_result: {
        [Op.ne]: null
      }
    }
  })

  if (list.length) {
    results = await RecorderList.findAll({
      limit: pageSize,
      offset: pageSize * (pageIndex - 1),
      where: {
        data: {
          [Op.like]: `%${phone}%`
        },
        report_result: {
          [Op.ne]: null
        }
      }
    })
  }

  return {
    total: list.length,
    results
  }
}

const getRecorderListByPage = async function (pageIndex, pageSize) {
  pageIndex = pageIndex || 1
  pageSize = pageSize || 10
  let results = []
  const list = await RecorderList.findAll()

  if (list.length) {
    results = await RecorderList.findAll({
      limit: pageSize,
      offset: pageSize * (pageIndex - 1)
    })
  }

  return {
    total: list.length,
    results
  }
}

export default {
  getRecorderListById,
  getRecorderListByPhone,
  getRecorderListByPage
}
