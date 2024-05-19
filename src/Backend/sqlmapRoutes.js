app.get('/scan/sqlmap', (req, res) => {
    const target = req.query.target;
    exec(`sqlmap -u "http://${target}/?id=1" --batch`, (error, stdout, stderr) => {
      if (error) {
        console.error('SQLMap scan failed:', stderr);
        res.status(500).send('SQLMap scan failed.');
      } else {
        res.send(stdout);
      }
    });
  });
  res.json({ message: 'Web server scanning completed' });

  