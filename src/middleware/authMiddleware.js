const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) return res.status(401).json({ error: 'Access denied' });

    
    try {
        const decoded = jwt.verify(token, 'secretkeyfornow');
        
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = verifyToken;