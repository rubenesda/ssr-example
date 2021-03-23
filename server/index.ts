import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import page from './html/htmlPage'; 

import html from './html';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
  const body = ReactDOMServer.renderToString(page());
  res.send(
    html({
      body
    })
  );
});

server.listen(3000, () => console.log('Example app listening on port 3000!'));