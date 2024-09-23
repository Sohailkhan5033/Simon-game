let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let button=document.querySelector("#removebtn");
let indexInput=document.querySelector("#index");

inp.addEventListener("keypress",function(e) {
    if(e.key === "Enter"){
        addItem();
    }
});

btn.addEventListener("click",function(e)
 {    addItem();
   
});

function addItem(){
    if(inp.value!=""){
        let li=document.createElement("li"); 
        li.textContent=inp.value;
        ul.appendChild(li);
        inp.value="";
    }
}


indexInput.addEventListener("keypress", function(e) {
   
  update()
});

button.addEventListener("click",function(e) {
    update();
});
function update(){
    let index = parseInt(indexInput.value)-1;
        
    if (!isNaN(index) && index >= 0 && index < ul.children.length) {
        ul.children[index].remove();  // Remove the list item at the specified index
    } else {
        alert("Invalid index");
    }
    indexInput.value = "";  // Clear the input after removing
}




