app.get('/scan/dirb', (req, res) => {
    const target = req.query.target;
    exec(`dirb http://${target}`, (error, stdout, stderr) => {
      if (error) {
        console.error('Dirb scan failed:', stderr);
        res.status(500).send('Dirb scan failed.');
      } else {
        res.send(stdout);
      }
    });
  });
  res.json({ message: 'Directory scanning completed' });

