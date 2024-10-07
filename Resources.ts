export interface Admin {
  id: number;
  name: string;
  email: string;
}

export type LoginResource = {
  "access_token": string
  "token_type": "Bearer"
}



export interface Member {
  _id: number;
  name: string;
  telephone: string;
  city: string;
  group: Group;
  tour: Tour;
  tourName?: string;
}
  
export interface Group {
  id: number;
  name: string;
  members_count: number;
}

export interface Tour {
  id: number;
  name: string;
  description: string;
  groups: Group[];
  members_count: number;
  location: string;
  start: string
}

export interface Tours {
  id: number;
  tours: Tour[];
}


export interface Sight {
  short: string;
  name: string;
  lat?: number;
  lon?: number;
  info: string;
  img: string;
  url: string;
  location: string;
}

export interface ProgramUnitType {
  time: string;
  topic: string;
  location?: string;
}

export interface ProgramDay {
  day: string;
  date: string;
  units: ProgramUnitType[]
}
