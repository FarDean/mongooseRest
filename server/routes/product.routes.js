import express from 'express'
import {create,read,list,update,remove,productById} from './../controllers/product.controllers'
const router = express.Router()

router.route('/api/products')
    .get(list)
    .post(create)

router.route('/api/products/:productId')
    .get(read)
    .put(update)
    .delete(remove)

router.param('productId',productById)

export default router