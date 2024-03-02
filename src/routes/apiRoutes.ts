import { Router } from "express";
import ImageController from "../controllers/imageController";

const router = Router();

router.get("/generate", ImageController.generateImage);

export default router;
