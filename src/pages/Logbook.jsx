import React, { useState } from 'react';
import './Logbook.css';

function Logbook() {
  const [basicDetails, setBasicDetails] = useState({
    name: '',
    time: '',
    shift: 'Shift 1',
  });

  const [entries, setEntries] = useState([
    {
      methaneLevel: '',
      temperature: '',
      equipmentStatus: '',
      incidents: '',
    },
  ]);

  // Handle basic details change
  const handleBasicDetailsChange = (event) => {
    const { name, value } = event.target;
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle entry changes
  const handleEntryChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEntries = entries.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );
    setEntries(updatedEntries);
  };

  // Add a new entry
  const addEntry = () => {
    setEntries([
      ...entries,
      {
        methaneLevel: '',
        temperature: '',
        equipmentStatus: '',
        incidents: '',
      },
    ]);
  };

  // Submit logbook data
  const handleSubmit = () => {
    console.log('Submitting logbook data:', { basicDetails, entries });
    alert('Logbook data saved!');
  };

  return (
    <div className="logbook-container">
      <h1>Coal Mine Logbook</h1>

      {/* Basic Details Section */}
      <div className="basic-details">
        <h2>Basic Details</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={basicDetails.name}
              onChange={handleBasicDetailsChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label>Time:</label>
            <input
              type="datetime-local"
              name="time"
              value={basicDetails.time}
              onChange={handleBasicDetailsChange}
            />
          </div>
          <div className="form-group">
            <label>Shift:</label>
            <select
              name="shift"
              value={basicDetails.shift}
              onChange={handleBasicDetailsChange}
            >
              <option>Shift 1</option>
              <option>Shift 2</option>
              <option>Shift 3</option>
            </select>
          </div>
        </form>
      </div>

      {/* Logbook Entry Section */}
      <div className="logbook-entries">
        <h2>Logbook Entries</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <h3>Entry {index + 1}</h3>
            <div className="form-group">
              <label>Methane Level (%):</label>
              <input
                type="number"
                name="methaneLevel"
                value={entry.methaneLevel}
                onChange={(e) => handleEntryChange(index, e)}
                placeholder="Enter methane level"
              />
            </div>
            <div className="form-group">
              <label>Temperature (°C):</label>
              <input
                type="number"
                name="temperature"
                value={entry.temperature}
                onChange={(e) => handleEntryChange(index, e)}
                placeholder="Enter temperature"
              />
            </div>
            <div className="form-group">
              <label>Equipment Status:</label>
              <textarea
                name="equipmentStatus"
                value={entry.equipmentStatus}
                onChange={(e) => handleEntryChange(index, e)}
                placeholder="Enter equipment status"
              />
            </div>
            <div className="form-group">
              <label>Incidents:</label>
              <textarea
                name="incidents"
                value={entry.incidents}
                onChange={(e) => handleEntryChange(index, e)}
                placeholder="Describe incidents (if any)"
              />
            </div>
          </div>
        ))}
        <button onClick={addEntry} type="button" className="add-entry-btn">
          Add Another Entry
        </button>
      </div>

      {/* Submit Button */}
      <div className="submit-section">
        <button onClick={handleSubmit} className="submit-btn">
          Save Logbook
        </button>
      </div>

      {/* Preview Section */}
      <div className="preview">
        <h2>Live Preview</h2>
        <pre>{JSON.stringify({ basicDetails, entries }, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Logbook;
