const express = require('express');
const ExpressError = require('./errorHandler');
const app = express();
const {getMean, getMedian, getMode} = require('./helper')

app.use(express.json());

app.get("/mean", (req, res, next)=>{
    let stringNumsToNumArr = req.query.nums.split(',').map(Number);
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required. For example /mean?nums=1,2,3,4,5", 400)
        }
        if (isNaN(parseFloat(req.query.nums.split(',')))){
            throw new ExpressError("Please enter a valid number. No letters or symbols allowed", 400)
        }
        routeParent = req.route.path
        routeOperation = routeParent.replace("/", "")
        return res.json({
            response: {
                operation: routeOperation,
                value: getMean(stringNumsToNumArr)
            }
        })
    }catch(e){
        next(e)
    }
})

app.get("/median", (req, res, next)=>{
    let stringNumsToNumArr = req.query.nums.split(',').map(Number);
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required. For example /mean?nums=1,2,3,4,5", 400)
        }
        if (isNaN(parseFloat(req.query.nums.split(',')))){
            throw new ExpressError("Please enter a valid number. No letters or symbols allowed", 400)
        }
        routeParent = req.route.path
        routeOperation = routeParent.replace("/", "")
        return res.json({
            response: {
                operation: routeOperation,
                value: getMedian(stringNumsToNumArr)
            }
        })
    }catch(e){
        next(e)
    }
})

app.get("/mode", (req, res, next)=>{
    let stringNumsToNumArr = req.query.nums.split(',').map(Number);
    let checkNum = isNumeric(req.query.nums.split(','))
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required. For example /mean?nums=1,2,3,4,5", 400)
        }
        if (isNaN(parseFloat(req.query.nums.split(',')))){
            throw new ExpressError("Please enter a valid number. No letters or symbols allowed", 400)
        }
        routeParent = req.route.path
        routeOperation = routeParent.replace("/", "")
        return res.json({
            response: {
                operation: routeOperation,
                value: getMode(stringNumsToNumArr)
            }
        })
    }catch(e){
        next(e)
    }
})



// ERROR HANDLERS //
app.use((req, res, next)=>{
    const e = new ExpressError("Page Not Found", 404)
    return next(e)
})

app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json(
        {
            error: { message, status}
        }
    );
});

// APP PORT // 
app.listen(3000, function(){
    console.log("App on port 3000");
})