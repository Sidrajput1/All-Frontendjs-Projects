
// function doubleArray(arr,callback){
//      const doublearr = arr.map((num)=>{
//          return callback(num)
//      });
//      return doublearr;
// }

// let arr = [1,2,3,4,5];

// function callback(num){
//     return num*2;
// }

// const doubledArray = doubleArray(arr,callback);
// console.log(doubledArray);

// function manipulateString(str,callback){
//     const convertTo = str.toUpperCase()
//     callback(convertTo);

// }

//const str = "hello,I am using callback";

// function callback(convertTo){
//     console.log(`The new string is ${convertTo}`)

// }
// manipulateString("rishu",callback);
const person = 
    {
        firstname:"darpan",
        lastname:"singh",
        age: 20,
    }

function ageInDays(person,callback){
     let fullName = `${person.firstname}${person.lastname}`
     let a = (person.age)*365;
     callback(fullName,a)
}



 function callback(fullName,a){
    console.log(`Persons full name is ${fullName} and age in ${a}`);

 }   
 ageInDays(person,callback);
