const mongoose = require("mongoose");
const Usuario = mongoose.model("usuario");
const loja = mongoose.model("loja");

module.exports = (req, res, next) => {
    if(!this.req.payload.id) return this.res.sendStatus(401);
    const {loja} = req.query; 
    if(!loja ) return res.sendStatus(401);
    Usuario.findById(req.payload.id).then(usuario => {
        if(!usuario) return res.sendStatus (401); 
        if(!usuario.loja) return res.sendStatus (401);
        if(!usuario.permissao.includes("admin")) return res.sendStatus(401);
        if(!usuario.loja !==loja) return res.sendStatus(401);
        next();
    }).catch(next);
};