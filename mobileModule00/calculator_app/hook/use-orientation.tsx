import { useEffect, useState } from "react";
import { Orientation, addOrientationChangeListener, getOrientationAsync, removeOrientationChangeListener } from "expo-screen-orientation";

export type OrientationType = "portrait" | "landscape" | "unknown";

function orientationToLabel(orientation: Orientation | null): OrientationType {
  switch (orientation) {
    case Orientation.PORTRAIT_UP:
    case Orientation.PORTRAIT_DOWN:
      return "portrait";
    case Orientation.LANDSCAPE_LEFT:
    case Orientation.LANDSCAPE_RIGHT:
      return "landscape";
    case Orientation.UNKNOWN:
    default:
      return "unknown";
  }
}

export default function useOrientation() {
	const [orientation, setOrientation] = useState<OrientationType>("unknown");

	useEffect(() => {
		getOrientationAsync()
		.then((or) => { setOrientation(orientationToLabel(or)) })
		.catch((reason) => {
			console.error('Failed to get screen orientation');
			console.error(reason);
		});

		const sub = addOrientationChangeListener((e) => {
			setOrientation(orientationToLabel(e.orientationInfo.orientation));
		});

		return () => {
			removeOrientationChangeListener(sub);
		}
	}, [])


	return orientation;
}
