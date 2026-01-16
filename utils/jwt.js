const jwt = require("jsonwebtoken");

function gerarToken(payload) {
    return jwt.sign(payload,"teste123", {
        expiresIn: "1d"
    });
}

function verificarToken(token) {
    return jwt.verify(token, "teste123");
}

module.exports = {
    gerarToken,
    verificarToken
};