// alert('Hello');

// confirm('вы учите js');


/* const skill = document.getElementById('skill')
const isLove = document.getElementById('isLove')

const skillText = prompt('Какой язык вы учите?', 'пока не в курсе)')
const isLoveValue = confirm('Вам нравится этот язык?')

skill.innerText = skillText
isLove.innerText = isLoveValue */

/* STRING
const str1 = 'I\'m say'
const str2 = "I\"m say"
const str3 = `I'm say ${str1}`
console.log(str1)
console.log(str2)
console.log(str3) 

// NUMBER
const num1 = 75 + 15
alert(num1)

const num2 = 3 ** 3
alert(num2)

const num3 = 70 - "10"
const num4 = 70 + "10" 

NaN not a number
const nan1 = 8 * "a" 

Infinity
const inf1 = 17 / 0 

// BIGINT
const num6 = 9999999999999999
const big1 = 10385785657678768965n
console.log(num6)
console.log(big1) 

// BOOLEAN true/false
const bool1 = 10 > 5
console.log(bool1)

const bool2 = "aAA" > "aAB"
console.log(bool2)

const bool3 = "a" > "8"
console.log(bool3)

// NUll
const empty = null
console.log(empty, typeof empty)

// UNDEFINED
let box = undefined // let box
console.log(box, typeof box)  

// SYMBOL
const uniq = Symbol('id')
const uniq1 = Symbol('id')
console.log(uniq == uniq1) 

// OBJECT набор пар ключ: значение
 const obj = {
    name: "Sasha",
    age: 19,
    isHappy: true,
 }

 console.log(obj.name)
 console.log(obj['name']) // динамические ключи

 obj.job = "Google"
 console.log(obj)

 const arr = ["Аня", 18, false]
 arr[3] = "Facebook"
 console.log(arr)
 console.log(arr[1])
*/


// const go = confirm('Будем бегать?')
// if (go) {
//    alert('Отлично')
// } else {
//    alert('Печально(')
// }


// const go = prompt("Куда мы побежим?", "Домой")
// if (go) {

//    if (go === "Домой") {
//       alert("Отлично, бежим домой")
//    } else {
//       alert(`Отлично, бежим ${go}`)
//    }   
// } else {
//    alert('Печально(')
// }

/*const userName = prompt("How are you?", "anonim")
if (userName === "admin") {
   alert("Hello boss!")
} else if (userName === "anonim") {
   alert("I don't know you...")
} else if (!userName){
   alert("You does not exist")
}
else {
   alert(`Hi, ${userName}`)
}


if (userName === "admin") {
   alert("Hello boss!")
} else if (userName === "anonim" || !userName) {
   alert("I don't know you...")
} else {
   alert(`Hi, ${userName}`)
}


// const counts = prompt("До скольки считать?", 20)
// let i = 0
// while (i <= counts) {
//    console.log(i)
//    i++
// }


const counts = prompt("До скольки считать?", 10)
let i = 10
do {
   console.log(i++)
} while (i <= counts)

console.log(i)*/




/*const arr = [] 
for (let i = 1; i <= 50; ++i) { 
   arr.push(i)
}
//console.log(arr)

const newArr = []

for (elem of arr) {
   const marker = elem % 3
   if (!marker) {
      newArr.push(elem)
   }
}
console.log(newArr)




const obj = {
   name: "Sasha",
   age: 25,
   city: "Voronej"
}

for (key in obj) {
   console.log(key, obj[key])
}
*/



// const randomValue1 = (Math.random() * 100).toFixed(0)
// const randomValue2 = (Math.random() * 100).toFixed(0)
// const isPlus = Math.random() > 0.5
// console.log(isPlus)


// const gameElements = document.getElementById("my_game").children

// if (isPlus) {
//    gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//    gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }
// console.log(gameElements)


// FUNCTION

// declaration
// function scream() {
//    alert('AAAAAAAAAAAAA')
//    return'I\'m OK'
// }

// scream()
// console.log(scream())


// // expression
// const wowScream = function() {
//    alert('WOOOOOW')
// }
// // wowScream()


// // arrow
// const arrow = () => {
//    alert('arrow is in the sky')
// }
// // arrow()


// function exsersize(a, b) {
//    // const result = a * b
//    // return result
//    return a * b
// }

// console.log(exsersize(4, 7))



// const a = (Math.random() * 10).toFixed(0)
// const b = (Math.random() * 10).toFixed(0)
// const isPlus = Math.random() > 0.5
//console.log(isPlus)


// if (isPlus) {
//    const d = Number(a) + Number(b)
//    gameElements[1].innerText = `${a} + ${b} = ` + d
// } else {
//    const d = a - b
//    gameElements[1].innerText = `${a} - ${b} = ` + d
// }
//console.log(doc)






/*


// ИГРА
// Нажав на кнопку "Начать" игра запускается, генерируется задача
// Пользователь может ввести ответ - Отображается кнопка "Проверить"

// Нажва кнопку "Проверить" идет сравнение ввода пользователя с ответом
// Вывести результат и правильное значение, сменить кнопку начать заново


const getRandomNumInRange = (min, max) => {   
   const randomNum = (Math.random() * (max - min) + min).toFixed(0)
   return randomNum
}

const getTask = () => {
   // const randomNum1 = getRandomNumInRange(0, 100)
   // const randomNum2 = getRandomNumInRange(0, 100)

   // let symbol
   // if (Math.random() > 0.5) {
   //    symbol = "+"
   // } else {
   //    symbol = "-"
   // }
   const symbol = (Math.random() > 0.5) ? "+" : "-"

   // const task = `${randomNum1} ${symbol} ${randomNum2}`
   const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
   gameState.rightAnswer = eval(task)
   return task
}

const toggleGameState = () => {
   gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]


const gameState = {
   taskInProcess: false,
   rightAnswer: null,
}

btnGame.onclick = () => {
   if (!gameState.taskInProcess) {
      title.innerText = 'Игра началась!'
      userAnswer.value = null
      // генерировать задачу и ответ
      const task = getTask()
      // показываю задачу пользователю
      userTask.innerText = task
      userAnswer.hidden = false
      // меняю кнопку и состояние
      btnGame.innerText = 'Проверить!'
      toggleGameState()
   } else {
      // сравнить ответ пользователя с правильным
      const isRight = gameState.rightAnswer == userAnswer.value
      // вывести результат
      userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
      // вывести поздравление
      title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли("
      // поменять кнопку и состояние
      btnGame.innerText = 'Начать заново!'
      toggleGameState()
   }   
}


*/



