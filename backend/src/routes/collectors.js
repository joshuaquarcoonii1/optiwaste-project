const express = require('express');
const router = express.Router();
const { register, login, logout,getCollectorProfile } = require('../controllers/collectors');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', getCollectorProfile);

module.exports = router;
