import { Request, Response } from "express";
import Apartment from "../models/apartment.model";

export const listApartments = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { unitName: { $regex: search, $options: "i" } },
          { unitNumber: { $regex: search, $options: "i" } },
          { project: { $regex: search, $options: "i" } }
        ]
      };
    }
    const apartments = await Apartment.find(query);
    res.json(apartments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch apartments" });
  }
};