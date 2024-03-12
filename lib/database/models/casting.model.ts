import { Schema, model, models, Document } from "mongoose";

// Define the TypeScript interface for the CastingInfo document
export interface ICastingInfo extends Document {
  userId: Schema.Types.ObjectId; // Reference to the User document
  complexion: string;
  height: string;
  weight: string;
  size: string;
  eyeColor: string;
  hairColor: string;
  shoes: string;
  tattoos: string[];
  photoPP: string; // Profile Picture
  photoFI: string; // Full Image
  curriculum: string; // Curriculum Vitae or Resume
  competencies: string[];
  languages: string[];
  equipment: string[];
}

// Define the Mongoose schema for casting information
const CastingInfoSchema = new Schema<ICastingInfo>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  complexion: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  size: { type: String, required: true },
  eyeColor: { type: String, required: true },
  hairColor: { type: String, required: true },
  shoes: { type: String, required: true },
  tattoos: [{ type: String, required: true }],
  photoPP: { type: String, required: true },
  photoFI: { type: String, required: true },
  curriculum: { type: String, required: false },
  competencies: [{ type: String }],
  languages: [{ type: String }],
  equipment: [{ type: String }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Create the model or retrieve it if it already exists to prevent recompilation issues
const CastingInfo = models.CastingInfo || model<ICastingInfo>('CastingInfo', CastingInfoSchema);

export default CastingInfo;
