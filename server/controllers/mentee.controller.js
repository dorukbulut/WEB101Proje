import Mentee from "../models/mentee.model.js"
import {hashPassword, compareHashedPassword} from '../utils/hashPassword.js'
import { generateToken, verifyToken } from "../utils/sessions.js"
import Models from "../models/index.js";

export const loginMentee = (req, res) => {

    const user = {...req.body}
    Mentee
    .findOne({
        where : {
            mentee_email : user.email
        }
    })

    .then(async mentee => {
        if(mentee) {
            mentee = mentee.dataValues;
            const valid = await compareHashedPassword(user.password, mentee.mentee_password);

            if(valid) {
                const token_info = generateToken(mentee.mentee_id);

                res.cookie("jwt", token_info.token, {httpOnly: true, maxAge : token_info.max_age * 1000 });

                res.status(201).json({message : "Mentee successfully logged In", user: mentee.mentee_id});
            }

            else {
                res.status(400).json({message : "Loggin not successfull"})
            }
        }

        else {
            res.status(400).json({message :"Couldn't find any user"})
        }
    })

    .catch(err => res.status(400).json({
        message: "An error occurred",
        err: err.message,
      }))
}

export const registerMentee = async (req, res) => {
    const new_mentee = {...req.body};

    Mentee
    .create({
        mentee_name : new_mentee.name,
        mentee_surname : new_mentee.surname,
        mentee_email : new_mentee.email,
        mentee_phone : new_mentee.phone,
        mentee_password : await hashPassword(new_mentee.password)
    })

    .then(retval => res.sendStatus(200))
    .catch(err => res.sendStatus(401));
}


export const verifyMentee = (req, res) => {
    const token = req.body.jwt ? req.body.jwt : req.cookies.jwt;
    
    if (token) {
        const auth = verifyToken(token)
        if(auth.allowed) {
            res.status(201).json(auth.user);
        }

        else {
            res.status(401).json({ message: "Not authorized, token not available" })
        }
        
    }

    else {
        return res.status(401).json({ message: "Not authorized, token not available" })
    }


}

export const authMentee = (req, res) => {
    
}

export const logoutMentee = (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" });

    res.status(201).json({message : "Logout successfuly"});
}
export const getMentors = async (req, res) => {
    const mentee = {...req.body}
    try {
        const info = await Models.Mentee.findOne({
            where : {
                mentee_id : mentee.mentee_id
            },

            include : [Models.Mentor]
        })

        res.status(200).json(info);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: "An error occured !", error : err});
    }
}
export const getTasks = async (req, res) => {
    const mentee = {...req.body};

    try {
        const tasks = await Models.Task.findAll({
            where : {
                MenteeID : mentee.mentee_id
            },
            include : [Models.Mentee, Models.Mentor]
        })

        res.status(200).json(tasks);
    }

    catch(err) {
        console.log(err);
        res.status(500).json({message : err});
    }
}

export const setLink = async (req, res) => {
    const item = {...req.body};

    try {
        const retval = await Models.Task.update({
            taskAnswerLink : item.AnswerLink,
            taskStatus : 1
        }, {
            where : {
                taskId : item.taskId
            }
        })

        
        res.status(200).json({message : "Update Task Submission !"});
    }

    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

export const getEvents = async (req, res) => {
    try {
        const events = await Models.Event.findAll({
            include : [Models.Enrollement]
        })

        res.status(200).json(events);
    }

    catch(err) {
        console.log(err);
        res.status(500).json({message : err});
    }


}

export const Enroll = async (req, res) => {
    const item = {...req.body};
    console.log(item);

    try {
        const retval = await Models.Enrollement.create({...item})

        res.status(200).json({message : "Enrollement Successfull Submission !"});
    }

    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

export default {Enroll,getEvents,setLink,loginMentee, registerMentee, verifyMentee, authMentee, logoutMentee, getMentors, getTasks};