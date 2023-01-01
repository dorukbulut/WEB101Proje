import express from 'express';
const router = express.Router();
import menteeController from '../controllers/mentee.controller.js'


//Auth Routes
router.post("/login", menteeController.loginMentee);
router.post("/register", menteeController.registerMentee);
router.post("/verify", menteeController.verifyMentee);
router.post("/logout", menteeController.verifyMentee, menteeController.logoutMentee);
router.post("/get-mentors", menteeController.getMentors);
router.post("/get-tasks", menteeController.getTasks);
router.get("/get-events", menteeController.getEvents);
router.post("/set-link", menteeController.setLink);
router.post("/enroll", menteeController.Enroll);


export default router;