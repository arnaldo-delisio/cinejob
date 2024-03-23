export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Try',
    route: '/try',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const PersonalInfoDefaultValues = {
  firstName: '',
  lastName: '',
  gender: '',
  nationality: '',
  birthDate: undefined,
  vatNumber: '',
  address: {
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
  },
}

export const CastingDefaultValues = {
  complexion: '',
  height: '',
  weight: '',
  size: '',
  eyeColor: '',
  hairColor: '',
  shoes: '',
  tattoos: [],
  skills: [],
  languages: [],
  equipment: [],
}

export const MediaDefaultValues = {
  photoPP: '',
  photoFI: '',
}