const server    = require('./server');
                  require('dotenv').config();

server.listen(process.env.PORT, (e)=>{
    if (e) {
        console.log('error'+e);
    } else {
        console.log('server success. port:'+process.env.PORT);
    }
});