import { Request, Response } from "express";
import Apartment from "../models/apartment.model";

export const getApartment = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) return res.status(404).json({ error: "Not found" });
    res.json(apartment);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch apartment" });
  }
};