const express = require('express');

const app = express();
app.use(express.json())


app.post("/users", function(req, res){
    if(!req.body.userPassword){
        res.statusCode = 400
    }
   res.json({
    userId: 1
   })
})


module.exports = app