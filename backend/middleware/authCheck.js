import { verifyJwt } from "../lib/jwt";

export const checkAuth = (req, res, next) => {
    const token = req.signedCookies.token;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" })
    }
    const decoded = verifyJwt(token);
    if (!decoded) {
        return res.status(401).json({ error: "Unauthorized" })
    }
    req.user = decoded;
    next();
}