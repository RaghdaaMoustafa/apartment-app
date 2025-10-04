export type TApartment={
  _id: string;
  unitName: string;
  unitNumber: string;
  project: string;
  rooms:number,
  location:string,
  available:boolean,
  description:string,
  price: number;
  images?: string[];
}