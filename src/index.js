import ReactDom from 'react-dom';
import React from 'react';
import App from '@src/App';
console.log(NODE_ENV)
ReactDom.render(
  <App />, document.querySelector('#root')
)
