import * as z from "zod"

export const personalInfoFormSchema = z.object({
  firstName: z.string().min(2, "Minimo 2 lettere").max(30, "Massimo 30 lettere"),
  lastName: z.string().min(2, "Minimo 2 lettere").max(30, "Massimo 30 lettere"),
  gender: z.string().min(2, "Seleziona un genere"),
  region: z.string().min(2, "Seleziona una regione di domicilio"),
  vatNumber: z.string().min(16, "Il codice fiscale è di 16 caratteri").max(16, "Il codice fiscale è di 16 caratteri"),
  birthDate: z.date({
    required_error: "Inserisci la tua data di nascita"
  })
})

export const physicalInfoFormSchema = z.object({
  complexion: z.string().min(2, "Seleziona un'etnia"),
  height: z.string().min(1, "Seleziona l'altezza"),
  weight: z.string().min(1, "Seleziona il peso"),
  size: z.string().min(1, "Seleziona una taglia"),
  eyeColor: z.string().min(2, "Seleziona il colore degli occhi"),
  hairColor: z.string().min(2, "Seleziona il colore dei capelli"),
  shoes: z.string().min(20, "Seleziona la taglia di scarpe"),
  tattoos: z.array(z.string()).min(1, "Seleziona almeno un'opzione"),
})

export const SkillsSocialsFormSchema = z.object({
  languages: z.array(z.string()).min(1, "Seleziona almeno un'opzione"),
  skills: z.array(z.string()),
  equipment: z.array(z.string()),
  linkedin: z.string().url("URL non valido").optional(),
  youtube: z.string().url("URL non valido").optional(),
  facebook: z.string().url("URL non valido").optional(),
  instagram: z.string().url("URL non valido").optional(),
  tiktok: z.string().url("URL non valido").optional(),
  twitter: z.string().url("URL non valido").optional(),
})

export const MediaFormSchema = z.object({
  photoPP: z.string(),
  photoFI: z.string(),
})