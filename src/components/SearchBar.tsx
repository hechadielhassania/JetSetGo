// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFlights } from '../slices/flightSlice';

const SearchBar: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchFlights({ origin, destination, departureDate }));
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Origin</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
