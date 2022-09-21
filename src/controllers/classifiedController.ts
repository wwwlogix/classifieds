import { validationResult } from 'express-validator';
import HttpError from '../middleware/httpError';
import { AdModel } from '../models/interfaces/adModel';
import Ad from '../models/schema/adSchema';

export class ClassifiedController {
  createAd = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new HttpError('Invalid data.', 422));
    }

    const { subject, body, price, email }: AdModel = req.body;
    const createdAd = new Ad({
      subject,
      body,
      price,
      email,
    });

    try {
      await createdAd.save();
    } catch (err) {
      const error = new HttpError('Ad Creation failed, please try again.', 500);
      return next(error);
    }

    await res.status(201).json({ ad: createdAd });
  };

  getAds = async (req, res) => {
    const sort = req.query.sort ? req.query.sort : '';
    const ads = await Ad.find().sort(sort).exec();
    ads.length
      ? res.status(200).json(ads)
      : res.status(200).json('There are no Ads to display.');
  };

  deleteAd = async (req, res, next) => {
    const adId = req.params.adId;

    let ad;
    try {
      ad = await Ad.findById(adId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, Please check the id of the ad.',
        500,
      );
      return next(error);
    }

    try {
      if (ad) {
        await ad.remove();
      }
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete the ad.',
        500,
      );
      return next(error);
    }

    await res.status(200).json({ message: 'Deleted ad.' });
  };
}
