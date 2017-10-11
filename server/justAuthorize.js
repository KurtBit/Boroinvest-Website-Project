const jwt = require('jsonwebtoken');

const getHttpError = (code, message) => {
    let error = new Error(message);
    error.code = code;

    return error;
} 

const justAuthorize = (req, res, next) => {
    const SECRET_KEY = "ut5-secret";

    const UNAUTHORIZED = 401;
    const MISSING_HEADER_MESSAGE = `HTTP Error ${UNAUTHORIZED} - Unauthorized: Access is denied due to missing authorization token.`;
    const INVALID_TOKEN_MESSAGE = `HTTP Error ${UNAUTHORIZED} - Unauthorized: Access is denied due to invalid authorization token.`;

    if(!req.originalUrl.toLowerCase().includes("docs")) {
        let token = req.headers['authorization'];
        
        if(!token) {
            return next(getHttpError(UNAUTHORIZED, MISSING_HEADER_MESSAGE));
        }

        try {
            jwt.verify(token, SECRET_KEY);
        } catch (error) {
            return next(getHttpError(UNAUTHORIZED, INVALID_TOKEN_MESSAGE));
        }
 
        return next();
    }
}

module.exports = {
    intercept: (req, res, next) => justAuthorize(req, res, next)
}