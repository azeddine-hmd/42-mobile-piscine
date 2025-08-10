import { useState } from "react";
import { Parser } from "expr-eval";

const parser = new Parser({
	operators: {
		add: true,
		subtract: true,
		multiply: true,
		divide: true,
		// disable defaults
		concatenate: false,
		conditional: false,
		factorial: false,
		power: false,
		remainder: false,
		logical: false,
		comparison: false,
		in: false,
		assignment: false,
	}
});

export default function useCalculator() {
	const [exp, setExp] = useState("0");
	const [res, setRes] = useState("0");

	const isOperator = (key: string): boolean => ["+", "-", "x", "/"].includes(key);

	const isNumber = (key: string): boolean => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"].includes(key);

	// get last number in string if nothing found return null
	const getLastNumber = (str: string): string | null => {
		let i = str.length - 1;
		let count = 0;
		while (i >= 0 && !isOperator(str[i])) {
			i--;
			count++;
		}
		if (count === 0)
			return null;
		return str.slice(i + 1);
	};

	const isNumberDecimel = (str: string): boolean => {
		if ((str.split(".").length - 1) === 1) {
			return true;
		}
		return false;
	};

	const clearAll = () => {
		setExp("0");
		setRes("0");
	};

	const clear = () => {
		if (exp.length === 1) {
			setExp("0");
		} else {
			setExp(exp.slice(0, -1));
		}
	}

	const appendNumber = (number: string) => {
		if (exp === "0") {
			if (!["0", "00"].includes(number)) {
				setExp(number);
			}
		} else {
			setExp(exp + number);
		}
	};

	const appendOperator = (operator: string) => {
		if (exp.length === 1 && exp[0] === "0") {
			if (operator === "-") {
				setExp("-");
			}
			return;
		} else if (isOperator(exp.slice(-1))) {
			if (operator === "-") {
				setExp(exp + operator);
			} else {
				setExp(exp.slice(0, -1) + operator);
			}
		} else {
			setExp(exp + operator);
		}
	};


	const appendDecimelPoint = () => {
		const lastNumber = getLastNumber(exp);
		console.log("lastNumber:", lastNumber);
		if (lastNumber && !isNumberDecimel(lastNumber)) {
			setExp(exp + ".");
		}
	};

	const showResult = () => {
		try {
			// replace "x" with "*"
			const normalizedExp = exp.replaceAll("x", "*");
			console.log("expression:", normalizedExp);
			const expr = parser.parse(normalizedExp);
			const result = expr.evaluate();
			setRes(result);
		} catch (err) {
			console.error("Error:\n", err);
			setRes("Error")
		}
	};

	const onCalcButtonPressed = (key: string) => {
		console.log(`button pressed :${key}`);

		if (key === "AC") {
			clearAll();
		} else if (key === "C") {
			clear();
		} else if (isNumber(key)) {
			appendNumber(key);
		} else if (isOperator(key)) {
			appendOperator(key)
		} else if (key === ".") {
			appendDecimelPoint();
		} else if (key === "=") {
			showResult();
		}
	};

	return { exp, res, onCalcButtonPressed };
}
