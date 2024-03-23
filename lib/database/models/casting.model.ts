import { Schema, model, models, Document } from "mongoose";

// Define the TypeScript interface for the CastingInfo document
export interface ICasting extends Document {
  proprietary: Schema.Types.ObjectId; // Reference to the User document
  complexion: string;
  height: string;
  weight: string;
  size: string;
  eyeColor: string;
  hairColor: string;
  shoes: string;
  tattoos: string[];
  skills: string[];
  languages: string[];
  equipment: string[];
}

// Define the Mongoose schema for casting information
const CastingSchema = new Schema<ICasting>({
  proprietary: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  complexion: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  size: { type: String, required: true },
  eyeColor: { type: String, required: true },
  hairColor: { type: String, required: true },
  shoes: { type: String, required: true },
  tattoos: [{ type: String, required: true }],
  skills: [{ type: String }],
  languages: [{ type: String, required: true }],
  equipment: [{ type: String }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const Casting = models.Casting || model<ICasting>('CastingInfo', CastingSchema);

export default Casting;
