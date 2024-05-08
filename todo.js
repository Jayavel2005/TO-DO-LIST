var newtask=document.querySelector("#enter_task")
var newlistitem=document.querySelector("#todo-list")

function addtask()
{
    task=document.createElement("li")
    task.innerHTML='<input type="checkbox"  onclick="strike(event)">' + newtask.value + '<i class="fa-solid fa-trash" onclick="deleteitem(event)" title="REMOVE"></i>'
    newlistitem.append(task)
}

function deleteitem(event)
{
    event.target.parentElement.remove()
}


