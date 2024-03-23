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
  complexion: String,
  height: String,
  weight: String,
  size: String,
  eyeColor: String,
  hairColor: String,
  shoes: String,
  tattoos: [{ type: String }],
  skills: [{ type: String }],
  languages: [{ type: String }],
  equipment: [{ type: String }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const Casting = models.Casting || model<ICasting>('CastingInfo', CastingSchema);

export default Casting;
