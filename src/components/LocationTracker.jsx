import { useEffect, useState } from "react";
import { useUpdateData } from "../api/api";

const LocationTracker = ({ userId }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { updateData } = useUpdateData();

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Send location data to the server using Socket.IO
  useEffect(() => {
    updateData(`/v1/user/${userId}`, {
      liveLocation: currentLocation,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, currentLocation]);

  // Get user's initial location when component mounts
  useEffect(() => {
    getLocation();
  }, []);

  return <></>;
};

export default LocationTracker;
