const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type:String
    },
    password: {
        type: String
    },
    email: {
        type:String
    },
    phoneNum: {
        type: Number
    },
    isFemale: {
        type: Boolean
    }
})

const UserModel = mongoose.model(
    "Student", UserSchema
)

module.exports = UserModel