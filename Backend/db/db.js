const mongoose = require('mongoose')

function ConnectToDb(){
    mongoose.connect(process.env.DB)
    .then(()=>{
        console.log('connected to DB');
    })
    .catch((err)=>{
        console.error(err)
    })
}

module.exports =  ConnectToDb