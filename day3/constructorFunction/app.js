// function Details(){
// this.name = "patti";
// this.age= 20;
// this.address = "sidnal"
//}
//let user = new Details();
//console.log(user.name);

//custom cus

 function Details(){
 this.name = "patti";
 this.age= 20;
 this.address = "sidnal";
 this.description =function(){
    return (`my name is ${this.name},my age is${this.age}`)
 }
}
let user = new Details("patti",20,"sid");
let user1= new Details("raja",20,"npn");
let user2 = new Details("sammi",22,"kagal");
console.log(user);
console.log(user.description());
console.log(user1);
console.log(user.description());
console.log(user2);
console.log(user2.description());
console.log(user2);

