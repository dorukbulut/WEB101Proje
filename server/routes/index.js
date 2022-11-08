import express from  "express";
import menteeRoutes from './mentee.routes.js'
const router = express.Router();

router.use("/mentee", menteeRoutes)



export default router;