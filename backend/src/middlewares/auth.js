const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Collector = require('../models/collector');


const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id).select('-password');
            const collector = await Collector.findById(decoded.id).select('-password');
            
            if(user){
                req.user = user;
            } else if (collector){
                req.collector = collector;
            } else{
                return res.status(401).json({ message: 'Not authorized, user/collector not found' });
            }
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed'});
        }
    }

    if(!token) {
        res.status(401).json({ message: 'Not authorized, no token'});
    }
}

module.exports = { protect };