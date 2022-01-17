//const e = require("express")

//console.log('in javascript file')
const form = document.getElementById('fave-food')
const input = document.getElementById('input-food')
const submit = document.getElementById('submit-btn')
const fortuneBtn = document.getElementById('fortune-btn')
const foodContainer = document.getElementById('food-container')
const allFoods = document.getElementById('all-foods')

const createFood = (food, id)=>{
   //e.preventDefault()
    console.log('in createfood', food)
  // console.log('input is', input)

    const foodCard = document.createElement('div')

    foodCard.innerHTML = `<h2 id="food-name">${food}</h2> <button id=${id}> Delete</button>`

    foodContainer.appendChild(foodCard)
}

const deleteFood = (id)=>{
    axios.delete(`http://localhost:4000/api/foods/${id}`)
    .then(res =>{
        console.log('res in delete', res)
    })
    
}


form.addEventListener('submit', (e)=>{
    //console.log('e is', e)
    e.preventDefault()
    //console.log('input is', input.value)
    axios.post("http://localhost:4000/api/foods/", createFood(input.value, 4))
    .then(res =>{
        console.log('inside form; res is', res)
    })
})

fortuneBtn.addEventListener('click',()=>{
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
})

allFoods.addEventListener('click', ()=>{
    axios.get('http://localhost:4000/api/foods/')
    .then(res =>{
        //console.log('res is', res.data)
        let data = res.data 
        data.forEach(el =>{
            console.log('food is in all foods', el)
            createFood(el.food, el.id)
        })
    })
})



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  