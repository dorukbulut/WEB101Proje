import express from 'express';
const router = express.Router();
import mentorControllers from "../controllers/mentor.controllers.js";


//Auth Routes
router.post("/login", mentorControllers.loginMentor);
router.post("/register",mentorControllers.registerMentor);
router.post("/verify",mentorControllers.verifyMentor, mentorControllers.authMentor);
router.post("/logout",mentorControllers.logoutMentor);
router.post("/set-mentee", mentorControllers.setMentee);
router.post("/set-task", mentorControllers.setTask);
router.post("/set-status", mentorControllers.setStatus);
router.post("/set-event", mentorControllers.setEvent);
export default router;