'use client';
import React, { useState } from "react";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];





export default function StateSearchBox() {
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState(statesOfIndia);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    const results = statesOfIndia.filter((state) =>
      state.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredStates(results);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Search Indian States</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Type state name..."
        className="border rounded p-2 w-full"
      />

      <ul className="border mt-2 rounded max-h-60 overflow-y-auto">
        {filteredStates.length > 0 ? (
          filteredStates.map((state, idx) => (
            <li
              key={idx}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setSearch(state)}
            >
              {state}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
     


    </div>
  );
}

