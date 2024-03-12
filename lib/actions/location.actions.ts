'use server'

import { connectToDatabase } from '@/lib/database';
import Location from '@/lib/database/models/location.model'; // Ensure you have this model defined
import { handleError } from '@/lib/utils';
import { CreateLocationParams, UpdateLocationParams } from '@/types'; // Define these types according to your needs

export async function createLocation(location: CreateLocationParams) {
  try {
    await connectToDatabase();
    const newLocation = await Location.create(location);
    return JSON.parse(JSON.stringify(newLocation));
  } catch (error) {
    handleError(error);
  }
}

export async function getLocationById(locationId: string) {
  try {
    await connectToDatabase();
    const location = await Location.findById(locationId);
    if (!location) throw new Error('Location not found');
    return JSON.parse(JSON.stringify(location));
  } catch (error) {
    handleError(error);
  }
}

export async function updateLocation(locationId: string, location: UpdateLocationParams) {
  try {
    await connectToDatabase();
    const updatedLocation = await Location.findByIdAndUpdate(locationId, location, { new: true });
    if (!updatedLocation) throw new Error('Location update failed');
    return JSON.parse(JSON.stringify(updatedLocation));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteLocation(locationId: string) {
  try {
    await connectToDatabase();
    const deletedLocation = await Location.findByIdAndDelete(locationId);
    return deletedLocation ? JSON.parse(JSON.stringify(deletedLocation)) : null;
  } catch (error) {
    handleError(error);
  }
}

// In vehicle.actions.ts
export async function deleteLocationsByUserId(userId: string) {
  try {
    await connectToDatabase();
    await Location.deleteMany({ userId: userId });
    // Log success or handle as needed
  } catch (error) {
    handleError(error);
  }
}
