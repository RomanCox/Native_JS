// Объект со сведениями о произошедшем событии
// в качестве параметра передается в обработчик (слушетель, лисенер и проч)

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")
const a = document.getElementById("a")
const onClickHandler = (e) => {
    /*e.stopPropagation()// функция, запрещаюшая событию двигаться дальше, в данном случе покажет только тот элемент на который нажали*/
    console.dir(e.currentTarget.id)
}

const onClickHandlerForaTag = (e) => {
    e.preventDefault() // предотваращает поведение по умолчанию события - напрмер отправки формы или перехода по ссылке
    console.dir(`${e.currentTarget.id} ${e.currentTarget.tagName}`)
}

/*sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler*/

// Более современеный синтаксис, вешать несколько обработчиков, не засовывая их в одну функцию

//sml.addEventListener("click", onClickHandler)
//big.addEventListener("click", ()=>alert())
//mdm.addEventListener("click", onClickHandler)
//big.addEventListener("click", onClickHandler) // если во всех укзаано true (options) - событие не всплывает, а погружается
//big.removeEventListener("click", onClickHandler) // удаляет обработчик события
a.addEventListener("click", onClickHandlerForaTag)

sml.addEventListener("click", (e)=>{
    if (e.target.tagName === "BUTTON") {
        console.log(e.target.id)
    }
}) // добавляет обработчик ко всем дочерним элементам