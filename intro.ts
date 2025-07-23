function logpoint1(p: string | number) {
    console.log(typeof p);
  }

logpoint1("Ram");


type WindowStates = string | Number;
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

var windowState: WindowStates= 1222222222222;
console.log(windowState)

type Username = string;
type Age = number;
type IsActive = boolean;

// var name: Username = "Alice";
// var age: Age = 25;
// var active: IsActive = true;

// interface User {
//     name: string;
//     id: number;
//   }
   
//   const user: User = {
//     username: "Hayes",
//     id: 0,
//   }

//  let user= { name: "Yash", age: 25};
//  console.log("Yash");
//  console.log(user.email);