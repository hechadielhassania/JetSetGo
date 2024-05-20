import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { fetchFlights } from '../slices/flightSlice';

const FlightList: React.FC = () => {
  const dispatch = useDispatch();
  const { flights, status, error } = useSelector((state: RootState) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading flights...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              <h2>Price: {flight.price.formatted}</h2>
              <p>Origin: {flight.legs[0].origin.name}</p>
              <p>Destination: {flight.legs[0].destination.name}</p>
              <p>Departure: {flight.legs[0].departure}</p>
              <p>Arrival: {flight.legs[0].arrival}</p>
              <p>Duration: {flight.legs[0].durationInMinutes} minutes</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightList;
