import React, { useState, useEffect } from 'react';
import './Logbook.css';

const socket = new WebSocket('ws://localhost:8080');

function Logbook() {
  const [basicDetails, setBasicDetails] = useState({
    supervisorName: '',
    supervisorID: '',
    inspectionTime: '',
    shift: 'Shift 1',
  });

  const [entries, setEntries] = useState([
    {
      methaneLevel: '',
      temperature: '',
      humidity: '',
      ventilationStatus: '',
      equipmentStatus: '',
      personnelCount: '',
      incidents: '',
    },
  ]);

  // Handle real-time updates from WebSocket
  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received update:', data);
      // Handle updates from the server
      if (data.type === 'updateLogbook') {
        setBasicDetails(data.basicDetails);
        setEntries(data.entries);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  // Handle changes to basic details and notify server
  const handleBasicDetailsChange = (event) => {
    const { name, value } = event.target;
    const updatedDetails = { ...basicDetails, [name]: value };
    setBasicDetails(updatedDetails);

    // Send update to server
    socket.send(
      JSON.stringify({
        type: 'updateBasicDetails',
        basicDetails: updatedDetails,
      })
    );
  };

  // Handle changes to entries and notify server
  const handleEntryChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEntries = entries.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );
    setEntries(updatedEntries);

    // Send update to server
    socket.send(
      JSON.stringify({
        type: 'updateEntries',
        entries: updatedEntries,
      })
    );
  };

  const addEntry = () => {
    const newEntry = {
      methaneLevel: '',
      temperature: '',
      humidity: '',
      ventilationStatus: '',
      equipmentStatus: '',
      personnelCount: '',
      incidents: '',
    };
    setEntries([...entries, newEntry]);

    // Notify server
    socket.send(
      JSON.stringify({
        type: 'addEntry',
        entry: newEntry,
      })
    );
  };

  const handleSubmit = () => {
    const logbookData = { basicDetails, entries };
    console.log('Submitting logbook:', logbookData);

    // Notify server
    socket.send(
      JSON.stringify({
        type: 'submitLogbook',
        data: logbookData,
      })
    );
    alert('Logbook data submitted!');
  };

  return (
    <div className="logbook-container">
      <h1>Supervisor Statutory Logbook (Real-Time)</h1>

      {/* Basic Details Section */}
      <div className="basic-details">
        <h2>Basic Details</h2>
        <form>
          <div className="form-group">
            <label>Supervisor Name:</label>
            <input
              type="text"
              name="supervisorName"
              value={basicDetails.supervisorName}
              onChange={handleBasicDetailsChange}
              placeholder="Enter supervisor name"
            />
          </div>
          <div className="form-group">
            <label>Supervisor ID:</label>
            <input
              type="text"
              name="supervisorID"
              value={basicDetails.supervisorID}
              onChange={handleBasicDetailsChange}
              placeholder="Enter supervisor ID"
            />
          </div>
          <div className="form-group">
            <label>Inspection Time:</label>
            <input
              type="datetime-local"
              name="inspectionTime"
              value={basicDetails.inspectionTime}
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

      {/* Logbook Entries */}
      <div className="logbook-entries">
        <h2>Logbook Entries</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <h3>Entry {index + 1}</h3>
            {/* Entry Fields */}
            {/* Add methane level, temperature, etc. */}
          </div>
        ))}
        <button onClick={addEntry} type="button" className="add-entry-btn">
          Add Another Entry
        </button>
      </div>

      {/* Submit Section */}
      <button onClick={handleSubmit} className="submit-btn">
        Save Logbook
      </button>
    </div>
  );
}

export default Logbook;
