// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add new fields here
  gender?: string;
  birthDate?: Date;
  vatNumber?: string;
  physicalInfo?: {
    complexion?: string;
    height?: number;
    weight?: number;
    size?: string;
    eyeColor?: string;
    hairColor?: string;
    shoes?: number;
    tattoos?: string[];
  };
  media?: {
    photoPP?: string;
    photoFI?: string;
    curriculum?: string;
  };
  skills?: {
    competencies?: string[];
    languages?: string[];
    equipment?: string[];
  };
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    youtube?: string;
  };
  animals?: Array<{
    type: string;
    photo: string;
  }>;
  vehicles?: Array<{
    make: string;
    model: string;
    color: string;
    productionYear: number;
    images?: string[];
  }>;
  locations?: Array<{
    type: string;
    squareMeters: number;
    description: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
    amenities?: string[];
    images?: string[];
    pricePerDay?: number;
  }>;
};

export type UpdateUserParams = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Date;
  vatNumber?: string;
  physicalInfo?: {
    complexion?: string;
    height?: number;
    weight?: number;
    size?: string;
    eyeColor?: string;
    hairColor?: string;
    shoes?: number;
    tattoos?: string[];
  };
  media?: {
    photoPP?: string;
    photoFI?: string;
    curriculum?: string;
  };
  skills?: {
    competencies?: string[];
    languages?: string[];
    equipment?: string[];
  };
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    youtube?: string;
  };
  animals?: Array<{
    type: string;
    photo: string;
  }>;
  vehicles?: Array<{
    make: string;
    model: string;
    color: string;
    productionYear: number;
    images?: string[];
  }>;
  locations?: Array<{
    type: string;
    squareMeters: number;
    description: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
    amenities?: string[];
    images?: string[];
    pricePerDay?: number;
  }>;
  // Consider which additional fields might be updated
};


// ====== EVENT PARAMS
export type CreateEventParams = {
  userId: string
  event: {
    title: string
    description: string
    location: string
    imageUrl: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    price: string
    isFree: boolean
    url: string
  }
  path: string
}

export type UpdateEventParams = {
  userId: string
  event: {
    _id: string
    title: string
    imageUrl: string
    description: string
    location: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    price: string
    isFree: boolean
    url: string
  }
  path: string
}

export type DeleteEventParams = {
  eventId: string
  path: string
}

export type GetAllEventsParams = {
  query: string
  category: string
  limit: number
  page: number
}

export type GetEventsByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedEventsByCategoryParams = {
  categoryId: string
  eventId: string
  limit?: number
  page: number | string
}

export type Event = {
  _id: string
  title: string
  description: string
  price: string
  isFree: boolean
  imageUrl: string
  location: string
  startDateTime: Date
  endDateTime: Date
  url: string
  organizer: {
    _id: string
    firstName: string
    lastName: string
  }
  category: {
    _id: string
    name: string
  }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  eventTitle: string
  eventId: string
  price: string
  isFree: boolean
  buyerId: string
}

export type CreateOrderParams = {
  stripeId: string
  eventId: string
  buyerId: string
  totalAmount: string
  createdAt: Date
}

export type GetOrdersByEventParams = {
  eventId: string
  searchString: string
}

export type GetOrdersByUserParams = {
  userId: string | null
  limit?: number
  page: string | number | null
}

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