let adminFun = (req,res)=> {
    let customerData = {
        name:"akshay",
        last_name:"bhawsar"
    }
    res.status(200).json(customerData)
}


module.exports = {adminFun}