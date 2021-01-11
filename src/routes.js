import {Router} from "express";
import AuthController from "./controllers/AuthController.js";
import UserController from "./controllers/UserController.js";
import AuthMiddleware from "./middlewares/auth.js";

const routes = new Router();

// landing page
routes.get('/', (req, res) =>{
    return res.json({message:'server is running'})
})

//criar loja
routes.post('/register', AuthController.store);
//logar na loja
routes.post('/login', AuthController.show);
//listar todas as lojas
routes.get('/lojas', AuthController.index)

//iniciar sessão logado
routes.get('/admin', AuthMiddleware, UserController.store);



export default routes