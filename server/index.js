console.log('please upload')
const express = require("express");
const cors = require("cors");
const controller = require('./controller')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get('/api/foods', controller.getFoods)
app.post('/api/foods', controller.createFoods)
app.delete('/api/food/:id', controller.deleteFood)

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res)=>{
  const fortunes = ["All will go well with your new project.", "An important person will offer you support.", "Because you demand more from yourself, others respect you deeply.", "Carve your name on your heart and not on marble.", "Courtesy begins in the home.","A friend asks only for your time not your money."]
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune);

})

app.listen(4000, () => console.log("Server running on 4000"));
