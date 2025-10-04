import multer from "multer";

// Use memory storage because we’ll upload to Supabase (not local disk)
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
