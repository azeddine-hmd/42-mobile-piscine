import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default async function requestLocationPermission() {
  console.log('Requesting location permission...');
  const { status } = await Location.getForegroundPermissionsAsync();
  if (status !== 'granted')
    Alert.alert('Permission required', 'Location permission is needed to use this feature.');
  return status === 'granted';
}
