
const insert = document.getElementById('insert')
const insert2 = document.getElementById("heading")


window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class='magic'>
    <table>
       <tr>
         <th>key</th>
         <th>keyCode</th>
         <th>code</th>
       </tr>
       <tr>
         <th>${e.key==" "?`space`:e.key} </th>
         <th>${e.keyCode}</th>
         <th>${e. code}</th>
       </tr>

    </table>   
  <div> `
  insert2.innerHTML = `<h3>Yes,it is works<h3>`
  insert2.style.color = "orange";
  insert2.style.margin ="20px";

  
})