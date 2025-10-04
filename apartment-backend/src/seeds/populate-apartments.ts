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
      images: [
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571453.jpg",
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571459%20(1).jpg",
      ],
      description:
        "This stunning luxury flat is designed to offer a perfect blend of elegance and functionality. Featuring three spacious bedrooms, a modern open-plan living area, and high-end finishes throughout, it creates a welcoming and stylish atmosphere. Located in the prestigious New Cairo Compound, this unit provides residents with excellent amenities, secure surroundings, and close proximity to schools, shopping centers, and entertainment hubs. Ideal for families or individuals seeking comfort and sophistication, this home ensures a refined lifestyle in one of Cairo’s most desirable locations.",
    },
    {
      unitName: "Cozy Studio",
      unitNumber: "B-205",
      project: "Palm Hills",
      price: 120000,
      rooms: 1,
      location: "Giza, Egypt",
      available: false,
      images: [
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571459.jpg",
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571460.jpg",
      ],
      description:
        "Perfectly designed for singles or young professionals, this cozy studio offers a warm and functional living space in the heart of Palm Hills. With its smart layout, every corner is optimized to maximize comfort while maintaining a modern, minimalist feel. Large windows bring in natural light, creating a bright and inviting atmosphere. Located in a well-connected neighborhood, the studio is surrounded by cafes, gyms, and community facilities, making it an excellent choice for those who want to combine practicality with an active lifestyle.",
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
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-jvdm-1457847%20(1).jpg",
      ],
      description:
        "This modern apartment offers a stylish and practical living experience in the heart of October City Residences. Featuring two comfortable bedrooms, a spacious living room, and a sleek contemporary kitchen, the unit is perfect for small families or couples. The interior design combines clean lines with premium materials, providing a modern aesthetic without sacrificing comfort. With excellent connectivity to nearby schools, malls, and business districts, this home is ideal for those looking to balance work, leisure, and family life in one of Cairo’s fastest-growing areas.",
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
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-jvdm-1457847%20(1).jpg",
      ],
      description:
        "This beautiful family duplex in Madinaty offers the perfect setting for those seeking space, comfort, and community living. Spread across two levels, the unit features four generously sized bedrooms, multiple living areas, and a private dining space that make it ideal for large families. The home is designed with modern finishes, ample storage, and a functional layout that enhances everyday living. Set within the vibrant Madinaty community, residents can enjoy access to lush green spaces, family-friendly facilities, and a safe environment, making it a dream home for raising children and enjoying family life.",
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
        "https://lwloxdhwirdiiwbbdljh.supabase.co/storage/v1/object/public/apartments/pexels-fotoaibe-1571453.jpg",
      ],
      description:
        "The epitome of luxury living, this penthouse suite at Zed Towers offers breathtaking panoramic views of Sheikh Zayed. With five expansive bedrooms, a grand living area, and a state-of-the-art kitchen, it combines elegance and functionality on an extraordinary scale. The interiors are designed with premium finishes, creating a modern yet timeless ambiance. Residents of Zed Towers benefit from exclusive amenities, including private security, landscaped gardens, high-end shopping, and leisure facilities. This penthouse is not just a home—it’s a statement of prestige, providing the ultimate lifestyle experience for those who seek nothing but the best.",
    },
  ]);

  console.log("✅ Apartments seeded!");
  process.exit();
};

seed();
