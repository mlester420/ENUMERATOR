app.get('/scan/sublist3r', (req, res) => {
    const target = req.query.target;
    exec(`sublist3r -d ${target}`, (error, stdout, stderr) => {
      if (error) {
        console.error('Sublist3r scan failed:', stderr);
        res.status(500).send('Sublist3r scan failed.');
      } else {
        res.send(stdout);
      }
    });
  });
  res.json({ message: 'Subdomain scanning completed' });
