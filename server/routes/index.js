import express from  "express";
import menteeRoutes from './mentee.routes.js'
import mentorRoutes from "./mentor.routes.js";
const router = express.Router();

router.use("/mentee", menteeRoutes);
router.use("/mentor", mentorRoutes);



export default router;