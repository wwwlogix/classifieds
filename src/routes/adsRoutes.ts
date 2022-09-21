import { Router } from 'express';
import { getValidation } from '../middleware/validator';
import { ClassifiedController } from '../controllers/classifiedController';

const classifiedController = new ClassifiedController();
const router = Router();

router.post('/', getValidation(), classifiedController.createAd);

router.get('/', classifiedController.getAds);

router.delete('/:adId', classifiedController.deleteAd);

export default router;
