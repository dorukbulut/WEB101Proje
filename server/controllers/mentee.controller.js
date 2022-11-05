import Mentee from "../models/mentee.model.js"
import {hashPassword, compareHashedPassword} from '../utils/hashPassword.js'
import { generateToken, verifyToken } from "../utils/sessions.js"

export const loginMentee = (req, res) => {

    const user = {...req.body}

    Mentee
    .findOne({
        where : {
            mentee_email : user.email
        }
    })

    .then(async mentee => {
        mentee = mentee.dataValues;
        if(mentee) {
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


export const verifyMentee = (req, res, next) => {
    
    const token = req.cookies.jwt;
    //const mentee_id = req.body.user
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

export const authMentee = (req, res) => {
    res.status(201).json({message: "User successfully verified"})
}

export const logoutMentee = (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" });

    res.status(201).json({message : "Logout successfuly"});
}

export default {loginMentee, registerMentee, verifyMentee, authMentee, logoutMentee};