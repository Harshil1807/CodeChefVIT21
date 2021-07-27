const test = document.querySelector('.test')
const txt = 'CODECHEF' /* The text */
const speed = 10 /* The speed/duration of the effect in milliseconds */
const shuffleCount = 6
const random = "*&%!1234567ABC"
const LIMIT = txt.length
const sliceNo = LIMIT-1

let i = 0
let shuffle = 0 
let mojicount = 0


setInterval(()=>{
  triggerScramble()
},2000)


function scramble()
{
 const PROGRESS = test.textContent.length;
  
 if(PROGRESS<LIMIT)
 {  
  if (shuffle<shuffleCount){
    const mix = Math.floor(Math.random()*(random.length))
    const output = txt.slice(0,mojicount)
    test.innerText = output + random[mix]
    shuffle++
    setTimeout(scramble,speed)
    }
    else{ 
    mojicount++
    shuffle=0 
    scramble()
    }   
 } 
   else{ if(PROGRESS>=LIMIT){test.innerText = txt }}
}  


/*reset and shuffle*/
function triggerScramble(){
  shuffle = 0
  mojicount = 0
  test.innerText = ""
  scramble()
 }

