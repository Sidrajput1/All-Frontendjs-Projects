const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = document.getElementById("height");
  parseInt(height.value);
  const weight = document.getElementById("weight");
  parseInt(weight.value);
  const result = document.getElementById("results")
  //console.log(result);
  if(height===''|| height>0||isNaN(height)){
    result.innerHTML = `Please insert a valid height ${height}`
  }else if(weight===''|| weight>0|| isNaN(weight)){
    result.innerHTML= `plz insert a valid weight ${weight}`
  }else{
    const bmi = (weight/ ((height*height)/1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  }
});