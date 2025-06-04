const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean}
});

UserSchema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        "Waleed123",{
            expiresIn:"30d",
        });
    } catch (error) {
        console.log(error);
    }
};

const User = new mongoose.model('User',UserSchema);

module.exports = User;