const http = require('http');
const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send("Page not found");
})

const server = http.createServer(app);
server.listen(3000);