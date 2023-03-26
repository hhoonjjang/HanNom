import { Router } from "express";
import mint from "./mint.js";
import user from "./user.js";

const router = Router();
router.use("/mint", mint);
router.use("/user", user);
export default router;
