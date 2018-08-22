import api from '../controllers/todolist.js'
import goods from '../controllers/goods'

import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/todolist/:id', api.getTodolist)
router.post('/todolist', api.createTodolist)
router.delete('/todolist/:userId/:id', api.removeTodolist)
router.put('/todolist/:userId/:id/:status', api.updateTodolist)

router.get('/goods', goods.getGoodsList)
router.get('/goods/:id', goods.getGoodsList)
router.post('/goods', goods.createGoodsList)
router.delete('/goods/:id', goods.removeGoodsList)
router.put('/goods/:goodsID', goods.updateGoodsList)

export default router
