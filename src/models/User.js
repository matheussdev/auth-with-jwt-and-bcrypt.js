import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const UserSchema = new mongoose.Schema({
    store_name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        select:false
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    whatsapp:{
        type:String,
        required:true,
        unique:true,
    },
    store_link:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    adress:{
        type:String,
        required:true
    },
    CEP:{
        type:String,
        required:true
    },
    store_bio:{
        type:String,
    },
    profile_picture:{
        type:String
    },
    products:{
        type:Array
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next()
});

const User = mongoose.model('User', UserSchema);

export default User;