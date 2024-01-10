 let disValue = '';
 let buttons = document.querySelectorAll("button")
 //console.log(buttons);
 Array.from(buttons).map((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            disValue = eval(disValue);
            //console.log(disValue);
            document.querySelector('#display').value = disValue;
        }
        else if(e.target.innerHTML=='AC'){
            document.querySelector('#display').value='';
        }
        else {
            console.log(e.target);
            disValue = disValue + e.target.innerHTML;
            document.querySelector('#display').value = disValue;
        }
        
    })
 })
    
 

 