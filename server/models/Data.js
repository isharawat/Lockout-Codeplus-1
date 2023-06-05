const mongoose =require('mongoose')

//User Schema 
const dataSchema=new mongoose.Schema({
    
    code: {
        type: String,
        unique: true
    },
    questions: {
        type: Array,
    },
    
})

//create Model
const Data= mongoose.model("Data", dataSchema)

module.exports = Data;

