import { View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';
import { Container } from '~/components/Container';
import { useLocationStore } from '~/stores/locationStore';

export type WeatherContentProps = {
  tab: 'Currently' | 'Today' | 'Weekly';
};

export default function WeatherContent({ tab }: WeatherContentProps) {
  const { isPermissionGranted, location } = useLocationStore();

  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        {!isPermissionGranted && !location ? (
          <Text variant="callout" className="text-center font-medium text-destructive">
            Geolocation is not available, please enable
            {'\n'}
            it in your App settings
          </Text>
        ) : (
          <>
            <Text>{tab} Window</Text>
            <Text>
              {typeof location !== 'string'
                ? `${location?.latitude} ${location?.longitude}`
                : location}
            </Text>
          </>
        )}
      </View>
    </Container>
  );
}
