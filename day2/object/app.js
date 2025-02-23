// //object
// let person={
//     name : 'patti',
//     age : 20,
//     favcolor : 'pink'
// }
// //console.log(person);          
// console.log(person.name);
// console.log(person.age);
// console.log(person['name' ]);
// //change properties in object
// person.name = 'patti nalawade';
// //console.log(person);
// //adding new property

// //.gender ='female';
// //console.log(person);

// //del pro

// //delete person.favcolor;
// //console.log(person);

//advance object
let person={
         name : 'patti',
         age : 20,
        favcolor : 'pink',
        fun: function print(){
            return (`my nam is ${this.name} and  my age is ${this.age}`);
        },
        newObj:{
            gender : "female",
            address: "sid",  }
    }
    console.log(person.newObj.address);