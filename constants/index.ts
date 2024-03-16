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

export const personalInfoDefaultValues = {
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

export const physicalInfoDefaultValues = {
  complexion: '',
  height: '',
  weight: '',
  size: '',
  eyeColor: '',
  hairColor: '',
  shoes: '',
  tattoos: [],
}

export const skillsSocialsDefaultValues = {
  skills: [],
  languages: [],
  equipment: [],
}

export const mediaDefaultValues = {
  photoPP: '',
  photoFI: '',
}