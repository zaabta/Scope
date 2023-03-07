const pragarph = document.querySelector("p");
const btn = document.querySelector(".btn")
const loadingImg = document.querySelector(".loading")

let isLoading = false

const getAdvice = async () => {
    try{
        isLoading = true
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        isLoading = false
        return data
    } catch(err){
        console.log("ERROR--> ", err)
        return null
    }
};

isLoading = true // when the page is one for the first time
if(isLoading) loadingImg.style.display = "block"
getAdvice().then( ({ slip }) =>  {
    isLoading = false
    if(!isLoading) loadingImg.style.display = "none"
    pragarph.innerHTML = slip.advice
})

btn.addEventListener("click", ()=> {
    isLoading = true // when the page is one for the first time
    pragarph.innerHTML = ""
    if(isLoading) loadingImg.style.display = "block"
    getAdvice().then( ({slip}) => {
        loadingImg.style.display = "none"
        pragarph.innerHTML = slip.advice
    })
})





