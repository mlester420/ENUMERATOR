import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DirectoryScan = () => {
  const [scanResults, setScanResults] = useState(null);
  const [scanType, setScanType] = useState('dirb');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/scan/${scanType}`);
        setScanResults(response.data);
      } catch (error) {
        console.error('Error fetching scan results:', error);
      }
    };

    fetchData();
  }, [scanType]);

  const handleScanTypeChange = (event) => {
    setScanType(event.target.value);
  };

  const goBackToMainPage = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Directory Scan</h2>
      <div>
        <label>
          <input
            type="radio"
            name="scanType"
            value="dirb"
            checked={scanType === 'dirb'}
            onChange={handleScanTypeChange}
          />
          Dirb Scan
        </label>
        <label>
          <input
            type="radio"
            name="scanType"
            value="nikto"
            checked={scanType === 'nikto'}
            onChange={handleScanTypeChange}
          />
          Nikto Scan
        </label>
      </div>
      <button onClick={goBackToMainPage}>Go Back to Main Page</button>
      {scanResults ? (
        <pre>{JSON.stringify(scanResults, null, 2)}</pre>
      ) : (
        <p>Loading scan results...</p>
      )}
    </div>
  );
};

export default DirectoryScan;