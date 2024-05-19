import React, { useState } from 'react';
import axios from 'axios';

const NmapScan = () => {
  const [target, setTarget] = useState('');
  const [scanResults, setScanResults] = useState('');

  const handleScan = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/scan/nmap?target=${target}`);
      setScanResults(response.data);
    } catch (error) {
      console.error('Nmap scan failed:', error);
      setScanResults('Nmap scan failed. Please check the console for more details.');
    }
  };

  return (
    <div>
      <h2>Nmap Scan</h2>
      <form onSubmit={handleScan}>
        <input
          type="text"
          placeholder="Enter target URL or IP"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button type="submit">Scan</button>
      </form>
      <pre>{scanResults}</pre>
    </div>
  );
};

export default PortScanner.js;