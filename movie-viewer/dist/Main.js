import * as React from 'react';

const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== 'function' && b !== null) { throw new TypeError(`Class extends value ${String(b)} is not a constructor or null`); }
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());

const Main = (function (_super) {
  __extends(Main, _super);
  function Main(props) {
    return _super.call(this, props) || this;
  }
  Main.prototype.render = function () {
    return (React.createElement(React.Fragment, null, 'Main app'));
  };
  return Main;
}(React.Component));
export { Main };
// # sourceMappingURL=Main.js.map
