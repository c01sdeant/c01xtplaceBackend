const model = require('./model');
const bcrypt = require('bcrypt');

const user = model.userSchemaExport;
const getUsers = async (req,res,next) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

const newUserGet = (req,res,next) => {
    try {
        res.json(new user({
            username: "",
            password: "",
            userFirstName: "",
            userLastName: "",
            userEmail: "",
            userNickname: ""
        }));
    } catch (error) {
        console.log(error);
    }
}

const newUser = async (req,res,next) => {
    try {
        const newUser = new user({
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, 10),
            userFirstName: req.body.userFirstName,
            userLastName: req.body.userLastName,
            userEmail: req.body.userEmail,
            userNickname: req.body.userNickname

        });
        if (newUser.save()) {
            res.json(newUser);
        }
    } catch (error) {
        console.log(error);
    }
}

//auth
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const login = model.loginSchemaExport;
const userLogin = async (req,res,next) => {
    try {
        const userLoginData = await login.findOne({username: req.body.username})
        const userData = await user.findOne({username: req.body.username});
    
        if (!userData) return res.status(401).json({ error: 'Authentication failed' });
        
        

        const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
        
        
        if (!passwordMatch) return res.status(401).json({ error: 'Authentication failed by password' });

        //secretkeyislocal
        // const secretKey = crypto.crypto.randomBytes(32).toString('hex');
        if(userLoginData){
            userLoginData.token = jwt.sign({ username: userData.username, email: userData.userEmail, nickname: userData.userNickname, firstName: userData.userFirstName, lastName: userData.userLastName }, 'secretkeyfornow', { expiresIn: '1h' });
            userLoginData.save();
            res.json(userLoginData);
        } else {
            const newLogin = new login({username: req.body.username, password: passwordMatch, token: jwt.sign({ username: userData.username, email: userData.userEmail, nickname: userData.userNickname, firstName: userData.userFirstName, lastName: userData.userLastName }, 'secretKey', { expiresIn: '1h' })});
            newLogin.save();
            res.json(newLogin);
        }

        

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getUsers,
    newUser,
    newUserGet,
    userLogin
}