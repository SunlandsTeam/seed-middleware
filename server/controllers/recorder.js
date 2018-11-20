import recorder from '../models/recorder'

/**
 * phone 手机号 string
 * page_size 页面大小 string
 * page_index 页面索引 string
 */
const getRecorderList = async (ctx) => {
  const id = ctx.params.id // 从url获取里id
  const pageIndex = parseInt(ctx.query.page_index) || 1
  const pageSize = parseInt(ctx.query.page_size) || 10
  const phone = ctx.query.phone // 从params获取phone

  let results = []

  if (id) {
    results = await recorder.getRecorderListById(id)
  } else if (phone) {
    results = await recorder.getRecorderListByPhone(phone, pageIndex, pageSize)
  } else {
    results = await recorder.getRecorderListByPage(pageIndex, pageSize)
  }

  ctx.body = {
    success: true,
    ...results, // 将请求的结果放到response的body里返回
    page: pageIndex
  }
}

export default {
  getRecorderList
}
