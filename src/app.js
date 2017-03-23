import Test from './components/test/test.js';
import './css/common.css';

const App = function () {
  let dom = document.querySelector('#app');
  let test = new Test();
  dom.innerHTML = test.tpl({
    name: 'wp'
  });
};

new App();