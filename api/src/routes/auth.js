const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs"); 

let users = [
    {
        email: "jpvazquez@espol.edu.ec",
        password: "$2y$07$IQGI0XRhgczqKz9sZKkHc.Jzq5vbv1Bc2HLbm1r5.8H8SpuNGiuea"
    },
    {
        email: "josdavil@espol.edu.ec",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq"
    },
    {
        email: "jmluna@espol.edu.ec",
        password: "$2y$07$P4FURPfVXKJMLSORV0rRFuVm9qrVb1/njfHyNYwspWtfdaQ016rFi"
    },
    {
        email: "rodemore@espol.edu.ec",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq"
    },
    {
        email: "alriofri@espol.edu.ec ",
        password: "$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq"
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
        email: 'josdavil@espol.edu.ec',
        address: "Mapasingue Oeste",
        username: 'josdavil',
        name: "Josue Davalos",
        phone: "0912182112"
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





