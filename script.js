



let inp =document.querySelector("#input");
let addBtn=document.querySelector("#addBtn");
let list=document.querySelector("#list");
let count=document.querySelector("#count");
list.innerHTML = localStorage.getItem("tasks") || "";

addBtn.addEventListener("click",function(val){
  val.preventDefault();

  if (inp.value.trim()==="") {
    return;
    
  }

  let li=document.createElement("li");
  li.textContent=inp.value;

  li.addEventListener("click",function(){
    if (li.style.textDecoration ==="line-through") {
      li.style.textDecoration = "none";
      
    } else {
li.style.textDecoration = "line-through";
    }
    saveData();
  });



  let delBtn=document.createElement("button");
  delBtn.textContent="x";

  delBtn.addEventListener("click",function(){
    li.remove();
    saveData();
  });

let editBtn = document.createElement("button");
editBtn.textContent = "edit";

editBtn.addEventListener("click", function() {
  let newText = prompt("Edit your task:", li.firstChild.textContent);

  if (newText !== null && newText.trim() !== "") {
    li.firstChild.textContent = newText;
    saveData();
  }
});


function updateCount(){
  count.textContent=`total tasks:${list.children.length}`;
}

inp.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

function filter(type) {
  let items = document.querySelectorAll("li");

  items.forEach(item => {
    let isDone = item.classList.contains("completed");

    if (type === "all") {
      item.style.display = "flex";
    } 
    else if (type === "active") {
      item.style.display = isDone ? "none" : "flex";
    } 
    else if (type === "done") {
      item.style.display = isDone ? "flex" : "none";
    }
  });
}

 inp.value="";
list.appendChild(li);
li.appendChild(editBtn);
li.appendChild(delBtn);

saveData();
});

function saveData(){
  localStorage.setItem("tasks",list.innerHTML);
}