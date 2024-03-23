'use server'

import { connectToDatabase } from '@/lib/database'
import { handleError } from '@/lib/utils'
import { CreateCastingParams, UpdateCastingParams } from '@/types'
import Casting from '../database/models/casting.model'

export async function updateCasting(userId: string, casting: UpdateCastingParams) {
  try {
    await connectToDatabase();
    const userCasting = await Casting.findOneAndUpdate({ proprietary: userId }, casting, { upsert: true, new: true });
    return JSON.parse(JSON.stringify(userCasting));
  } catch (error) {
    handleError(error);
  }
}

// In casting.actions.js or wherever you manage casting-related logic
export async function createCasting(userId: string, casting: CreateCastingParams) {
  try {
    await connectToDatabase();
    const newCasting = new Casting({
      ...casting,
      proprietary: userId, // Ensure this matches your schema's field for linking to the user
    });
    await newCasting.save();
    return JSON.parse(JSON.stringify(newCasting));
  } catch (error) {
    handleError(error);
  }
}
