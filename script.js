var plusbtns =document.querySelectorAll('.fa-circle-plus')
/* console.log(plusbtns) */
var minusbtns =document.querySelectorAll('.fa-circle-minus')
/*  console.log(minusbtns)  */
var heartbtns= document.querySelectorAll('.fa-heart')
var deletebtns= Array.from(document.querySelectorAll('.fa-trash'))
console.log(deletebtns)
var cards= Array.from(document.querySelectorAll('.card'))
/* console.log(cards) */



/*  var pri1 = 150 ; */

/* var counter=0; */




//plus----------------------------
for(let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function( ){
        plusbtn.nextElementSibling.innerHTML++;
        total()
        
      /*   price1.innerHTML = plusbtn.nextElementSibling.innerHTML * pri1; */
        
        
    })
    
}





   



for(let minusbtn of minusbtns){
    minusbtn.addEventListener("click",function( ){
        /*  counter--;
        if(counter>0) */
        if (minusbtn.previousElementSibling.innerHTML > 0) {
             minusbtn.previousElementSibling.innerHTML--; 
             total()
        }
       

        
    })
}


for(let heartbtn of heartbtns){
    heartbtn.addEventListener("click",function(){
        if(heartbtn.style.color != "red"){
            heartbtn.style.color ="red"
        }
        else{
            heartbtn.style.color ="black"
        }
    })
}


for (let i in deletebtns){
    deletebtns[i].addEventListener("click",function(){
        cards[i].remove()
        total()
    })
}


function total(){

let qtt = Array.from(document.querySelectorAll('#qtt'))
 
let price = Array.from(document.querySelectorAll('#price'))

let s = 0; 

for (let i in qtt) {

s= s + qtt[i].innerHTML*price[i].innerHTML;
} 


document.getElementById('total').innerHTML = s+"$"; 



}







    var button =  document.querySelector('.fa-cart-shopping')
    button.addEventListener("click",function(){
        if(button.style.color != "green"){
            button.style.color ="green"
            alert("total price is :" + document.getElementById('total').innerHTML );
            console.log(alert)
        }
            else(
                 button.style.color ="black"
            )
            
    })








    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});