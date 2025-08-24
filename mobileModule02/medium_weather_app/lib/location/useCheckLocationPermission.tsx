import { useCallback, useEffect } from 'react';
import { useLocationStore } from '~/stores/locationStore';
import requestLocationPermission from './requestLocationPermission';
import requestLocationData from './requestLocationData';

export default function useCheckLocationPermission() {
  const { isPermissionGranted, setPermissionGranted, setLocation } = useLocationStore();

  const checkPermission = useCallback(async () => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      const coords = await requestLocationData();
      if (coords) setLocation(coords);
    }
    setPermissionGranted(isGranted);
  }, [setPermissionGranted, setLocation]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return isPermissionGranted;
}
