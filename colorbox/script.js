// const boxes = document.getElementsByClassName('box');
// console.log(boxes)
// const perBox = [...boxes]
// console.log(perBox);

// approch one for all boxes
// perBox.map((box)=>{
//     box.addEventListener('click',function(){
//         //box.style.backgroundColor = "red"
//         //box.style.backgroundColor=""
//         if(box.style.backgroundColor === "red"){
//             box.style.backgroundColor = ""

//         }else{
//             box.style.backgroundColor = "red"
//         }
        
//     })
  
// })

const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")

box1.addEventListener('click',function(){
    if(box1.style.backgroundColor == "green"){
        box1.style.backgroundColor = ""
    }else{
        box1.style.backgroundColor = "green"
    }
    //box1.style.backgroundColor = "green"
    
});

console.log(box1);

box2.addEventListener('click',function(){
    if(box2.style.backgroundColor == "red"){
        box2.style.backgroundColor = ""
    }else{
        box2.style.backgroundColor = "red"
    }
});

