const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs"); 

let users = [
    {
        email: "jedavalo@espol.edu.ec",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq",
        id: 2,
        username: 'jedavalo',
        name: "Josue Dávalos",
        phone: "0995091644",
        address: "Mapasingue"
    },
    {
        email: "jmluna@espol.edu.ec",
        password: "$2y$07$P4FURPfVXKJMLSORV0rRFuVm9qrVb1/njfHyNYwspWtfdaQ016rFi",
        id: 3,
        username: 'jmluna',
        name: "Jocellyn Luna",
        phone: "0995091644",
        address: "Guasmo sur"
    },
    {
        email: "rodemore@espol.edu.ec",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq",
        id: 1,
        username: 'rodemore',
        name: "Robert Moreno",
        phone: "0995091644",
        address: "Prosperina Coop. 31 Agosto"
    },
    {
        email: "alriofri@espol.edu.ec ",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq",
        id: 4,
        username: 'alriofri',
        name: "Adriana Riofrío",
        phone: "0995091644",
        address: "Prosperina Coop. 31 Agosto"
    },

]

let getUser = (email)=>{
    let users_found = users.find(function(element, index) {
        if(element.email == email)
            return true;
    });
    if (users_found){
        return users_found
    }
    throw new Error({'message':'Invalid email or password'});
}

router.post('/', async (req, res, next) => {
    let data = {
        id: 1,
        email: 'rodemore@espol.edu.ec',
        username: 'rodemore',
        name: "Robert Moreno",
        phone: "0995091644",
        address: "Prosperina Coop. 31 Agosto"
    }
    try {    
        let user = getUser(req.body.email)
        if(bcrypt.compareSync(req.body.password,user.password)){
            let token = jwt.sign( {email: user.email}, "SECRETTOKEN", {expiresIn: '24h'});
            return res.json({auth:true, token:token, user:data});
            
        }
        throw new Error({'message':'Invalid email or password'});
    } catch (err) {
        return res.status(404).json({"auth": false, "message": "Contraseña o correo incorrectos"});
    }
});


module.exports = router;





