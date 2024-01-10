const takeInput = document.querySelector("input")
//console.log(takeInput);
const todoList = document.querySelector(".todolist")
const clearBtn = document.querySelector("button");
const addBTn = document.querySelector("#add");
// const pendingTask = document.querySelector(".pendingTasks");
// console.log(pendingTask);

takeInput.onkeyup = ()=>{
    let userEnterValue = takeInput.value;
    if(userEnterValue.trim()!=0){
        addBTn.classList.add("active")
    }else{
        addBTn.classList.remove("active")
    }
}
displayTask();
//let listOfArray= [];
addBTn.onclick = ()=>{
    console.log("clicked");
    let userEnterValue = takeInput.value;
    let getLocalStorage = localStorage.getItem("New data");
    if(getLocalStorage==null){
        listOfArray = []

    }else{
        listOfArray = JSON.parse(getLocalStorage)
    }
    listOfArray.push(userEnterValue);
    localStorage.setItem("New data",JSON.stringify(listOfArray));
    displayTask();
    addBTn.classList.remove("active");

}

function displayTask(){
    let listOfArray;

    let getLocalStorage = localStorage.getItem("New data")
    if(getLocalStorage==null){
        listOfArray = []
    }else{
        listOfArray = JSON.parse(getLocalStorage)
    }

    const pendingTask = document.querySelector(".pendingTasks");
    //console.log(pendingTask)
    if(pendingTask!=null){
        pendingTask.textContent = listOfArray.length;
    }

    

    if(listOfArray.length>0){
        clearBtn.classList.add("active")
    }else{
        clearBtn.classList.remove("active")
    }
    let newLiTag = "";
    listOfArray.forEach((element,index)=>{
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    takeInput.value = "";

}

// function deleteTask(index){
//     let getLocalStorage = localStorage.getItem("New Data");
//     listOfArray = JSON.parse(getLocalStorage);
//     // listOfArray.splice(index,1);
//     // localStorage.setItem("New data",JSON.stringify(listOfArray));
//     // displayTask();
//     if (index >= 0 && index < listOfArray.length) {
//         listOfArray.splice(index, 1);
//         localStorage.setItem("New Data", JSON.stringify(listOfArray));
//         displayTask();
//     } else {
//         console.error('Invalid index');
//     }

// }

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Data");
    //let listOfArray;

    if (getLocalStorage == null) {
        // If there is no data in local storage, handle it as needed
        console.error('No data found in local storage');
        return;
    } else {
        listOfArray = JSON.parse(getLocalStorage);
    }

    // Check if the index is within bounds before using splice
    if (index >= 0 && index < listOfArray.length) {
        listOfArray.splice(index, 1);
        localStorage.setItem("New Data", JSON.stringify(listOfArray));
        displayTask();
    } else {
        console.error('Invalid index');
    }
}

clearBtn.onclick =() =>{
    listOfArray = []
    localStorage.setItem("New data",JSON.stringify(listOfArray));
    displayTask();
}