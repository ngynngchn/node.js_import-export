const calculate = (num1, num2, operator) => {
	switch (operator) {
		case "+":
			return num1 + num2;
			break;
		case "-":
			return num1 - num2;
			break;
		case "/":
			return num1 / num2;
			break;
		case "*":
			return num1 * num2;
			break;
		default:
			return "NO MATCH";
			break;
	}
};
export default calculate;
