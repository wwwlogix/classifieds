import * as mongoose from 'mongoose';
import { AdModel } from '../interfaces/adModel';

interface AdModelDataModel extends AdModel, mongoose.Document {}

const adDataModelSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'Please enter a value for subject.'],
  },
  body: {
    type: String,
    required: [true, 'Please enter a value for body description.'],
  },
  price: { type: Number },
  email: {
    type: String,
    required: [true, 'Please enter a valid email address.'],
  },
  date: { type: Date, default: Date.now() },
});

const adSchema = mongoose.model<AdModelDataModel>('ads', adDataModelSchema);

export default adSchema;
