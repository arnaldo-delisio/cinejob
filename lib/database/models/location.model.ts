import { Schema, model, models, Document } from "mongoose";

// Define the TypeScript interface for the Location document
export interface ILocation extends Document {
  userId: Schema.Types.ObjectId; // Reference to the User document
  type: string;
  squareMeters: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  amenities: string[];
  images: string[];
  pricePerDay: string;
}

// Define the Mongoose schema for locations
const LocationSchema = new Schema<ILocation>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  squareMeters: {String, required: true},
  description: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    required: true
  },
  amenities: [{ type: String }],
  images: [{ type: String, required: true}],
  pricePerDay: { type: String, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const Location = models.Location || model<ILocation>('Location', LocationSchema);

export default Location;
