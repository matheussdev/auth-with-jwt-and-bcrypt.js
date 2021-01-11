import User from '../models/User.js'

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const authConfig = require("../config/auth.json")

//generate token
function generateToken(params = {}){
    return  jwt.sign(params, authConfig.secret, {
        expiresIn:86400,
    })
}


class AuthController{

    async store(req, res){
        const {username, store_name, store_link, whatsapp} = req.body
        try {
        if(await User.findOne({ username })){
            return res.status(400).send({ error: 'User already exists' });
        }
        if(await User.findOne({ store_name })){
            return res.status(400).send({ error: 'store name already exists' });
        }
        if(await User.findOne({ store_link })){
            return res.status(400).send({ error: 'Store Link already exists' });
        }
        if(await User.findOne({ whatsapp })){
            return res.status(400).send({ error: 'whatsapp already exists' });
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({id: user.id, link:user.store_link}) });

        } catch (err){
            return res.status(400).send({error:"registration failed"+err});
        }
    };

    async show(req, res){
        const {password, username} = req.body
        const user = await User.findOne({ username }).select('+password +username');
        if(!user){
            return res.status(404).send({error:"User not found"});
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(401).send({erro:"Invalid password"});
        }
        user.password = undefined;

        res.send({user , token: generateToken({id: user.id, link:user.store_link})});
    }

    async index(req, res){
        const user = await User.find();
        return res.send({user});
    }


}

export default new AuthController();