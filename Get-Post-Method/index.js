// console.log("ok12");
const express = require('express')
const {middleFunction} = require('./middlewears/myMiddlewear');
const app = express()

require('dotenv').config();
// console.log(process.env);

/* Start Get And Post Method tutorial */

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/hello', function (req, res) {
    res.status(201).json({"message":'Hello World Akshay'})
})

app.get('/student/:amit', function (req, res) {
console.log(req.params.amit)
res.status(201).json({ message: `Hello World ${req.params.amit}` })
});

/* End Get And Post Method tutorial */

/* Start Send Data using URL Segment Tutorial */

app.get('/student',(req, res, next)=>{
  req.query.name = 'AKshay';
  next();
  console.log(req.query.name)
} ,function (req, res) {
  // console.log(req.query.name)
  var name = req.query.name;

  res.status(201).json({ message: `Hello World ${name}` })
});

/* End Send Data using URL Segment Tutorial */

/*Start Export Express Middleware */

app.get('/student',middleFunction,function (req, res, next) {
  req.query.name = 'AKshay1';
  next();
  console.log(req.query.name)
},function (req, res) {
  res.status(201).json({ message: `Hello World` })
});

app.use(express.json());

app.post('/student',middleFunction,function (req, res, next) {
  // req.query.name = 'AKshay1';
  next();
},function (req, res) {
  res.status(201).json({ message: `Hello ${req.body.name}` })
});

/*End Export Express Middleware */

app.listen(4000)


/* Start Set var in env file*/
let PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

/* End Set var in env file*/


/* Start Async/Await  Tutorial */

async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve("Call Async Await function afetr 5 second !!");
    }, 5000)
  });
  let MyAwait = await myPromise;
  console.log(MyAwait);
}

myDisplay();


/* End Async/Await  Tutorial */
