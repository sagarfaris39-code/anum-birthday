// ======================
// LOADING SCREEN
// ======================

window.onload = function(){

    setTimeout(function(){

        document.getElementById("loadingScreen").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("loadingScreen").style.display = "none";

        },2000);

    },3000);

}
const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

document.body.appendChild(star);

}

const beginBtn = document.getElementById("beginBtn");

beginBtn.onclick=function(){

document.querySelector(".welcome").style.display="none";

document.getElementById("envelopeScreen").style.display="flex";

}
// Open Envelope

const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");

// =========================
// LETTER SCREEN
// =========================

const letterScreen = document.getElementById("letterScreen");
const paper = document.querySelector(".paper");
const typedText = document.getElementById("typedText");

const message = `Dear Anum ❤️,

Happy 18th birthday!

Today is your special day.

I wanted to create something that wasn't just another message...

I wanted to create a memory.

So every time you visit this little website,
I hope it reminds you that someone took the time
to make something just for you.

May this year bring you happiness,
peace,
laughter,
and dreams that come true.

Keep smiling.

Keep believing in yourself.

And never forget how wonderful you are.

Happy Birthday once again.

— Mister ❤️`;

seal.onclick = function(){
    typedText.innerHTML = "";
index = 0;

    envelope.classList.add("open");

    setTimeout(function(){

        document.getElementById("envelopeScreen").style.opacity="0";

    },1800);

    setTimeout(function(){

        document.getElementById("envelopeScreen").style.display="none";

        letterScreen.style.display="flex";

        setTimeout(function(){

            paper.classList.add("show");

            typeWriter();

        },300);

    },2600);

};

let index = 0;

function typeWriter(){

    if(index < message.length){

    typedText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeWriter,35);

}
else{

    setTimeout(function(){

        continueBtn.style.display="block";

    },2000);

}
}
const continueBtn = document.getElementById("continueBtn");

function createPetal(){

    let petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = (6 + Math.random()*5) + "s";

    document.body.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },11000);

}

setInterval(createPetal,700);
// ======================
// CONTINUE TO CAKE
// ======================

const cakeScene = document.getElementById("cakeScene");

continueBtn.onclick = function(){

    letterScreen.style.display="none";

    cakeScene.style.display="flex";

}
// ======================
// BLOW OUT CANDLES
// ======================

const finalScene = document.getElementById("finalScene");

let blownOut = 0;

document.querySelectorAll(".candle").forEach(candle=>{

    candle.onclick=function(){

        let flame = candle.querySelector(".flame");

        if(flame.style.display==="none") return;

        flame.style.display="none";

        blownOut++;

        if(blownOut===3){

            setTimeout(function(){

                cakeScene.style.opacity="0";

            },1000);

            setTimeout(function(){

                cakeScene.style.display="none";

                finalScene.style.display="flex";

                startFireworks();

            },2500);

        }

    }

});
// ======================
// FIREWORKS
// ======================

function startFireworks(){

    setInterval(function(){

        let firework=document.createElement("div");

        firework.innerHTML="🎆";

        firework.style.position="fixed";

        firework.style.left=Math.random()*100+"vw";

        firework.style.top=Math.random()*60+"vh";

        firework.style.fontSize=(40+Math.random()*50)+"px";

        firework.style.zIndex="999";

        firework.style.animation="fadeFirework 1.5s forwards";

        document.body.appendChild(firework);

        setTimeout(()=>firework.remove(),1500);

    },700);

}
function createSparkle(){

    if(letterScreen.style.display!="flex") return;

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=(20+Math.random()*60)+"vw";

    sparkle.style.top=(20+Math.random()*60)+"vh";

    sparkle.style.fontSize=(12+Math.random()*18)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>sparkle.remove(),4000);

}

setInterval(createSparkle,800);
// ======================
// FLOATING HEARTS
// ======================

function createHeart(){

    if(letterScreen.style.display !== "flex") return;

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=(10+Math.random()*80)+"vw";

    heart.style.top="95vh";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },6000);

}

setInterval(createHeart,1200);