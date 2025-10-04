import mongoose from "mongoose";
import dotenv from "dotenv";
import Apartment from "../models/apartment.model";

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  await Apartment.deleteMany();

  await Apartment.insertMany([
    {
      unitName: "Luxury Flat",
      unitNumber: "A-102",
      project: "New Cairo Compound",
      price: 200000,
      rooms: 3,
      location: "New Cairo, Egypt",
      available: true,
      images: ["https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571453.jpg",
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571459%20(1).jpg"
      ]
    },
    {
      unitName: "Cozy Studio",
      unitNumber: "B-205",
      project: "Palm Hills",
      price: 120000,
      rooms: 1,
      location: "Giza, Egypt",
      available: false,
      images: ["https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571459.jpg",
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571460.jpg"
      ]
    },
    {
    unitName: "Modern Apartment",
    unitNumber: "C-310",
    project: "October City Residences",
    price: 180000,
    rooms: 2,
    location: "6th of October, Egypt",
    available: true,
    images: [
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571468.jpg",
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-jvdm-1457847%20(1).jpg"
    ]
  },
  {
    unitName: "Family Duplex",
    unitNumber: "D-415",
    project: "Madinaty",
    price: 350000,
    rooms: 4,
    location: "Madinaty, Cairo, Egypt",
    available: true,
    images: [
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-jvdm-1457847.jpg",
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-jvdm-1457847%20(1).jpg"
    ]
  },
  {
    unitName: "Penthouse Suite",
    unitNumber: "E-501",
    project: "Zed Towers",
    price: 500000,
    rooms: 5,
    location: "Sheikh Zayed, Egypt",
    available: false,
    images: [
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571460.jpg",
      "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571453.jpg"
    ]
  }
  ]);

  console.log("✅ Apartments seeded!");
  process.exit();
};

seed();
