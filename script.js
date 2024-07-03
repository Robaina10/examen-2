const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AgregarTarea(){
    if(inputbox.value === ''){
        alert("Por favor escriba algo!");
    }                                   
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    imputbox.value = '';
    saveData();

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function mostrarTarea(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
mostrarTarea();

