let funOrder = (req,res) => {
    
    if(Math.random() > 0.5 ? true : false){
        
        let countRandom = Math.floor(Math.random()*20);
        let ordersArray = [];

        /* Generate random time in between last and next 7 days */
        function getRandomTimestampWithinRange() {
            // Get current UTC timestamp in milliseconds
            let currentTimestamp = Date.now();
        
            // Calculate timestamps for the last 7 days and next 7 days
            let last7DaysTimestamp = currentTimestamp - (7 * 24 * 60 * 60 * 1000); // Subtract 7 days
            let next7DaysTimestamp = currentTimestamp + (7 * 24 * 60 * 60 * 1000); // Add 7 days
        
            // Generate a random timestamp within the range
            let randomTimestamp = Math.floor(Math.random() * (next7DaysTimestamp - last7DaysTimestamp + 1)) + last7DaysTimestamp;
        
            // Convert the random timestamp to ISO string format representing the UTC time
            let randomUTCTime = new Date(randomTimestamp).toISOString();
        
            return randomTimestamp;
        }

        /* Get data in loop random */

        for (let i = 0; i <= countRandom; i++) {
            let orderID = randomValue = Math.floor(Math.random() * (9999 - 1000) + 1000);
            order = {
                'order_id' : orderID,
                'arrive_at_utc' : getRandomTimestampWithinRange(),
                'paid_with' : Math.random() > 0.5 ? 'Cash' : "Wallet",
                'total_paid' : parseFloat((Math.random() * (99 - 10) + 10).toFixed(2))
            }
            ordersArray = [
                ...ordersArray,
                order
            ]
            // orders.push(order);
        }
        res.status(200).json({
            orders: ordersArray
        })

    }else{
        res.status(503).json({})
    }
}

module.exports = {funOrder}