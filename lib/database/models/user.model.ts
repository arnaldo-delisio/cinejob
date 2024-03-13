import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Date;
  vatNumber?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  // References to other entities (if necessary based on your app's requirements)
  vehicles?: Schema.Types.ObjectId[];
  locations?: Schema.Types.ObjectId[];
  animals?: Schema.Types.ObjectId[];
  castingInfos?: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  gender: String,
  birthDate: Date,
  vatNumber: { type: String, unique: true },
  address: {
    street: String,
    city: String,
    region: String,
    postalCode: String,
    country: String,
  },
  vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }],
  locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
  animals: [{ type: Schema.Types.ObjectId, ref: 'Animal' }],
  castingInfos: [{ type: Schema.Types.ObjectId, ref: 'CastingInfo' }],
}, { timestamps: true }); // Mongoose manages createdAt and updatedAt fields automatically

const User = models.User || model('User', UserSchema);

export default User;
