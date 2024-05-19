app.get('/scan/xsser', (req, res) => {
    const target = req.query.target;
    exec(`xsser --url http://${target}`, (error, stdout, stderr) => {
      if (error) {
        console.error('Xsser scan failed:', stderr);
        res.status(500).send('Xsser scan failed.');
      } else {
        res.send(stdout);
      }
    });
  });
  res.json({ message: 'Xsser scanning completed' });
