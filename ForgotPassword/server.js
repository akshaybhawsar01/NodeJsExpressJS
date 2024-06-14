const express = require('express')
const app = express()
const env = require('dotenv')
const session = require('express-session')
const cookie = require('cookie-parser')

const debug = require('debug')('myapp');

debug('Starting the application...');

const { userRoute } = require('./routes/userRoute')

app.use(express.json())
app.use(userRoute)
app.use(session({secret:"Akshay"}))
app.use(cookie())
env.config()

let port = process.env.PORT;

app.get('/',function(req,res){
    req.session.username = 'Test API';
    res.send("Session are set")
});

app.get('/get-session',function(req,res){
    res.send("Your Name is "+req.session.username)
});


app.get('/set-cookie',function(req,res){
    console.log(req.cookies)
    res.cookie('name','Akshay').send('cookie set');
});

app.get('/clear-cookie',function(req,res,next){
    // console.log(req.cookies)
    res.clearCookie('name');
    res.send('cookie are clear');
    next(err)
});

app.get('*',function(req,res,next){
    var err = new Error('Someting went wrong');
    next(err)
});

app.use('*',function(err,req,res,next){
    res.status(500)
    res.send('Opp: something went wrong');
});


app.listen(port,(req,res) => {
    console.log(`Working on port no ${port}`)
})