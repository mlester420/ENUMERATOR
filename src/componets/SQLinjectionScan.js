import axios from 'axios';

const SqlInjectioinScan = () => {
  const [scanResults, setScanResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/scan/SQL-Map');
        setScanResults(response.data);
      } catch (error) {
        console.error('Error fetching scan results:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Sql Injection Scan</h2>
      {scanResults ? (
        <pre>{JSON.stringify(scanResults, null, 2)}</pre>
      ) : (
        <p>Loading scan results...</p>
      )}
    </div>
  );
};

export default SqlInjectioinScan;
