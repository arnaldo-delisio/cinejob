import * as z from "zod"

export const personalInfoFormSchema = z.object({
  firstName: z.string().min(2, "Minimo 2 lettere").max(30, "Massimo 30 lettere"),
  lastName: z.string().min(2, "Minimo 2 lettere").max(30, "Massimo 30 lettere"),
  gender: z.string().min(2, "Seleziona un genere"),
  nationality: z.string().min(2, "Seleziona una nazionalità"),
  vatNumber: z.string().min(16, "Il codice fiscale è di 16 caratteri").max(16, "Il codice fiscale è di 16 caratteri"),
  birthDate: z.preprocess((arg) => {
    if (typeof arg === 'string') {
      // Attempt to parse string as Date
      const parsedDate = new Date(arg);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate; // Return Date object if valid
      }
    }
    return arg; // Return original argument if not a string or cannot be parsed as Date
  }, z.date()),
  street: z.string().nonempty("Inserisci il tuo indirizzo di residenza"),
  address:z.object({
    street: z.string().nonempty("Inserisci il tuo indirizzo di residenza"),
    city: z.string().min(1, "Inserisci una città").max(30, "Massimo 30 caratteri"),
    region: z.string().min(2, "Seleziona una regione di domicilio"),
    postalCode: z.string().regex(/^\d+$/, "Il CAP è formato soltanto da numeri").min(5, "Il CAP è di 5 numeri").max(5, "Il CAP è di 5 numeri"),
    country: z.string().optional()
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