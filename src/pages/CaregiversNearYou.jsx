import React, { useState, useEffect } from "react";
import { calculateDistance } from "../utils";
import Map from "./Map";
import { caregivers } from "./mcokdata";
import { useNavigate } from "react-router-dom"; // For navigation to details page

const DEFAULT_LOCATION = { latitude: 37.7749, longitude: -122.4194 };

function CaregiversNearYou() {
  const [userLocation, setUserLocation] = useState(null);
  const [caregiversWithDistance, setCaregiversWithDistance] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setZoomLevel(14);
      },
      (error) => {
        console.error("Location access denied. Using default location.");
        setUserLocation(DEFAULT_LOCATION);
        setZoomLevel(10);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      const caregiversWithDist = caregivers.map((caregiver) => ({
        ...caregiver,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          caregiver.lat,
          caregiver.lng
        ),
      }));
      setCaregiversWithDistance(
        caregiversWithDist.sort((a, b) => a.distance - b.distance)
      );
    }
  }, [userLocation]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Caregivers Near You
      </h2>
      <div className="mb-6">
        <Map
          userLocation={userLocation}
          zoomLevel={zoomLevel}
          caregivers={caregiversWithDistance}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caregiversWithDistance.map((caregiver) => (
          <div
            key={caregiver.id}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => navigate(`/caregiver/${caregiver.id}`)}
          >
            <img
              src={caregiver.image}
              alt={caregiver.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{caregiver.name}</h3>
            <p className="text-gray-600">Specialty: {caregiver.specialty}</p>
            <p className="text-gray-600">Rating: ⭐{caregiver.rating}</p>
            <p className="text-green-700 font-semibold">
              Distance: {caregiver.distance.toFixed(1)} km
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaregiversNearYou;
