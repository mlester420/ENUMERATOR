app.get('/scan/nikto', (req, res) => {
    const target = req.query.target;
    exec(`nikto -h ${target}`, (error, stdout, stderr) => {
      if (error) {
        console.error('Nikto scan failed:', stderr);
        res.status(500).send('Nikto scan failed.');
      } else {
        res.send(stdout);
      }
    });
  });
  res.json({ message: 'Web server scanning completed' });
