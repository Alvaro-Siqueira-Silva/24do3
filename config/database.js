const mongoose = require('mongoose')
const conexao = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://UserAdmin:1234567890@ac1tri.aganv.mongodb.net/emia2tri1')
}

module.exports = conexao