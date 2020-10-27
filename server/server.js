import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Error")
        }
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})