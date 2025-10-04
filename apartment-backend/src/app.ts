import express from "express";
import cors from "cors";
import apartmentRoutes from "./routes/apartment.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/apartments", apartmentRoutes);

export default app;
