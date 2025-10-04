import { Router } from "express";
import { listApartments } from "../controllers/list-apartments";
import { getApartment } from "../controllers/get-apartment";
import { addApartment } from "../controllers/add-apartment";
import upload from "../middleware/upload";

const router = Router();

router.get("/", listApartments);
router.get("/:id", getApartment);
router.post("/", upload.single("image"),addApartment);

export default router;
