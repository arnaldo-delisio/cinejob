
import { Schema, model, models, Document } from "mongoose";

// Define the TypeScript interface for the Vehicle document
export interface IVehicle extends Document {
  userId: Schema.Types.ObjectId; // Reference to the User document
  vehicleMake: string;
  vehicleModel: string;
  vehicleColor: string;
  productionYear: string;
  images: string[];
}

// Define the Mongoose schema for vehicles
const VehicleSchema = new Schema<IVehicle>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  vehicleMake: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  vehicleColor: { type: String, required: true },
  productionYear: { type: String, required: true },
  images: [{ type: String }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const Vehicle = models.Vehicle || model<IVehicle>('Vehicle', VehicleSchema);

export default Vehicle;
