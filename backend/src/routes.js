const express = require('express');
const routes = express.Router();
const cors = require("cors");
const fs = require('fs');

routes.use(express.json());
routes.use(
  cors({
    origin: "http://localhost:3000",
  })
);


routes.post('/login', (req, res)=>{
  const {email, password} = req.body;
  
  fs.writeFile('exemplo.txt', "usuario= "+req.body.email+"\nsenha= "+req.body.password, (err)=> {
    if(err) throw new err;
    console.log("arquivo salvo com sucesso!!");
  
  });
   res.send(email);
});


module.exports = routes;