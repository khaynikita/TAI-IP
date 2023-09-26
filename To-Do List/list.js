var input=document.getElementById("taskInput")
var taskList=document.getElementById("taskList")
function addTask()
{
    if(input.value===" "){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        taskList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);


    }
    input.value=" ";
    saveData();
}
taskList.addEventListener("click",function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

})
function saveData()
{
    localStorage.setItem("data",taskList.innerHTML);
}
function display()
{
    taskList.innerHTML=localStorage.getItem("data");
}
display();