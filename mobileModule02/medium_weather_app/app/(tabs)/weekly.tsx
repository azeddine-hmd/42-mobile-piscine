import { View } from 'react-native';

import { Container } from '~/components/Container';
import { Text } from '~/components/nativewindui/Text';
import { useLocationStore } from '~/stores/locationStore';

export default function WeeklyTab() {
  const { location } = useLocationStore();

  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Text>Weekly Window</Text>
        <Text>{location}</Text>
      </View>
    </Container>
  );
}
