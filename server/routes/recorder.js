import recorder from '../controllers/recorder'

import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/recorder', recorder.getRecorderList)
router.get('/recorder/:id', recorder.getRecorderList)

export default router
