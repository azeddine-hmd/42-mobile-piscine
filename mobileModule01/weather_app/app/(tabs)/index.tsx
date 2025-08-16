import { useEffect } from 'react';
import { View } from 'react-native';

import { Container } from '~/components/Container';
import { Text } from '~/components/nativewindui/Text';
import { useHeaderSearchBarCustom } from '~/lib/useHeaderSearchBarCustom';

export default function CurrentlyTab() {
  const searchValue = useHeaderSearchBarCustom();

  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Text>Currently Window</Text>
        <Text>{searchValue}</Text>
      </View>
    </Container>
  );
}
