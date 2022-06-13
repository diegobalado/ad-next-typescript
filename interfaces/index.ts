// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export * from "./event";
type Ad = {
  name: string;
  href: string;
}

export type Event = {
  created_at: string;	
  date: string;	
  name: string;	
  id: string;	
  ads: Ad[];	
  search: boolean;	
  price: number;
  promo: number;
  pictures: string[];
}
