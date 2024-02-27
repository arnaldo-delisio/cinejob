import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: String,
  birthDate: Date,
  vatNumber: { type: String, unique: true },
  physicalInfo: {
    complexion: String,
    height: Number,
    weight: Number,
    size: String,
    eyeColor: String,
    hairColor: String,
    shoes: Number,
    tattoos: [String],
  },
  media: {
    photoPP: String,
    photoFI: String,
    curriculum: String,
  },
  skills: {
    competencies: [String],
    languages: [String],
    equipment: [String], // For JSONB data
  },
  socialLinks: {
    linkedin: String,
    facebook: String,
    instagram: String,
    tiktok: String,
    twitter: String,
    youtube: String,
  },
  animals: [{
    type: String,
    photo: String,
  }],
vehicles: [{
    make: String, // E.g., "Toyota"
    model: String, // E.g., "Camry"
    color: String,
    productionYear: Number,
    images: [String],
}],
 locations: [{
    type: String,
    squareMeters: Number,
    description: String,
    address: String,
    city: String,
    country: String,
    zipCode: String,
    amenities: [String],
    images: [String],
    pricePerDay: Number,
  }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = models.User || model('User', UserSchema);

export default User;
