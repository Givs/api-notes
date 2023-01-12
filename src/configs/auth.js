module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default", //palavra que é usada pra gerar o token
        expiresIn: "1d"
    }
}
