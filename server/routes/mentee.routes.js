import express from 'express';
const router = express.Router();
import menteeController from '../controllers/mentee.controller.js'


//Auth Routes
router.post("/login", menteeController.loginMentee);
router.post("/register", menteeController.registerMentee);
router.post("/verify", menteeController.verifyMentee, menteeController.authMentee);
router.get("/logout", menteeController.verifyMentee, menteeController.logoutMentee);


export default router;