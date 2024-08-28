import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Access Denied!' });
    }

    try {
        const decoded = jwt.verify(token, 'you-secret-key');
        req.doctorId = decoded.doctorId;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token!' });
    }
};

export default verifyToken;