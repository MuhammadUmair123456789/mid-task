import React, { useState } from 'react';

const sampleData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },

    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
  
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
  
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
  
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
  
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
  
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
  
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
  
    { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
  
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  
  
];

function App() {
  const [filteredData, setFilteredData] = useState(sampleData);
  const [nameFilter, setNameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('All');
  const [occupationFilter, setOccupationFilter] = useState('All');

  const handleFilter = () => {
    const filteredResults = sampleData.filter((data) => {
      return (
        (data.name.toLowerCase().includes(nameFilter.toLowerCase()) || nameFilter === '') &&
        (data.age.toString().includes(ageFilter) || ageFilter === '') &&
        (cityFilter === 'All' || data.city === cityFilter) &&
        (occupationFilter === 'All' || data.occupation === occupationFilter)
      );
    });
    setFilteredData(filteredResults);
  };

  const handleResetFilters = () => {
    setNameFilter('');
    setAgeFilter('');
    setCityFilter('All');
    setOccupationFilter('All');
    setFilteredData(sampleData);
  };

  return (
    <div className="App">
      <h1>Data Filtering App</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <label>Age: </label>
        <input
          type="text"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        />
        <label>City: </label>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="All">All</option>
          {city=New York,San Francisco,Chicago,Los Angeles,Houston,Miami,Seattle,Boston,Denver}
        </select>
        <label>Occupation: </label>
        <select
          value={occupationFilter}
          onChange={(e) => setOccupationFilter(e.target.value)}
        >
          <option value="All">All</option>
          {occupation=Engineer,Designer,Accountant,Doctor,Artist,Software Engineer,Lawyer,Marketing Manager,Entrepreneur}
        </select>
        <button onClick={handleFilter}>Apply Filters</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.city}</td>
              <td>{data.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
