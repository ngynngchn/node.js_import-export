const getFirstElement = (arr) => arr[0];

const getAllButLast = (arr) => arr.slice(0, arr.length - 1);

const getLastElement = (arr) => arr[arr.length - 1];

const getAllButFirst = (arr) => arr.slice(1, arr.length);

const removeElement = (arr, elementToRemove) =>
	arr.filter((element) => element !== elementToRemove);

const getUniqueElements = (arr) => {
	let unique = [];
	arr.map((element) => {
		if (!unique.includes(element)) {
			unique.push(element);
		} else {
			return;
		}
	});
	return unique;
};

const sumOfArr = (arr) => {
	let sum = 0;
	arr.map((element) => {
		sum = sum + element;
	});
	return sum;
};

// const getRandomNum = (num1, num2) => {
// 	let random = Math.random();
// 	if (random > num1 && random < num2) {
// 		return random;
// 	} else {
// 		return getRandomNum(num1, num2);
// 	}
// };

const getRandomNum = (min, max) => {
	return Math.random() * (max - min + 1) + min;
};

const capitalizeFirstLetter = (str) =>
	str.replace(str[0], str[0].toUpperCase());

const capitalizeAll = (str) => str.toUpperCase();

const checkLastLetter = (str, letter) => {
	if (str[str.length - 1] == letter) {
		console.log(str[str.length - 1]);
		return true;
	} else {
		return false;
	}
};

export {
	getFirstElement,
	getAllButLast,
	getLastElement,
	getAllButFirst,
	removeElement,
	getUniqueElements,
	sumOfArr,
	getRandomNum,
	capitalizeFirstLetter,
	capitalizeAll,
	checkLastLetter,
};
