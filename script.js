const screens={intro:document.getElementById("intro"),envelope:document.getElementById("envelopeScreen"),letter:document.getElementById("letterScreen"),story:document.getElementById("storyScreen"),final:document.getElementById("finalScreen")};
const heartsContainer=document.querySelector(".hearts"),startBtn=document.getElementById("startBtn"),envelope=document.getElementById("envelope"),envelopeHint=document.getElementById("envelopeHint"),storyBtn=document.getElementById("storyBtn"),finalBtn=document.getElementById("finalBtn"),replayBtn=document.getElementById("replayBtn"),typedMessage=document.getElementById("typedMessage");
const loveMessage = `Hey mooki ❤️

Just a Reminder.. 
YOU are the most LUCKEIST thing that happened in MY LIFE😘!!.. 
MY CORTIS🌍!!! 

For me I always have faith in what I see, Now I know I have my Kids MOM who is gonna be OUR Angel🧚🏼,
MY ALWAYS 🌙,
MY GURL💋.

I just wanna say maybe life is not gentle with me or life is not getting any better or like im not a perfecct guy to hang around BUT...
irrespective of all these things in my life, i have FUNN things., that is YOU...
You are not only a good thing in my life.. YOU are a BELESSING, which I got for no reason, literally i don"t know why GOD chose me to bless in this way. but i just wanna say THANKYOU to you and  
And I'm forever greatful for Sarala n that goldDigger for Giving
 You to ME❤️.

I LOVE YOU 🌹.`;

function showScreen(next){Object.values(screens).forEach(s=>s.classList.remove("active"));next.classList.add("active")}
function createHeart(){const h=document.createElement("div");h.className="heart-float";h.textContent=Math.random()>.25?"♥":"♡";h.style.left=Math.random()*100+"%";h.style.fontSize=14+Math.random()*22+"px";h.style.animationDuration=5+Math.random()*5+"s";heartsContainer.appendChild(h);setTimeout(()=>h.remove(),11000)}
setInterval(createHeart,450);for(let i=0;i<12;i++)setTimeout(createHeart,i*180);
startBtn.addEventListener("click",()=>showScreen(screens.envelope));
function openEnvelope(){if(envelope.classList.contains("open"))return;envelope.classList.add("open");envelopeHint.textContent="Opening something from my heart... ❤️";setTimeout(()=>{showScreen(screens.letter);typeMessage()},1100)}
envelope.addEventListener("click",openEnvelope);envelope.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openEnvelope()}});
function typeMessage(){typedMessage.textContent="";let i=0;const t=setInterval(()=>{typedMessage.textContent+=loveMessage[i++];if(i>=loveMessage.length)clearInterval(t)},22)}
storyBtn.addEventListener("click",()=>showScreen(screens.story));
finalBtn.addEventListener("click",()=>showScreen(screens.final));
replayBtn.addEventListener("click",()=>{envelope.classList.remove("open");envelopeHint.textContent="Tap the envelope 💌";showScreen(screens.intro)});