// import Test from './components/test/test.js';
// import './css/common.css';

// const App = function () {
//   let dom = document.querySelector('#app');
//   let test = new Test();
//   dom.innerHTML = test.tpl({
//     name: 'wp'
//   });
// };
//
// new App();
import React from 'react';
import ReactDom from 'react-dom';
import LifeCycle from './components/lifeCycle/lifeCycle';

ReactDom.render(
  <LifeCycle />,
  document.querySelector('#app')
);