// ИГРА
// Нажав на кнопку "Начать" игра запускается, генерируется задача
// Пользователь может ввести ответ - Отображается кнопка "Проверить"

// Нажва кнопку "Проверить" идет сравнение ввода пользователя с ответом
// Вывести результат и правильное значение, сменить кнопку начать заново



const gameElements = document.getElementById("my_game").children
//console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const toggleGameState = () => {
   gameState.taskInProcess = !gameState.taskInProcess
}

const gameState = {
   taskInProcess: false,
   rightAnswer: null
}

const getRandomNumInRange = (min, max) => {
   const randomNum = (Math.random() * (max - min) + min).toFixed(0)
   return randomNum
}

const getTask = () => {
   const randomNum1 = getRandomNumInRange(0, 100)
   const randomNum2 = getRandomNumInRange(0, 100)

   const symbol = (Math.random() > 0.5) ? " + " : " - "

   const getAnswer = `${randomNum1} ${symbol} ${randomNum2}`
   gameState.rightAnswer = eval(getAnswer)
   return getAnswer
}

const changeInfo = (titleText, btnText, btnStyle, userAnswerStyle) => {
   title.innerText = titleText
   btnGame.innerText = btnText
   btnGame.style = btnStyle
   userAnswer.style = userAnswerStyle
}



const startGameFunc = () => {
   if (!gameState.taskInProcess) {
      toggleGameState()
      userAnswer.value = null
      userTask.innerText = getTask()
      userAnswer.hidden = false
      changeInfo("Игра началась", "Проверить!", "background-color: #95efef;")
   } else {
      if (userAnswer.value !== '') {
         toggleGameState()
         userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
         userAnswer.style = "border: none;"
         if (gameState.rightAnswer == userAnswer.value) {
            changeInfo("Все верно!", "Играть еще", "background-color: lightgreen;")
         } else {
            changeInfo("Неверно! Попробуйте еще раз!", "Попробовать еще раз", "background-color: lightpink;")
         }
      } else {
         changeInfo(title.innerText, "Введите значение", btnGame.style, "border: solid 2px red;")
      }
   }
}


btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
      startGameFunc()
   } else if (e.key === "Escape") {
      userAnswer.blur()
   }
})


userAnswer.addEventListener("keydown", (e) => {
   if (e.key === "Escape") {
      console.log("45")
   }
})







// console.dir(document) - отображение свойств элемента
// const choosedEl1 = document.querySelector('.my_game') // обращение к первому элементу
// const choosedEl2 = document.querySelectorAll('.my_game') // обращение ко всем элементам
// console.log(choosedEl2)

const choosedEl = document.querySelectorAll('.choosed_block_container > div')
const counterEl = document.querySelector('.choosed_block span')

// const choosedState = {
//    countElements: 0,
// }

// const changeCount = (value) => {
//    choosedState.countElements += value
//    counterEl.innerText = choosedState.countElements
// }

const choosedState = {
   countElements: 0,
   setCount(value) {
      this.countElements += value
      counterEl.innerText = this.countElements
   }
}

const eventFunc = (e) => {
   console.log('click')
   if (e.target.className === "") {
      //choosedEl[i].className = "choosed_element"
      e.target.className = "choosed_element"
      // запуск счетчика
      choosedState.setCount(1)
   } else {
      e.target.className = ""
      choosedState.setCount(-1)
   }
}

for (let i = 0; i < choosedEl.length; i++) {
   choosedEl[i].addEventListener('click', eventFunc)
}

//choosedEl[2].removeEventListener("click", eventFunc)


// const timeIsOver = () => {
//    alert('Время вышло')
// }

// setTimeout(timeIsOver, 2000)



// const alarm = setInterval(() => {
//    let wantToSleep = confirm('Вы хотите спать?')
//    if (wantToSleep) {
//       alert('tic')
//    } else {
//       clearInterval(alarm)
//    }
// }, 3000)


const postsBlock = document.querySelector(".posts_block_container")
const showPostsBtn = document.querySelector(".posts_block button")

function getPosts() {
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then( res => res.json())
   .then ( data => {
      for (item of data) {
         addPost(item.title, item.body)
      }
   })
   .catch( err => console.log(err.message))
}

function addPost(title, body) {
   const postTitle = document.createElement("h3")
   const postBody = document.createElement("span")
   const postsItem = document.createElement("p")
   
   postTitle.innerText = title
   postBody.innerText = body

   postsItem.append(postTitle, postBody)
   postsBlock.append(postsItem)
}

// function createPosts(title, body, userId) {
//    fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: 'POST',
//       body: JSON.stringify({
//          // title: title,
//          // body: body,
//          // userId: userId,
//          title,
//          body,
//          userId,
//       }),
//       headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//       },
//    })
//    .then( res => {
//       console.log(res)
//       return res.json()
//    })
//    .catch( err => console.log(err.message))
// }

// createPosts("title", "body", 15)


//showPostsBtn.addEventListener("click", getPosts)
getPosts()