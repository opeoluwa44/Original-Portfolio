//////////////// Navigation Command lines////////////////
const navKey =document.querySelectorAll(".nav_item")

navKey.forEach(nav=>{
    nav.addEventListener("click", function(){

        navKey.forEach(open=>open.classList.remove("active"))

        this.classList.add("active")

    })

})

////////////////End of Navigation Command lines////////////////



/////////// Skills Command Lines////////////
/*
const offset = document.querySelector("circle")
console.log(offset)
offset.animate([{strokeDashoffset:"70.8"}], {duration:2000})
*/

const numbered = document.querySelector(".number")
const numbered1 = document.querySelector(".number1")
const numbered2 = document.querySelector(".number2")
const numbered3 = document.querySelector(".number3")

let countel = 0
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

function counter(element, countel, num, time){
    
    setInterval(()=>{
        if(countel===num){
            clearInterval()
        }else{
            countel++
        element.innerHTML = countel + "%"
        }
        
    },time)
    
}

counter(numbered, count1, 85, 23)
counter(numbered1, count2, 80, 23)
counter(numbered2, count3, 75, 25)
counter(numbered3, count4, 70, 28)

///////////End of Skills Command Lines////////////
/*
const container = document.querySelector(".skills_container")
const skillView = document.querySelector(".skill_cap")
console.log(container)
*/



const bubbles = document.querySelectorAll(".bubble")

for(let i=0; i<bubbles.length; i++){
    bubbles[i].animate([
        {transform: 'scale(.1)'},
        {transform:'scale(1.3)'},
        {transform:'scale(.1)'}

    ], { duration:2000, 
         iterations:Infinity,
         delay: 300 * i

        
    })
}



const front = document.querySelector(".front")
const register =document.querySelector(".front .button")

register.addEventListener("click", ()=>{
    front.classList.add("open")
})


const nightMode = document.querySelectorAll(".mode")
const modeBox = document.querySelector(".light_shift")

 nightMode.forEach(el => {
    el.addEventListener("click", (e)=>{
        targetEl = e.target
        targetId = targetEl.id
        document.body.classList.toggle("night_mode")
        nightMode.forEach(el=>{
            el.removeAttribute("hidden")
            modeBox.querySelector(`#${targetId}`).setAttribute("hidden", true)
        })
       
    })
 });

         
 