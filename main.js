/****** Shallow Copy ******/
const personOne = {
    name: "John",
    age:35,
    country: "US"
}

//create copy of personOne and update name of copy
const copyOne = personOne;
copyOne.name = "Peter";

//Updating both copy and original object values
console.log("personOne -> "+Object.values(personOne));
console.log("copyOne -> "+Object.values(copyOne));

/****** Deep Copy ******/
const personTwo = {
    name: "Kevin",
    age:30,
    country: "UK"
}

//create copy of personTwo and update name of copy
const copyTwo = JSON.parse(JSON.stringify(personTwo));
copyTwo.name = "James";

//Updating only copy, original object will not change
console.log("personTwo -> "+Object.values(personTwo));
console.log("copyTwo -> "+Object.values(copyTwo));


/****** Deep Copy Alternative ******/
const personThree = {
    name: "Smith",
    age:40,
    country: "AUS"
}

//create copy of personThree and update name of copy
const copyThree = {...personThree};
copyThree.name = "David";

//Updating only copy, original object will not change
console.log("personThree -> "+Object.values(personThree));
console.log("copyThree -> "+Object.values(copyThree));