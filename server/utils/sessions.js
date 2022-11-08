import jwt from 'jsonwebtoken';
const MAX_AGE = 30 * 60 * 60

export const generateToken = (mentee_id) => {
    
    const token = jwt.sign({id : mentee_id}, process.env.JWT_SECRET, {expiresIn : MAX_AGE})

    return {
        token : token,
        max_age : MAX_AGE
    };
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if(err){
            return false
        }

        else {
            // if (mentee_id !== decodedToken.id){
            //     return false
            // }

            // else {
            //     return true
            // }
            return true
        }
    })
} 


export default {generateToken, verifyToken}