import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Separator from '~/components/Separator';
import { cn } from '~/lib/cn';
import { useColorScheme } from '~/lib/useColorScheme';
import { SearchInput } from '~/components/SearchInput';
import { useLocationStore } from '~/stores/locationStore';
import requestLocationPermission from '~/lib/location/requestLocationPermission';
import requestLocationData from '~/lib/location/requestLocationData';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 8 },
        headerTitleContainerStyle: { width: '100%' },
        headerRight: () => <HeaderRight />,
        headerTitle: () => <HeaderTitle />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Currently',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="clock-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="today"
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="sun-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="weekly"
        options={{
          title: 'Weekly',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="calendar" color={color} />,
        }}
      />
    </Tabs>
  );
}

function HeaderRight() {
  return (
    <View className="flex-1 flex-row items-center justify-center gap-3 space-x-2">
      <Separator />
      <GeolocationButton />
    </View>
  );
}

function GeolocationButton() {
  const { colors } = useColorScheme();
  const { isPermissionGranted, setPermissionGranted, setLocation } = useLocationStore();

  const geolocationButtonPressed = async () => {
    if (isPermissionGranted) {
      const coords = await requestLocationData();
      if (coords) setLocation(coords);
    } else {
      const isGranted = await requestLocationPermission();
      if (isGranted) {
        setPermissionGranted(true);
        const coords = await requestLocationData();
        if (coords) setLocation(coords);
      }
    }
  };

  return (
    <Pressable
      className="opacity-80"
      style={{ marginRight: 8 }}
      onPress={async (e) => await geolocationButtonPressed()}>
      {({ pressed }) => (
        <View className={cn(pressed ? 'opacity-50' : 'opacity-90')}>
          <FontAwesome size={20} name="location-arrow" color={colors.foreground} />
        </View>
      )}
    </Pressable>
  );
}

function HeaderTitle() {
  const { setLocation, text, setText } = useLocationStore();

  return (
    <SearchInput
      value={text}
      onChangeText={setText}
      onSubmitEditing={(e) => {
        const text = e.nativeEvent.text;
        if (text.trim() !== '') setLocation(e.nativeEvent.text);
      }}
    />
  );
}
