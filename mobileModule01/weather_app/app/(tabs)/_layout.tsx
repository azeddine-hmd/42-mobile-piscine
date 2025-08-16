import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import Separator from '~/components/Separator';
import { cn } from '~/lib/cn';
import { useColorScheme } from '~/lib/useColorScheme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 8 },
        headerTitleContainerStyle: { width: '100%' },
        headerRight: () => <HeaderRight />,
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
  return (
    <Link href="/geolocation" asChild>
      <Pressable className="opacity-80" style={{ marginRight: 8 }}>
        {({ pressed }) => (
          <View className={cn(pressed ? 'opacity-50' : 'opacity-90')}>
            <FontAwesome size={20} name="location-arrow" color={colors.foreground} />
          </View>
        )}
      </Pressable>
    </Link>
  );
}
