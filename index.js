//Modal

const signinBtn = document.getElementById("sign-in")
const closeBtn = document.getElementById("close-btn")

signinBtn.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "block"
    document.getElementById("modal").style.display = "block"
})

closeBtn.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "none"
    document.getElementById("modal").style.display = "none"
})

//Carousel

const carouselItems = document.getElementsByClassName("carousel-item")
const prevBtn = document.getElementById("carousel-button-prev")
const nextBtn = document.getElementById("carousel-button-start")
let currentPosition = 0
let totalItems = carouselItems.length

nextBtn.addEventListener("click", function(){
    if(currentPosition === totalItems-1){
        currentPosition = 0
    }else[
        currentPosition++
    ]
    hideAllItems()
    carouselItems[currentPosition].classList.add("carousel-item-visible")
})


prevBtn.addEventListener("click", function(){
    if(currentPosition === 0){
        currentPosition = totalItems -1
    }else{
        currentPosition--
    }
    hideAllItems()
    carouselItems[currentPosition].classList.add("carousel-item-visible")
})

function hideAllItems(){
    for(let item of carouselItems){
        item.classList.remove("carousel-item-visible")
        item.classList.add("carousel-item-hidden")
    }
}






//Search Bar
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const allNames = document.getElementsByClassName("name")

searchInput.addEventListener("keyup", function(event){
    const searchQuery = event.target.value.toLowerCase()

    for(let i = 0; i < allNames.length; i++){
        let currentName = allNames[i].textContent.toLowerCase()
        if(currentName.includes(searchQuery)){
            allNames[i].style.display = "block"
        }else{
            allNames[i].style.display = "none"
        }
    }
    console.log(searchQuery)
})