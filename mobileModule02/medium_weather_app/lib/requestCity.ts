import * as Location from 'expo-location';

export default async function requestCity(): Promise<string | null> {
	console.log('About to request location permission from user');
	try {
		// asking for location permission
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			console.error('Permission to access location was denied');
			return null;
		}

		// get last known location
		const locationObj = await Location.getLastKnownPositionAsync();
		if (!locationObj) {
			console.error('Failed to locate user location');
			return null;
		}

		const { latitude, longitude } = locationObj.coords;
		const places = await Location.reverseGeocodeAsync({ latitude, longitude });
		if (places.length > 0) {
			const { city } = places[0];
			console.log('User is in:', city);
			if (!city) {
				console.error("city not found inside place");
				return null;
			} else {
				return city;
			}
		} else {
			console.error("places is empty!");
		}
	} catch (err) {
		console.error("Error getting location:", err);
	}

	return null;
}
