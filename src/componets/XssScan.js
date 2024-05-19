const XssScan = () => {
    const [scanResults, setScanResults] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/scan/Xsser');
          setScanResults(response.data);
        } catch (error) {
          console.error('Error fetching scan results:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>Web Server Scan</h2>
        {scanResults ? (
          <pre>{JSON.stringify(scanResults, null, 2)}</pre>
        ) : (
          <p>Loading scan results...</p>
        )}
      </div>
    );
  };
  
  export default XssScan;