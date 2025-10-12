// middleware/verifyToken.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer '))
            return res.status(401).json({ message: 'Access denied. No token provided.' });

        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_SECRET;

        if (!secret)
            throw new Error('JWT_SECRET is not defined in environment variables.');

        const decoded = jwt.verify(token, secret);
        req.user = decoded; // Attach user payload for downstream use

        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token.', error: err.message });
    }
};
