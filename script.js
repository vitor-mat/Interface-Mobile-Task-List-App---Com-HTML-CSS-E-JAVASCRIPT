/*Time object */
let date = new Date

/*Elements from HTML */
    const elements = {
        /*Numbers clock*/
            clock: document.querySelector("#clock"),
        /*Stars icons */
            starIcon1: document.querySelector("#star-icon-1"),    
            starIcon2: document.querySelector("#star-icon-2"),    
            starIcon3: document.querySelector("#star-icon-3"),    
            starIcon4: document.querySelector("#star-icon-4"),
        /*trash icon */
            trashIcon1: document.querySelector("#trash-icon-1"),
        /*cheboxs divs */
            checkbox1: document.querySelector("#checkbox-1"),
            checkbox2: document.querySelector("#checkbox-2"),
            checkbox3: document.querySelector("#checkbox-3"),
            checkbox4: document.querySelector("#checkbox-4"),
        /*Text items */
            item1: document.querySelector("#item-1"),
            item2: document.querySelector("#item-2"),
            item3: document.querySelector("#item-3"),
            item4: document.querySelector("#item-4"),
        /*Icon items */
            icon1: document.querySelector("#icon-item-1"),
            icon2: document.querySelector("#icon-item-2"),
            icon3: document.querySelector("#icon-item-3"),
            icon4: document.querySelector("#icon-item-4"),
        /*Note of a item*/
            noteItem1: document.querySelector("#note-item-1")
    }

/*Clock function */
const clockFunction = setInterval(() => {

    date = new Date

    const time = {
        hour: date.getHours(),
        minute: date.getMinutes()
    }

    /*) before numbers*/
    if(time.hour < 13){
        /*before 1 pm */
        if(time.hour < 10 && time.minute < 10){
            elements.clock.innerHTML = `0${time.hour}:0${time.minute} AM`
        }else if(time.hour < 10 && time.minute > 10){
            elements.clock.innerHTML = `0${time.hour}:${time.minute} AM`
        }else if(time.hour > 10 && time.minute < 10){
            elements.clock.innerHTML = `${time.hour}:0${time.minute} AM`
        }else{
            elements.clock.innerHTML = `${time.hour}:${time.minute} AM`
        }
    }else{
        /*starter to 1 pm*/
        if(time.hour < 22 && time.minute < 10){
            elements.clock.innerHTML = `0${time.hour - 12}:0${time.minute} PM`
        }else if(time.hour < 22 && time.minute > 10){
            elements.clock.innerHTML = `0${time.hour - 12}:${time.minute} PM`
        }else if(time.hour > 22 && time.minute < 10){
            elements.clock.innerHTML = `${time.hour - 12}:0${time.minute} PM`
        }else{
            elements.clock.innerHTML = `${time.hour - 12}:${time.minute} PM`
        }
    }

    
}, 500);



/*Methods*/
const objMethods = {
    /*Coloring star method */
    starColor(value){
        if(value.fill != "yellow"){
                value.fill = "yellow"
        }else{
            value.fill = "black"
        }
    },
    /*Checked Method */
    checked(value1, value2, value3, value4 = undefined){
        if(value1.style.background != "blue"){
            value1.innerHTML = "✔"
            value1.style = 'background: blue; color: white'
            
            value2.style = "color: gray; text-decoration: line-through"
    
            value3.style.fill = "gray"

            if(!!value4){
                value4.style= "color: gray; text-decoration: line-through"
            }
        }else{
            value1.innerHTML = ""
            value1.style = 'background: white; color: black'   
            
            value2.style = "color: royalblue; text-decoration: none"
    
            value3.style.fill = "black"

            if(!!value4){
                value4.style= "color: rgb(126, 126, 126); text-decoration: none"
            }
        }
    }
}

/*coloring stars and trash */


elements.starIcon1.addEventListener("click", () => {
    objMethods.starColor(elements.starIcon1.style)
})
elements.starIcon2.addEventListener("click", event => {
    objMethods.starColor(elements.starIcon2.style)
})
elements.starIcon3.addEventListener("click", event => {
    objMethods.starColor(elements.starIcon3.style)
})
elements.starIcon4.addEventListener("click", event => {
    objMethods.starColor(elements.starIcon4.style)
})

elements.trashIcon1.addEventListener("click", event => {
    const listItemConcluded = document.querySelector('#list-item-concluded')
    
    listItemConcluded.classList.add('trash-animation')

    setTimeout(() => {
        listItemConcluded.classList.remove('trash-animation')
    }, 2000);
})

/*checked effect*/
elements.checkbox1.addEventListener("click", () => {

    objMethods.checked(elements.checkbox1, elements.item1, elements.icon1, elements.noteItem1)
})
elements.checkbox2.addEventListener("click", () => {

    objMethods.checked(elements.checkbox2, elements.item2, elements.icon2)
})
elements.checkbox3.addEventListener("click", () => {

    objMethods.checked(elements.checkbox3, elements.item3, elements.icon3)
})
elements.checkbox4.addEventListener("click", () => {

    objMethods.checked(elements.checkbox4, elements.item4, elements.icon4)
})

/*alert plus button */
document.getElementById("plus-button").addEventListener("click", () => alert("THIS MOBILE PAGE IS JUST A DEMOSTRATION OF DEVELOPER SKILLS"))
document.getElementById("three-dots").addEventListener("click", () => alert("THIS MOBILE PAGE IS JUST A DEMOSTRATION OF DEVELOPER SKILLS"))
document.getElementById("back-icon").addEventListener("click", () => alert("THIS MOBILE PAGE IS JUST A DEMOSTRATION OF DEVELOPER SKILLS"))


document.querySelector("#dots-div").addEventListener("mouseenter", () => alert("THIS MOBILE PAGE IS JUST A DEMOSTRATION OF DEVELOPER SKILLS"))