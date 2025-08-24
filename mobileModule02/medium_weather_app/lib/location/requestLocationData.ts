import * as Location from 'expo-location';
import { Alert } from 'react-native';

/**
	make sure location permission is granted before calling this function
**/
export default async function requestLocationData(): Promise<{
  latitude: number;
  longitude: number;
} | null> {
  console.log('About to request user city location from user');

  try {
    // get last known location
    let locationObj = await Location.getLastKnownPositionAsync();

    if (!locationObj) {
      const serviceEnabled = await Location.hasServicesEnabledAsync();
      if (!serviceEnabled) {
        Alert.alert(
          'Location Services Disabled',
          "Your device's location services are turned off. Please enable them in Settings."
        );
        return null;
      }

      locationObj = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      if (!locationObj) {
        Alert.alert(
          'Unable to determine location',
          "We couldn't fetch your current location. Please try again in an open area with better GPS signal."
        );
        return null;
      }
    }

    const { latitude, longitude } = locationObj.coords;
    return { latitude, longitude };
  } catch (err) {
    console.error('Error getting location:', err);
  }

  return null;
}
