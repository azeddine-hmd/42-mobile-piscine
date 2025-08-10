import Button from "@/components/ui/button";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Home() {
	const simpleText = 'A simple text';
	const greetingText = 'Hello World!';
	const [text, setText] = useState(simpleText);

	const onButtonPressed = () => {
		console.log("Button Pressed");
		if (text !== greetingText)
			setText(greetingText);
		else
			setText(simpleText);
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 16,
			}}
		>
			<Text style={{ fontSize: 32 }} >{text}</Text>
			<Button onPress={onButtonPressed}>
				<Text style={{ fontSize: 24, color: "#fff" }} >Press me</Text>
			</Button>
		</View>
	);
}
