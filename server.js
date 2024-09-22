const express   = require('express');
const app       = express();
const fileUpload = require('express-fileupload');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const productRoutes = require('./src/domains/product/todoApp/index');
const userRoutes = require('./src/domains/user/index');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
              require('./src/config/db')();
const cors = require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'securesecretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use(fileUpload());
app.use(express.static('public'));


// app.use((req,res,next)=>{
//     res.locals.commentControl = req.flash('commentControl');
//     next();
// });

// app.use(express.static("frontend"));
app.use(productRoutes);
app.use(userRoutes);


module.exports = app;