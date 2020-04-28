const transporter = require("nodemailer").createTransport(require("../config/email"));

const {root: link} = require("../config/index");

module.exports=({usuario, recovery}, cb) => {
    const message = `
            <h1  style ="text-align: center; "> Recuperação de Senha </h1>
            <br /> 
            <p>
                Aqui está o link para redefinir a sua Senha. Acesse ele e digite sua nova senha:   
            </p>
            <a href="${link}/v1/api/usuarios/senha-recuparada?token=${recovery.token}">
    
                ${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}
            </a>

            <br /> <br /> <hr />
            
            <p>
                Obs.: Se você não Solicitou a redefinição, apenas ignore esse email.
            </p>
            <br  />
            <p>  Atenciosamente, Loja TI  </p> 
    `;

const opcoesemail = {
    from: "naoresponder@lojati.com",
    to: usuario.email,
    subject: "Redefinição de Senha - Loja TI",
    html: Message  
};

if (process.env.NODE_ENV === "production") {
    transporter.sendMail( opcoesemail, (error, info) => { 
    if (error) {
        console.log(error);
        return cb("aconteceu um erro no envio do email, tente novamente.");
    } else {
        return cb (null, "Link par redefinicao de senha enviado com sucesso para seu email.");
    }
    });
} else {
    console.log(opcoesemail);
    return cb(null, "link para redefincao de senha foi enviado com sucesso para seu email.");
}

}
