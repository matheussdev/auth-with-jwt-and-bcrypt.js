import express from "express";
import mongoose from "mongoose";

import routes from "./routes.js";

import bodyParser from "body-parser";
import cors from "cors";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv/config");


class App{
    constructor(){
        this.server = express();

        mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
        {   useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        }).then(() => {
            console.log("Successfully connect to MongoDB.");
        })
        .catch(err => {
            console.error("Connection error: ", err);
            process.exit();
        });;

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(bodyParser.json({limit: '50mb', extended: true}));
        this.server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        this.server.use(cors())

    }

    routes(){
        this.server.use(routes)        
    }
}

const app = new App().server
export default app