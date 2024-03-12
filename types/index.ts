export type CreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string;
  birthDate?: Date;
  vatNumber?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
};

export type UpdateUserParams = {
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Date;
  vatNumber?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
};

export type CreateCastingInfoParams = {
  userId: string;
  complexion: string;
  height: string;
  weight: string;
  size: string;
  eyeColor: string;
  hairColor: string;
  shoes: string;
  tattoos: string[]; // Assuming this could be a list of tattoo descriptions
  photoPP: string; // Profile Picture
  photoFI: string; // Full Image
  curriculum?: string; // Optional curriculum vitae or resume
  competencies: string[]; // Special skills or competencies
  languages: string[]; // Languages spoken
  equipment: string[]; // Equipment the user can operate or provide
};

export type UpdateCastingInfoParams = {
  userId: string; // To ensure the casting info is linked to the correct user
  complexion?: string;
  height?: string;
  weight?: string;
  size?: string;
  eyeColor?: string;
  hairColor?: string;
  shoes?: string;
  tattoos?: string[]; // This allows updating the list of tattoos
  photoPP?: string; // Allows updating the Profile Picture
  photoFI?: string; // Allows updating the Full Image
  curriculum?: string; // Allows updating the CV or resume
  competencies?: string[]; // Allows updating special skills or competencies
  languages?: string[]; // Allows updating languages spoken
  equipment?: string[]; // Allows updating equipment the user can operate or provide
};

export type CreateVehicleParams = {
  userId: string; // Reference to the owner of the vehicle
  vehicleMake: string; // Manufacturer of the vehicle, e.g., Toyota, Ford
  vehicleModel: string; // Model of the vehicle, e.g., Camry, F-150
  vehicleColor: string; // Color of the vehicle
  productionYear: string; // The year the vehicle was produced
  photos: string[]; // An array of photo URLs for the vehicle
};

export type UpdateVehicleParams = {
  userId?: string; // While typically not updated, included for completeness
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleColor?: string;
  productionYear?: string;
  photos?: string[]; // Allows updating the array of photo URLs
};

export type CreateLocationParams = {
  userId: string; // Reference to the owner of the location
  type: string; // Type of location, e.g., studio, outdoor, residential
  squareMeters: string; // Size of the location in square meters
  description: string; // A brief description of the location
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }; // Detailed address of the location
  amenities: string[]; // List of amenities available at the location
  images: string[]; // An array of URLs for photos of the location
  pricePerDay: string; // Rental price per day for the location
};

export type UpdateLocationParams = {
  userId?: string; // Typically not updated, but included for completeness
  type?: string;
  squareMeters?: string;
  description?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  }; // Allows updating specific parts of the address
  amenities?: string[]; // Allows adding or removing amenities
  images?: string[]; // Allows updating the array of photo URLs
  pricePerDay?: string; // Allows updating the rental price
};

export type CreateAnimalParams = {
  userId: string; // Reference to the owner of the animal
  type: string; // Type of the animal, e.g., Dog, Cat
  breed: string; // Breed of the animal
  name: string; // Name of the animal
  photo: string; // A single URL for a photo of the animal
};

export type UpdateAnimalParams = {
  userId?: string; // Typically not updated, but included for completeness
  type?: string;
  breed?: string;
  name?: string;
  photo?: string; // Allows updating the photo URL of the animal
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}