import React, { useState } from 'react';
import './Logbook.css';

function Logbook() {
  const [selectedLogbook, setSelectedLogbook] = useState(null);
  const [logbookData, setLogbookData] = useState({
    logbook1: '',
    logbook2: '',
    logbook3: '',
  });

  // Handle logbook selection
  const handleLogbookSelection = (type) => {
    setSelectedLogbook(type);
  };

  // Handle logbook data change
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setLogbookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit logbook data (placeholder for backend integration)
  const handleSubmit = () => {
    console.log('Submitting logbook data:', logbookData);
    // Later, send `logbookData` to backend via API
    alert('Logbook data saved!');
  };

  return (
    <div className="logbook-container">
      <h1>Logbook Options</h1>
      <div className="logbook-buttons">
        <button onClick={() => handleLogbookSelection('logbook1')}>Logbook 1</button>
        <button onClick={() => handleLogbookSelection('logbook2')}>Logbook 2</button>
        <button onClick={() => handleLogbookSelection('logbook3')}>Logbook 3</button>
      </div>

      {selectedLogbook && (
        <div className="logbook-editor">
          <h2>{selectedLogbook} Editor</h2>
          <textarea
            name={selectedLogbook}
            value={logbookData[selectedLogbook]}
            onChange={handleDataChange}
            placeholder={`Enter data for ${selectedLogbook}`}
          />
          <button onClick={handleSubmit}>Save Logbook</button>
        </div>
      )}
    </div>
  );
}

export default Logbook;
