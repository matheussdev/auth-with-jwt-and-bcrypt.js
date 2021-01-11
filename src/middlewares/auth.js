import jwt from "jsonwebtoken";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const authConfig = require("../config/auth.json")


export default (req, res, next)=> {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: 'No token provided!'});    
    }
    //Bearer cnajdnasndsalndlkanb hxbnalknlk
    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send({error: 'Token error'});
    };

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token malformatted'})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({err:err})    
        }
        // req.userId = decoded.id;
        req.userLink = decoded.link;
        return next();
    })
}