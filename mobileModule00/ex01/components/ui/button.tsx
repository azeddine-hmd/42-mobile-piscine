import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function Button({ style, children, ...rest }: TouchableOpacityProps) {
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: "#000",
					padding: 12,
					borderRadius: 4,
				},
				style,
			]}
			activeOpacity={0.4}
			{...rest}
		>
			{children}
		</TouchableOpacity >
	);
}
