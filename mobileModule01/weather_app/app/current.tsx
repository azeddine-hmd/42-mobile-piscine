import { Container } from "~/components/Container";
import { Button } from "~/components/nativewindui/Button";
import { Text } from "~/components/nativewindui/Text";

export default function CurrentScreen() {
	return (
		<Container>
			<Text variant="body" >Hello World!</Text>
			<Button>
				Press Me!
			</Button>
		</Container>
	);
}
