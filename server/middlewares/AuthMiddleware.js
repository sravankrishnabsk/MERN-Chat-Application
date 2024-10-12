import jwt from 'jsonwebtoken';

// What is the purpose of this function?
// What does it do?
// What does it take in?
// What does it return?
// Answer:
// This function is used to verify the token that is sent in the request.
// It takes in the request, response, and next function.
// It returns the user information if the token is valid.

export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;

    if(!token) {
        return res.status(401).send("Unauthorized");
    }
    jwt.verify(token,process.env.JWT_KEY,async(err,payload)=> {
        if(err) return res.status(403).send("Token is not Valid!");
        req.userId = payload.userId;
        next();
    })
};