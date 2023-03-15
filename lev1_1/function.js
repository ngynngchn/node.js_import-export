function sortArray(arr) {
	if (typeof arr[0] == "number") {
		return arr.sort((a, z) => a - z);
	} else {
		return arr.sort();
	}
}

export default sortArray;
