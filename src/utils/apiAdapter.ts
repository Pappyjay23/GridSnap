export interface ApiProjectData {
  _id: string
  generalInfo: {
    name: string
    province: string
    coordinates?: {
      latitude: string
      longitude: string
    }
    price: number
    type: string
    rooms: string
    bathrooms: number
    size: number
    living_area?: number
    terrace?: number
    reference: string
  }
  images: Array<{
    original: string
    small: string
    medium: string
    large: string
  }>
}

export interface ProjectData {
  id: string
  title: string
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  status: string
  images: string[]
}

interface AdaptApiResponse {
  currentPage: number;
  projects: ApiProjectData[];
  totalObjects: number;
  totalPages: number;
}

export function adaptApiResponse(apiProjectData:ApiProjectData): ProjectData {
  // Extract and transform data from the API response
  return {
    id: apiProjectData._id || String(Math.random()),
    title: apiProjectData.generalInfo.name || "Untitled Project",
    price: apiProjectData.generalInfo.price || 0,
    address: apiProjectData.generalInfo.province || "No address provided",
    bedrooms: Number.parseInt(apiProjectData.generalInfo.rooms) || 0,
    bathrooms: apiProjectData.generalInfo.bathrooms || 0,
    area: apiProjectData.generalInfo.size || 0,
    status: apiProjectData.generalInfo.type || "NEW BUILDING",
    // Extract medium-sized images from the images array
    images: apiProjectData.images.map((img) => img.medium),
  }
}

// Function to handle the entire API response
export const adaptApiResponseArray = (apiResponse: AdaptApiResponse) => {
  // Check if the response has the expected structure
  if (!apiResponse || !Array.isArray(apiResponse.projects)) {
    return {
      projects: [],
      totalPages: 0,
      totalElements: 0,
    }
  }

  // Transform each project in the array
  const adaptedProjects = apiResponse.projects.map((project: ApiProjectData) => adaptApiResponse(project))

  return {
    projects: adaptedProjects,
    totalPages: apiResponse.totalPages || Math.ceil(adaptedProjects.length / 9),
    totalElements: apiResponse.totalObjects || adaptedProjects.length,
  }
}

