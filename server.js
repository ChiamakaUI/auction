const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const createSocketServer = require('./app/websocket/server.js');
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3001
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const appCallback = async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
 
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }

const initApp = async () => {
    const server = await createServer(appCallback);

    server.once('error', (err) => {
        console.error(err)
        process.exit(1)
      });

    createSocketServer(server)

    server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
    })
}
 
app.prepare().then(initApp)