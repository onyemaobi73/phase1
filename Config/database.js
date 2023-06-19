const mongoose = require("mongoose")

const set07db = "mongodb://0.0.0.0:27017/set07database"

const database = async() => {
    try {
        const dbconnect = await mongoose.connect(set07db)
        console.log("")
        console.log(`connected`);
    } catch (error) {
        console.log("An error occured in connecting database")
    }
}

module.exports = database()
