module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "AOKASDFA903423LKJ243342LVASDFASDJLF34023804982349230ASLDFJALSDF20348293", 
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com": "http://localhost:3000" , 
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000"
};