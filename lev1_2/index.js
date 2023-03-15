import { names, numbers, unique } from "./data.js";
import {
	getAllButLast,
	getFirstElement,
	getLastElement,
	getAllButFirst,
	removeElement,
	getUniqueElements,
	sumOfArr,
	getRandomNum,
	capitalizeFirstLetter,
	capitalizeAll,
	checkLastLetter,
} from "./function.js";

console.log("💡 ~ getAllButLast(names):", getAllButLast(names));
console.log("💡 ~ getAllButLast(numbers):", getAllButLast(numbers));

console.log("💡 ~ getFirstElement(names):", getFirstElement(names));
console.log("💡 ~ getFirstElement(numbers):", getFirstElement(numbers));

console.log("💡 ~ getLastElement(names):", getLastElement(names));
console.log("💡 ~ getLastElement(numbers):", getLastElement(numbers));

console.log("💡 ~ getAllButFirst(names):", getAllButFirst(names));
console.log("💡 ~ getAllButFirst(numbers):", getAllButFirst(numbers));

console.log(
	"💡 ~ removeElement:",
	removeElement(["remove", "stay", "stay5", 22, true, "remove"], "remove")
);

console.log("💡 ~ getUniqueElements(unique):", getUniqueElements(unique));

console.log("💡 ~ sumOfArr(numbers):", sumOfArr(numbers));

console.log("💡 ~ getRandomNum(2,3):", getRandomNum(2, 3));

console.log("💡 ~ capitalizeFirst:", capitalizeFirstLetter("we are strong."));

console.log(
	"💡 ~ capitalizeAll('we are strong'):",
	capitalizeAll("we are strong")
);

console.log('💡 ~ checkLastLetter("text" ,"t"):', checkLastLetter("text", "t"));
console.log('💡 ~ checkLastLetter("text" ,"p"):', checkLastLetter("text", "p"));
