import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caregivers } from "./mcokdata";
import Map from "./Map";

const CaregiverDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caregiver = caregivers.find(
    (caregiver) => caregiver.id === parseInt(id)
  );
  const [appointment, setAppointment] = useState({ date: "", time: "" });

  if (!caregiver) {
    return <p className="text-center text-red-500">Caregiver not found.</p>;
  }

  const handleBooking = () => {
    console.log("Appointment Booked:", appointment);
    alert("Appointment booked successfully!");
    navigate("/appointments");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{caregiver.name}</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 text-lg mb-4">{caregiver.specialty}</p>
        <div className="mb-6">
          <Map
            userLocation={{ latitude: caregiver.lat, longitude: caregiver.lng }}
            zoomLevel={15}
            caregivers={[caregiver]} // Only show this caregiver on the map
          />
        </div>
        <p className="text-gray-700 mb-2">Contact: {caregiver.contact}</p>
        <p className="text-gray-700 mb-4">Bio: {caregiver.bio}</p>

        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Select Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={(e) =>
              setAppointment({ ...appointment, date: e.target.value })
            }
          />

          <label className="block text-gray-700 mb-2">Select Time</label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={(e) =>
              setAppointment({ ...appointment, time: e.target.value })
            }
          />

          <button
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            onClick={handleBooking}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaregiverDetails;
