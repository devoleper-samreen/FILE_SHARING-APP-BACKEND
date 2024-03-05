import express from "express"
import { uploadImage } from "./controller.js";
import upload from "./upload.js";
import { downloadImage } from "./controller.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);


router.get("/file/:fileId", downloadImage)

export default router;