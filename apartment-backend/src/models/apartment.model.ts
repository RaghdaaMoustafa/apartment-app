import { Schema, model, Document } from "mongoose";

export interface IApartment extends Document {
  unitName: string;
  unitNumber: string;
  project: string;
  price: number;
  rooms: number;
  location: string;
  available: boolean;
  images: string[]; // array of image URLs
}

const ApartmentSchema = new Schema<IApartment>(
  {
    unitName: { type: String, required: true },
    unitNumber: { type: String, required: true },
    project: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true }, // default is available
    images: { type: [String], default: [] } // store multiple URLs
  },
  {
    timestamps: true // auto add createdAt & updatedAt
  }
);

export default model<IApartment>("Apartment", ApartmentSchema);
