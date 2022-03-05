const cards=[['img/red_joker.png','img/black_joker.png'],["img/ace_of_clubs.png",'img/ace_of_diamonds.png','img/ace_of_hearts.png','img/ace_of_spades.png'],
            ["img/2_of_clubs.png",'img/2_of_diamonds.png','img/2_of_hearts.png','img/2_of_spades.png'],
            ['img/3_of_clubs.png','img/3_of_diamonds.png','img/3_of_hearts.png','img/3_of_spades.png'],
            ['img/4_of_clubs.png','img/4_of_diamonds.png','img/4_of_hearts.png','img/4_of_spades.png'],
            ['img/5_of_clubs.png','img/5_of_diamonds.png','img/5_of_hearts.png','img/5_of_spades.png'],
            ['img/6_of_clubs.png','img/6_of_diamonds.png','img/6_of_hearts.png','img/6_of_spades.png'],
            ['img/7_of_clubs.png','img/7_of_diamonds.png','img/7_of_hearts.png','img/7_of_spades.png'],
            ['img/8_of_clubs.png','img/8_of_diamonds.png','img/8_of_hearts.png','img/8_of_spades.png'],
            ['img/9_of_clubs.png','img/9_of_diamonds.png','img/9_of_hearts.png','img/9_of_spades.png'],
            ['img/10_of_clubs.png','img/10_of_diamonds.png','img/10_of_hearts.png','img/10_of_spades.png'],
            ['img/jack_of_clubs.png','img/jack_of_diamonds.png','img/jack_of_hearts.png','img/jack_of_spades.png'],
            ['img/queen_of_clubs.png','img/queen_of_diamonds.png','img/queen_of_hearts.png','img/queen_of_spades.png'],
            ['img/king_of_clubs.png','img/king_of_diamonds.png','img/king_of_hearts.png','img/king_of_spades.png']];


let cardisplay="";
 let carder=  [];
let sum=0;
let isalive = false;
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#cards-el');
let cardstyle1 = document.querySelector('#cardstyle1');
let cardstyle2 = document.querySelector('#cardstyle2');
let playername = document.querySelector(".name");
let playercash = document.querySelector(".cash");
let buttonstart = document.querySelector("#button");

let message = "";
let hasblackjack = false;

function startgame(){
isalive=true;
let firstCard = parseInt( Math.floor(Math.random() * 13) +1);
let secondCard = parseInt(Math.floor(Math.random() * 13) +1);
carder = [firstCard,secondCard];
sum = firstCard+secondCard;

let value = parseInt(Math.floor(Math.random() * 3)+1);
cardstyle1.src = "/"+ cards[firstCard][value];
cardstyle2.src = "/"+ cards[secondCard][value];

rendergame();

}

function rendergame(){
cardEl.textContent = "cards: "
 for(let i =0;i <carder.length; i++){
     cardEl.textContent +=carder[i] + " ";
 }

 sumEl.textContent = "Sum: "+sum;
if(sum < 21){
   message = "Do you want the next card? 💢🤔";
}
else if(sum === 21){
    message = " you've got the blackjack! 🖤💲";
    hasblackjack = true;
}
else{
    message = " you're out of the game 😔";
    isalive = false;
}
messageEl.textContent = message;

}

const person ={
    name: "Rajnivas",
    coins: 250
};

playername.innerText = "PLAYER NAME: " + person["name"];
playercash.innerText = "PLAYER CASH: " + person["coins"];

let amount = person.coins;

buttonstart.addEventListener("click",function(){
    if(amount <=0){
        window.alert("sorry!" +person.name+" you are officially out of the game 😥");
        amount =250;
    }
    amount -=25;
    playercash.textContent=amount;
})


function newcard(){
    
        let thirdCard = Math.floor(Math.random() * 13)+1;
        sum+=thirdCard;
        carder.push(thirdCard);
        rendergame();
}
// // const cards=[["..\img\2_of_clubs.png",'..\img\2_of_diamonds.png','..\img\2_of_hearts.png','..\img\2_of_spades.png']];

// let a = Math.floor(Math.random() * 3)+1;
// console.log(a); 

// let a = cards[0][0];
// console.log(a);
// var firstname;
// function page(){
//     firstname=prompt("Please enter your name","Rajnivas");
//     person.name= firstname;
//     // if (firstname != null)
//     //    firstname="Hello " + firstname+"," +" welcome! to our blackjack game!";
//     //    alert(firstname);
// }