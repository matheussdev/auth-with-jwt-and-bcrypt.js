import User from "../models/User.js"

class UserController {

    async store(req, res){
        let user = await User.findOne({store_link:req.userLink})
        if (user){
            // console.log(await User.findOne({store_link:req.userLink}).select('+password').password)
            return res.send( await User.findOne({store_link:req.userLink}).select('+password +username'))
        }
    }

}
export default new UserController();