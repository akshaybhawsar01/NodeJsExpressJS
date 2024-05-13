// console.log('ok\'s');

const express = require('express')
const app = express();

require('dotenv').config();
let port = process.env.PORT;

app.listen(port,()=> {

    // console.log(`The server is running on port ${port}`)
});

/* Start Nodejs Get object value Tutorial*/

var fulldetails = '';
app.get('/get_student',(req,res,nextFun) => {
    // console.log(req.query);
    for(key in req.query){
        // console.log(req.query[key]);
        fulldetails = fulldetails + req.query[key] + ' ';
        
    }
    req.query = {fulldetails}
    console.log(fulldetails);
    nextFun();
},(req,res)=>{
    res.json({'msg':`Hello ${req.query.fulldetails}`});
})

/* End Nodejs Get object value Tutorial*/

/* Start Express type of middlewears */

app.use('/student',(req,res,nextFun)=>{
    console.log(req.method);
    if(req.method === 'GET'){
        res.status('400').json({'msg':'This request is not allow'});
    }else{
        console.log("Hello");
        nextFun();
        res.json({'msg':'This request is allow'});
    }
});

/* End Express type of middlewears */

/* Start Error Handling Mioddlewear */

app.use((err,req,res,nextFun)=>{
    console.error(err.stack);
    // nextFun();
    res.status('400').send('Something went wrong');
});

/* End Error Handling Mioddlewear */

app.get('/',(req,res)=>{
    res.send("Everyting is ok");
})


app.use(express.json());

/* Start ExpressJS Backend Validation tutorial */

const { body, validationResult } = require('express-validator');

const validationArray = [
    body('email').isEmail(),
    body('name').isLength({min:5}).withMessage('Name must be atleast 20 characters').matches(/\d/)
    .withMessage('must contain a number')
];

app.post('/send-data',validationArray,(req,res)=>{
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({
        msg:"ok",
        data:req.body.name
    })
});

/* End ExpressJS Backend Validation tutorial */

/* Start Promise class tutorial */

function helloFun(){
    console.log("Who are you");
}

helloFun();

class MyClass{

    myfun(){
        console.log("Hello how are you")
    }
}

let fun = new MyClass();
fun.myfun();


let po = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("ok");
    },3000);
}) 


po.then((d) => {
    console.log(d)
}).then().then().catch((e) => {
    console.log("Error",e)
}).finally();

/* End Promise class tutorial */
