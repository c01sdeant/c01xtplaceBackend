const { getUsers, newUser, newUserGet, userLogin } = require('./controller');

const router = require('express').Router();

router.get('/users', getUsers);

router.post('/login', userLogin)

router.get('/register', newUserGet).post('/register', newUser);

module.exports = router;