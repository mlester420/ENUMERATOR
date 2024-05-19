import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainPage = ({ targetIP, setTargetIP }) => {
    const [ipInfo, setIpInfo] = useState(null);

    const handleIpInfo = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io/${targetIP}`);
        const { ip, hostname, city, region, country, postal, timezone } = response.data;
        setIpInfo({ ip, hostname, city, region, country, postal, timezone });
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };
  
    return (
      <div>
        <h2>Main Page</h2>
        <div>
          <label>Target IP:</label>
          <input
            type="text"
            value={targetIP}
            onChange={(e) => setTargetIP(e.target.value)}
          />
          <button onClick={handleIpInfo}>Get IP Info</button>
        </div>
        {ipInfo && (
          <div>
            <h3>IP Info:</h3>
            <p>IP: {ipInfo.ip}</p>
            <p>Hostname: {ipInfo.hostname}</p>
            <p>City: {ipInfo.city}</p>
            <p>Region: {ipInfo.region}</p>
            <p>Country: {ipInfo.country}</p>
            <p>Postal: {ipInfo.postal}</p>
            <p>Timezone: {ipInfo.timezone}</p>
          </div>
        )}
      <div>
        <Link to="/port-scan">Port Scan</Link>
      </div>
      <div>
        <Link to="/web-server-scan">Web Server Scan</Link>
      </div>
      <div>
        <Link to="/subdomain-scan">Subdomain Scan</Link>
      </div>
      <div>
        <Link to="/directory-scan">Directory Scan</Link>
      </div>
      <div>
        <Link to="/xss-scan">XSS Scan</Link>
      </div>
      <div>
        <Link to="/sql-injection-scan">SQL Injection Scan</Link>
      </div>
    </div>
  );
};

export default MainPage;