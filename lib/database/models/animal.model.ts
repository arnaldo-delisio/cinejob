import { Schema, model, models, Document } from "mongoose";

// Update the TypeScript interface for a single photo
export interface IAnimal extends Document {
  userId: Schema.Types.ObjectId; // Reference to the User document
  type: string; // e.g., "Dog", "Cat"
  breed: string; // Breed of the animal
  name: string; // Name of the animal
  photo: string; // Single photo of the animal
}

// Update the Mongoose schema for a single photo
const AnimalSchema = new Schema<IAnimal>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  breed: { type: String, required: true }, // Include breed as a required field
  name: { type: String, required: true },
  photo: { type: String, required: true }, // Store a single photo URL
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const Animal = models.Animal || model<IAnimal>('Animal', AnimalSchema);

export default Animal;
