import { Router } from "express";
import mint from "./mint.js";

const router = Router();
router.use("/mint", mint);
export default router;
