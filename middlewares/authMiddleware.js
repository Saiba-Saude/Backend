const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token não informado"
        });
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({
            message: "Token mal formatado"
        });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({
            message: "Token mal formatado"
        });
    }

    try {
        const decoded = jwt.verify(token, "teste123");

        // injeta o payload inteiro no request
        req.usuario = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Token inválido ou expirado"
        });
    }
};