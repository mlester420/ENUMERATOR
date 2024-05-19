app.get('/api/port-scan', (req, res) => {
    const target = req.query.target;
  exec(`nmap -p- ${target}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Nmap scan failed:', stderr);
      res.status(500).send('Nmap scan failed.');
    } else {
      res.send(stdout);
    }
  });
});
    res.json({ message: 'Port scanning completed' });


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
