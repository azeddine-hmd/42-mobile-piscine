import { useState } from "react";

export default function useCalculator() {
	const [exp] = useState("0");
	const [res] = useState("0");

	const onCalcButtonPressed = (key: string) => {
		console.log(`button pressed :${key}`);
	};

	return { exp, res, onCalcButtonPressed };
}
