'use server'

import { connectToDatabase } from '@/lib/database';
import Animal from '@/lib/database/models/animal.model'; // Ensure this model is properly defined
import { handleError } from '@/lib/utils';
import { CreateAnimalParams, UpdateAnimalParams } from '@/types'; // Define or adjust these types as needed

export async function createAnimal(animal: CreateAnimalParams) {
  try {
    await connectToDatabase();
    const newAnimal = await Animal.create(animal);
    return JSON.parse(JSON.stringify(newAnimal));
  } catch (error) {
    handleError(error);
  }
}

export async function getAnimalById(animalId: string) {
  try {
    await connectToDatabase();
    const animal = await Animal.findById(animalId);
    if (!animal) throw new Error('Animal not found');
    return JSON.parse(JSON.stringify(animal));
  } catch (error) {
    handleError(error);
  }
}

export async function updateAnimal(animalId: string, animal: UpdateAnimalParams) {
  try {
    await connectToDatabase();
    const updatedAnimal = await Animal.findByIdAndUpdate(animalId, animal, { new: true });
    if (!updatedAnimal) throw new Error('Animal update failed');
    return JSON.parse(JSON.stringify(updatedAnimal));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteAnimal(animalId: string) {
  try {
    await connectToDatabase();
    const deletedAnimal = await Animal.findByIdAndDelete(animalId);
    return deletedAnimal ? JSON.parse(JSON.stringify(deletedAnimal)) : null;
  } catch (error) {
    handleError(error);
  }
}

// In vehicle.actions.ts
export async function deleteAnimalsByUserId(userId: string) {
  try {
    await connectToDatabase();
    await Animal.deleteMany({ userId: userId });
    // Log success or handle as needed
  } catch (error) {
    handleError(error);
  }
}
