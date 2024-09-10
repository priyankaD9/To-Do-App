
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let inp = document.querySelector("input");


btn.addEventListener("click",function(){
    // console.log("Task was submitted!");
    // console.log(inp.value);
    // inp.value = "";
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("del")
    item.appendChild(dltBtn);
    ul.appendChild(item);
     inp.value = "";

})

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
if(event.target.nodeName = "BUTTON"){
    let listItem = event.target.parentElement;
    // console.log(listItem);
    listItem.remove();
    console.log("removed");
}
})