'use server'

import { connectToDatabase } from '@/lib/database';
import CastingInfo from '@/lib/database/models/casting.model'; // Ensure you have this model defined
import { handleError } from '@/lib/utils';
import { CreateCastingInfoParams, UpdateCastingInfoParams } from '@/types'; // Define these types based on your needs

export async function createCasting(casting: CreateCastingInfoParams) {
  try {
    await connectToDatabase();
    const newCasting = await CastingInfo.create(casting);
    return JSON.parse(JSON.stringify(newCasting));
  } catch (error) {
    handleError(error);
  }
}

export async function getCastingById(castingId: string) {
  try {
    await connectToDatabase();
    const casting = await CastingInfo.findById(castingId);
    if (!casting) throw new Error('Casting information not found');
    return JSON.parse(JSON.stringify(casting));
  } catch (error) {
    handleError(error);
  }
}

export async function updateCasting(castingId: string, casting: UpdateCastingInfoParams) {
  try {
    await connectToDatabase();
    const updatedCasting = await CastingInfo.findByIdAndUpdate(castingId, casting, { new: true });
    if (!updatedCasting) throw new Error('Casting update failed');
    return JSON.parse(JSON.stringify(updatedCasting));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteCasting(castingId: string) {
  try {
    await connectToDatabase();
    const deletedCasting = await CastingInfo.findByIdAndDelete(castingId);
    return deletedCasting ? JSON.parse(JSON.stringify(deletedCasting)) : null;
  } catch (error) {
    handleError(error);
  }
}

// In vehicle.actions.ts
export async function deleteCastingInfoByUserId(userId: string) {
  try {
    await connectToDatabase();
    await CastingInfo.deleteMany({ userId: userId });
    // Log success or handle as needed
  } catch (error) {
    handleError(error);
  }
}
