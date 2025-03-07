import express from 'express'
import exchangeController from '../controller/exchangeController'

const router = express.Router();


router.get('/'  , exchangeController.renderHome)
router.post('/convert' , exchangeController.convertController)

export default router;
