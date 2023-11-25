// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayFor=[];
const forArray=array.forEach(user=>arrayFor.push(user.username + "!"));
console.log(arrayFor);

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap=array.map(user=>user.username + "?");
console.log(arrayMap);

//Filter the array to only include users who are on team: red
const arrayFilter=array.filter(user=>user.team === "red");
console.log(arrayFilter);

//Find out the total score of all users using reduce
const arrayReduce=array.reduce((acc,user)=>{return user.score+acc},0);
console.log(arrayReduce);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map(user=> { user.items = user.items.map(item => item + "!"); return user;});
console.log(newList);
