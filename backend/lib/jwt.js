import jwt from 'jsonwebtoken';
export const signJwt = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const verifyJwt = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};