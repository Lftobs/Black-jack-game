const sc = document.querySelector("#sc");
const sumC = document.querySelector("#sumC");
const dc = document.querySelector(".dc");
const sms = document.querySelector(".txt");
const user = document.querySelector(".user");
const coins = document.querySelector("#coins");
const image = document.querySelector(".img-sec");

const btn = document.querySelector(".btn");
isalive = false;
hasjack = false;
let cards = [];
let sum = 0;
var rem;



function getuser() {
    name = prompt("Enter your name : ");
    user.textContent = name;
};

//getuser();

function  newgame() {
   coins.value = 200; 
}
function  getrandom() {
    let rando = Math.floor((Math.random() * 13) + 1);  
     
    img = document.createElement("img");
    if (rando == 1) {
     img.setAttribute(
  'src',
  'img/A.svg.png',
);

    
}
else if (rando == 2) {
     img.setAttribute(
  'src',
  'img/2.svg.png',
);

    
}
else if (rando == 3) {
    img.setAttribute(
  'src',
  'img/3.svg.png',
);

    
}
else if (rando == 4) {
    img.setAttribute(
  'src',
  'img/4.svg.png',
);

    
}
else if (rando == 5) {
    img.setAttribute(
  'src',
  'img/5.svg.png',
);

    
}
else if (rando == 6) {
    img.setAttribute(
  'src',
  'img/6.svg.png',
);

    
}
else if (rando == 7) {
    img.setAttribute(
  'src',
  'img/7.svg.png',
);

    
}
else if (rando == 8) {
    img.setAttribute(
  'src',
  'img/8.svg.png',
);

    
}
else if (rando == 9) {
    img.setAttribute(
  'src',
  'img/9.svg.png',
);

    
}
else if (rando == 10) {
    img.setAttribute(
  'src',
  'img/10.svg.png',
);

    
}
else if (rando == 11) {
    img.setAttribute(
  'src',
  'img/K.svg.png',
);

    
}
else if (rando == 12) {
    img.setAttribute(
  'src',
  'img/J.svg.png',
);

    
}
else {
     img.setAttribute(
  'src',
  'img/Q.svg.png',
);
};
 image.appendChild(img);
this.inner = function  remo(img) {
  //for(var i = 0; i < image.length; i++){
        //image[i].parentNode.removeChild(image[i]);
//  };  
image.removeChild(img);
};
    console.log(image.length);
    //console.log(image);
    if (rando == 1) {
        return 11;
    }else if (rando == 11 || rando == 12 || rando == 13){
        return 10;
    };
    return rando;
};

function  start() {
    //img = document.createElement("img");
    //image.appendChild(img);
    if (coins.value > 0) {
      console.log(coins.value);
      coins.value -= 50;
      hasjack = false;
      isalive = true;
      let firstcard = getrandom();
      let secondcard = getrandom();
      cards = [firstcard, secondcard];
      sum = firstcard + secondcard;
      check();
    }else {
        alert(`You are bankrupt. Click the new session button to start a new session`)
    }
    
};
function check(){

    dc.textContent = "Cards : ";
    for (i = 0; i < cards.length; i++) {
        dc.textContent += cards[i] + " ";
    };
    
    sc.textContent = sum;
    if (sum < 21) {
        text = `You are still in the game`;
        sms.style.color='white';
        sumC.style.color='white';
        
    }else if (sum == 21){
        text = `You win`;
        sms.style.color='green';
        sumC.style.color='green';
        x = parseInt(coins.value);
        x += parseInt(50);
        coins.value = x;
        hasjack = true;
    }else{
        text = `You lose`;
        sms.style.color='red';
        sumC.style.color='red';
        isalive = false;
       
        
    };
    
    sms.textContent = text;
    console.log("yyyyyy");
};
function newC() {
    if (isalive == true && hasjack == false) {
        let card = getrandom();
        cards.push(card);
        console.log(cards);
        sum += card;
        check();
    }
    
};

//function  imgd(rando) {
       
    
//
} 



//function removeElements(elements){
 //   for(var i = 0; i < elements.length; i++){
        //elements[i].parentNode.removeChild(elements[i]);
//    }
//}
