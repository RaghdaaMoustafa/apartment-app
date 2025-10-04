import { Request, Response } from "express";
import Apartment from "../models/apartment.model";
import supabase from "../utils/supabase-client";

export const addApartment = async (req: Request, res: Response) => {
  try {
    const { unitName, unitNumber, project, price, rooms, location, available,description } =
      req.body;

    const files = req.files as Express.Multer.File[];


    let imageUrls: string[] = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const { data, error } = await supabase.storage
          .from("apartments")
          .upload(`apartments/${Date.now()}-${file.originalname}`, file.buffer, {
            contentType: file.mimetype,
          });

        if (error) throw error;

        const { data: publicUrl } = supabase.storage
          .from("apartments")
          .getPublicUrl(data.path);

        imageUrls.push(publicUrl.publicUrl);
      }
    }

    const apartment = new Apartment({
      unitName,
      unitNumber,
      project,
      price,
      rooms,
      location,
      available,
      description,
      images: imageUrls,
    });

    await apartment.save();

    res.status(201).json(apartment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: (err as Error).message });
  }
};
