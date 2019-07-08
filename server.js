/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');
const compression = require('compression');

const routes = require('./src/routes');

const isDev = process.env.NODE_ENV === 'development';

// On dev, load the env variables from the `.env` file but on production don't (the variables are loaded from the k8s instance)
if (isDev) {
    require('dotenv').config();
}

const port = parseInt(process.env.APP_PORT, 10) || 80;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(compression());

        server.get('*', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname } = parsedUrl;

            // handle GET request to /service-worker.js
            if (pathname === '/service-worker.js') {
                const filePath = join(__dirname, '.next', pathname);

                app.serveStatic(req, res, filePath);
            } else {
                handler(req, res, parsedUrl);
            }
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    });
