import { Request, Response } from "express";
import Apartment from "../models/apartment.model";
import supabase from "../utils/supabase-client";



export const addApartment = async (req: Request, res: Response) => {
  try {
    const { unitName, unitNumber, project, price, rooms, location, available } =
      req.body;
    const file = req.file;
    console.log('body:', req.body);
    

    let imageUrl: string | null = null;

    if (file) {
      const { data, error } = await supabase.storage
        .from("apartments")
        .upload(`apartments/${Date.now()}-${file.originalname}`, file.buffer, {
          contentType: file.mimetype,
        });

      if (error) throw error;

      const { data: publicUrl } = supabase.storage
        .from("apartments")
        .getPublicUrl(data.path);

      imageUrl = publicUrl.publicUrl;
    }

    const apartment = new Apartment({
      unitName,
      unitNumber,
      project,
      price,
      rooms,
      location,
      available,
      images: imageUrl ? [imageUrl] : [],
    });

    await apartment.save();

    res.status(201).json(apartment);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

