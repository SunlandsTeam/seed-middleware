import wxUser from '../controllers/wx_user'

import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/new', wxUser.getNewWXUserList)

export default router
