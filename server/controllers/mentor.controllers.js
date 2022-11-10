import {hashPassword, compareHashedPassword} from '../utils/hashPassword.js'
import { generateToken, verifyToken } from "../utils/sessions.js"
import Mentor from "../models/mentor.model.js";


export const loginMentor =  (req, res) => {
    const user = {...req.body};
    Mentor
    .findOne({
        where : {
            mentor_email : user.email,
        }
    })

    .then(async mentor => {
        if (mentor) {
            mentor = mentor.dataValues;
            const valid = await compareHashedPassword(user.password, mentor.mentor_password);
            if(valid) {
                const token_info = generateToken(mentor.mentor_id);

                res.cookie("jwt", token_info.token, {httpOnly: true, maxAge : token_info.max_age * 1000 });

                res.status(201).json({message : "Mentor successfully logged In", user: mentor.mentor_id});
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

export const registerMentor = async(req, res) => {
    const new_mentor = {...req.body};
    Mentor
    .create({
        mentor_name : new_mentor.name,
        mentor_surname : new_mentor.surname,
        mentor_email : new_mentor.email,
        mentor_phone : new_mentor.phone,
        mentor_password : await hashPassword(new_mentor.password),
        mentor_expertise : new_mentor.expertise,
        mentor_company : new_mentor.company,

    })

    .then(retval => res.sendStatus(200))
    .catch(err => res.sendStatus(401));
}

export const verifyMentor = (req, res, next) => {
    const token = req.body.jwt ? req.body.jwt : req.cookies.jwt;
    console.log(token)
    
    if (token) {
        const auth = verifyToken(token)
        if(auth) {
            next()
        }

        else {
            res.status(401).json({ message: "Not authorized, token not available" })
        }
        
    }

    else {
        return res.status(401).json({ message: "Not authorized, token not available" })
    }
}

export const authMentor = (req, res) => {
    res.status(201).json({message: "User successfully verified"})
}

export const logoutMentor = (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" });

    res.status(201).json({message : "Logout successfuly"});
}

export default {loginMentor, registerMentor, verifyMentor, authMentor, logoutMentor};