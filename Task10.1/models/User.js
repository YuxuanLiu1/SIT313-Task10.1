const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        task: String,
        title: String,
        description: String,
        date:  String,
        suburb: String,
        budget: String,
        estimate: String,
        datafile: {
            data: Buffer,
            contentType: String
        }
        
    }
)

module.exports  =  mongoose.model("User", userSchema)
