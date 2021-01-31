document.getElementById("add-task").addEventListener('click', function(){
    
    let task = document.getElementById('input-a-task').value;
    const currentTask = document.createElement('li');
    currentTask.innerText = task;
    if(task == ""){
        alert('There is no task!');
    }
    else{
        document.getElementById('task-list').appendChild(currentTask);
    }
    document.getElementById('input-a-task').value = "";
    
});