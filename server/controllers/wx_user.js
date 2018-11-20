import wxUser from '../models/wx_user'

const getNewWXUserList = async (ctx) => {
  const pageIndex = parseInt(ctx.query.page_index) || 1
  const pageSize = parseInt(ctx.query.page_size) || 10
  const results = await wxUser.getNewUserList(pageIndex, pageSize)

  ctx.body = {
    success: true,
    ...results,
    page: pageIndex
  }
}

export default {
  getNewWXUserList
}
