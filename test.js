let User = {
FN: "Menna",
LS: "Rouby",
age: "7",
add: {
egypt: "giza",
usa: "DC",
ksa: "Riyadh",
getmainadd: function() {
    return `main add is ${User.add.egypt*360}`;
}
},
getage:()=>  `your age is ${User.age}`, 
getFullName: function() {
    return  `fullName : ${User.FN} ${User.LS}`;
},

};

let mainobj ={
    hasDiscount : true,
    showMsg : ()=>`you ${mainobj.hasDiscount ?"" :"Don't "} have discount`,
}
console.log(User.FN);
console.log(User.getFullName());
console.log(User.add.getmainadd());
console.log(typeof(User.add));
console.log(typeof(User.FN));
console.log(typeof(User.add.egypt));
console.log(User.getage());
console.log(mainobj.showMsg());
Object.assign(mainobj,User);
console.log(mainobj);