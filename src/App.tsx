// src/App.tsx
import React from 'react';
import SearchBar from './components/SearchBar';
import FlightList from './components/FlightList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">JetSetGo</h1>
      </header>
      <main className="p-4">
        <SearchBar />
        <FlightList />
      </main>
    </div>
  );
};

export default App;
