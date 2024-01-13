// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let guestArr: string[] = ["Ahsen", "Rizwan", "Akhtar Hussain"];
let canNotattend: string = "Waseem";
let newGuest: string = "Faheem";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Nadeem");
let middleGuest: string = "Saad";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wasay");
// console.log(guestArr);


 console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");
