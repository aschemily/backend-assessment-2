const foods = require('./db.json')

module.exports ={
    getFoods: (req, res)=>{
       // console.log('request is', req)

        res.status(200).send(foods)
    },
   createFoods:(req, res)=>{
       //console.log('req is create house', req.body)
       req.body.id = foodId
       foodId += 1 
       res.status(200).send(foods)
   },
   deleteFood:(req, res)=>{
       console.log('req in delete is', req)
   }
}