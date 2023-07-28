function changedColor() {
    let element2 = document.getElementById("el"); 
    console.log(element2);
    if (element2.classList.contains("girl")) 
         element2.classList.remove("girl");
    else 
        element2.classList.add("girl");
    element2.classList.toggle(girl);
    element2.textContent = "Девочки";
}

let btn2 = document.getElementById("btn1");
console.log(btn2);
btn2.addEventListener('click', changedColor);
//не работает кнопка