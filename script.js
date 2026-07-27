// ==========================================
// SCREENS
// ==========================================

const screens = document.querySelectorAll(".screen");

function openScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}



// ==========================================
// FLOATING HEARTS
// ==========================================

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random()>0.5 ? "❤" : "♡";

    heart.style.left = Math.random()*100+"%";

    heart.style.fontSize = (14+Math.random()*18)+"px";

    heart.style.animationDuration = (5+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,600);



// ==========================================
// LIVE COUNTER
// ==========================================

const relationshipDate = new Date("2026-04-13T00:00:00");

function updateCounter(){

    const now = new Date();

    let diff = now - relationshipDate;

    let seconds = Math.floor(diff/1000);

    let minutes = Math.floor(seconds/60);

    let hours = Math.floor(minutes/60);

    let days = Math.floor(hours/24);

    const years = Math.floor(days/365);

    days -= years*365;

    const months = Math.floor(days/30);

    days -= months*30;

    hours %= 24;

    minutes %= 60;

    seconds %= 60;

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);



// ==========================================
// COMPLIMENT WALL
// ==========================================

const complimentWall = document.getElementById("complimentWall");

const compliments = [

"Beautiful ❤️",
"Pretty 🌸",
"Cute 🥹",
"Hot 😮‍💨",
"My Penguin 🐧",
"Ice Cream Lover 🍦",
"Your Smile",
"Your Laugh",
"Your Eyes",
"Your Voice",
"My Favourite Person",
"My Safe Place",
"My Happiness",
"My Peace",
"My Home ❤️",
"Your Kind Heart",
"The Way You Care",
"The Way You Get Excited",
"The Way You Laugh",
"Everything About You ❤️"

];

compliments.forEach(text=>{

    const bubble = document.createElement("div");

    bubble.className = "compliment";

    bubble.innerHTML = text;

    bubble.style.left = Math.random()*82 + "%";

    bubble.style.top = Math.random()*85 + "%";

    bubble.style.transform =
        `rotate(${Math.random()*20-10}deg)`;

    bubble.onclick = ()=>{

        bubble.style.transform =
        "scale(1.3) rotate(0deg)";

        setTimeout(()=>{

            bubble.style.transform =
            `rotate(${Math.random()*20-10}deg)`;

        },250);

    };

    complimentWall.appendChild(bubble);

});
// ==========================================
// SLAP MUSTAFA
// ==========================================

const mustafaFace = document.getElementById("mustafaFace");
const slapCounter = document.getElementById("slapCounter");
const slapMessage = document.getElementById("slapMessage");
const continueButton = document.getElementById("continueButton");

let slaps = 0;

const slapTexts = [

"Ouch 😭",

"Fair enough...",

"I deserved that.",

"Please have mercy 😂",

"That one actually hurt.",

"Critical Hit!",

"Combo!",

"My fault 😭",

"Okay okay I'm listening.",

"You slap surprisingly hard.",

"I'm running out of cheeks.",

"My ancestors felt that.",

"Can we negotiate? 😂",

"Emotional Damage!",

"Still angry? 😭"

];

function randomSlapText(){

    return slapTexts[
        Math.floor(Math.random()*slapTexts.length)
    ];

}

function shakeScreen(){

    document.body.animate([

        {transform:"translateX(0px)"},
        {transform:"translateX(-6px)"},
        {transform:"translateX(6px)"},
        {transform:"translateX(-5px)"},
        {transform:"translateX(5px)"},
        {transform:"translateX(0px)"}

    ],{

        duration:180

    });

}

function floatingMessage(text){

    const div=document.createElement("div");

    div.innerHTML=text;

    div.style.position="fixed";

    const rect=mustafaFace.getBoundingClientRect();

    div.style.left=rect.left+rect.width/2+"px";

    div.style.top=rect.top+20+"px";

    div.style.transform="translateX(-50%)";

    div.style.fontWeight="700";

    div.style.color="#ff5d8f";

    div.style.pointerEvents="none";

    div.style.fontSize="20px";

    div.style.transition="all .8s ease";

    div.style.zIndex="999";

    document.body.appendChild(div);

    setTimeout(()=>{

        div.style.top=rect.top-40+"px";

        div.style.opacity="0";

    },30);

    setTimeout(()=>{

        div.remove();

    },900);

}

mustafaFace.addEventListener("click",()=>{

    slaps++;

    slapCounter.innerHTML=slaps+" / 10 Slaps";

    const msg=randomSlapText();

    slapMessage.innerHTML=msg;

    floatingMessage(msg);

    shakeScreen();

    mustafaFace.style.transform=
    `scale(.82) rotate(${Math.random()*16-8}deg)`;

    setTimeout(()=>{

        mustafaFace.style.transform="scale(1) rotate(0deg)";

    },100);

    if(slaps===10){

        continueButton.style.display="block";

        slapMessage.innerHTML="❤️ Hope you're feeling a little better now. You can still keep slapping me 😂";

    }

    if(slaps===25){

        slapMessage.innerHTML="🏆 Achievement Unlocked: Professional Mustafa Slapper";

    }

    if(slaps===50){

        slapMessage.innerHTML="😂 My face has officially stopped responding.";

    }

    if(slaps===75){

        slapMessage.innerHTML="😭 Are you done yet...?";

    }

    if(slaps===100){

        slapMessage.innerHTML="🏆 World Champion Mustafa Slapper.";

    }

});

continueButton.addEventListener("click",()=>{

    openScreen("dashboard");

});



// ==========================================
// ICE CREAM STACK
// ==========================================

const stackButton=document.getElementById("stackButton");
const iceCream=document.getElementById("iceCreamGame");

let scoops=1;

stackButton.addEventListener("click",()=>{

    if(Math.random()<0.18){

        iceCream.innerHTML="💥";

        setTimeout(()=>{

            scoops=1;

            iceCream.innerHTML="🍦";

        },900);

        return;

    }

    scoops++;

    let stack="";

    for(let i=0;i<scoops;i++){

        stack+="🍨<br>";

    }

    stack+="🍦";

    iceCream.innerHTML=stack;

});



// ==========================================
// GIFT WHEEL
// ==========================================

const spinButton=document.getElementById("spinWheel");
const wheel=document.getElementById("wheelDisc");
const wheelResult=document.getElementById("wheelResult");

const gifts=[

"🍦 Ice Cream",

"🎬 Movie Night",

"🍕 Food Date",

"☕ Coffee Date",

"💐 Flowers",

"🧸 Teddy Bear",

"🍫 Chocolate",

"🛍 Shopping",

"🎁 Surprise Gift",

"👑 Princess Treatment",

"❤️ One Wish Coupon",

"🎮 You Choose"

];

let rotation=0;

spinButton.addEventListener("click",()=>{

    const prize=
    Math.floor(Math.random()*gifts.length);

    rotation+=1440+(prize*30);

    wheel.style.transform=
    `rotate(${rotation}deg)`;

    setTimeout(()=>{

        wheelResult.innerHTML=
        "You won:<br><br>"+gifts[prize];

    },5000);

});



// ==========================================
// SECRET HEART
// ==========================================

document
.getElementById("secretHeart")
.addEventListener("click",()=>{

    openScreen("secret");

});
