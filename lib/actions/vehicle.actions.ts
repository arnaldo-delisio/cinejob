'use server'

import { connectToDatabase } from '@/lib/database';
import Vehicle from '@/lib/database/models/vehicle.model'; // Make sure to define this model
import { handleError } from '@/lib/utils';
import { CreateVehicleParams, UpdateVehicleParams } from '@/types'; // Define these types according to your needs

export async function createVehicle(vehicle: CreateVehicleParams) {
  try {
    await connectToDatabase();
    const newVehicle = await Vehicle.create(vehicle);
    return JSON.parse(JSON.stringify(newVehicle));
  } catch (error) {
    handleError(error);
  }
}

export async function getVehicleById(vehicleId: string) {
  try {
    await connectToDatabase();
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) throw new Error('Vehicle not found');
    return JSON.parse(JSON.stringify(vehicle));
  } catch (error) {
    handleError(error);
  }
}

export async function updateVehicle(vehicleId: string, vehicle: UpdateVehicleParams) {
  try {
    await connectToDatabase();
    const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, vehicle, { new: true });
    if (!updatedVehicle) throw new Error('Vehicle update failed');
    return JSON.parse(JSON.stringify(updatedVehicle));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteVehicle(vehicleId: string) {
  try {
    await connectToDatabase();
    const deletedVehicle = await Vehicle.findByIdAndDelete(vehicleId);
    return deletedVehicle ? JSON.parse(JSON.stringify(deletedVehicle)) : null;
  } catch (error) {
    handleError(error);
  }
}

// In vehicle.actions.ts
export async function deleteVehiclesByUserId(userId: string) {
  try {
    await connectToDatabase();
    await Vehicle.deleteMany({ userId: userId });
    // Log success or handle as needed
  } catch (error) {
    handleError(error);
  }
}
