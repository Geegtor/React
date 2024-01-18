import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Main } from './Main';

const App = (function () {
  function App() {
    this.render();
  }
  App.prototype.render = function () {
    ReactDOM.render(React.createElement(Main, { app: this }), document.getElementById('app'));
  };
  return App;
}());
export { App };
new App();
// # sourceMappingURL=App.js.map
