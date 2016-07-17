
import express from 'express';
import path from 'path';

export default function startServer() {
	const port = 3000;

	const server = express();

  server.use('/public', express.static(path.join(__dirname, '/dist/')));
  server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });

  server.listen(port, () => {
    console.log("Http server is listening on port " + port);
  });
}
