const jwt = require('jsonwebtoken');

const generateAccessToken = (user, role) => {
    const accessToken = jwt.sign({ username: user, role: role}, process.env.JWT_SECRET, { expiresIn: '1h'});
    return accessToken;
};

const generateRefreshToken = (user, role) => {
    const refreshToken = jwt.sign({ username: user, role: role}, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d'});
    return refreshToken;
}

module.exports = { generateAccessToken, generateRefreshToken };