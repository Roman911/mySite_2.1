webpackJsonp([0],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(408);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        { className: 'about-me' },
        React.createElement(
          'div',
          { className: 'page-content-M' },
          React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
              'h4',
              null,
              'ABOUT ME'
            ),
            React.createElement(
              'p',
              { className: 'italic' },
              'I love photography'
            ),
            React.createElement(
              'p',
              null,
              'We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            )
          ),
          React.createElement(
            'div',
            { className: 'grid-container' },
            React.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6' },
              React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                  'p',
                  null,
                  React.createElement(
                    'b',
                    null,
                    React.createElement('i', { className: 'fa fa-user' }),
                    ' My Name:'
                  )
                ),
                React.createElement(
                  'p',
                  null,
                  'Roman Lysyk'
                ),
                React.createElement('img', { src: __webpack_require__(409), alt: '' })
              )
            ),
            React.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6' },
              React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                  'p',
                  null,
                  'Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'content-block' },
            React.createElement(
              'p',
              null,
              'Im really good at:'
            ),
            React.createElement(
              'div',
              { className: 'properties' },
              React.createElement(
                'div',
                { className: 'properties__header' },
                React.createElement('i', { className: 'fa fa-camera' }),
                React.createElement(
                  'p',
                  null,
                  ' Photography'
                )
              ),
              React.createElement(
                'div',
                { className: 'properties__bar' },
                React.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  React.createElement(
                    'p',
                    null,
                    '90 %'
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'properties__header' },
                React.createElement('i', { className: 'fa fa-laptop' }),
                React.createElement(
                  'p',
                  null,
                  ' Web Design'
                )
              ),
              React.createElement(
                'div',
                { className: 'properties__bar' },
                React.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  React.createElement(
                    'p',
                    null,
                    '85 %'
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'properties__header' },
                React.createElement('i', { className: 'fa fa-photo' }),
                React.createElement(
                  'p',
                  null,
                  ' Photoshop'
                )
              ),
              React.createElement(
                'div',
                { className: 'properties__bar' },
                React.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  React.createElement(
                    'p',
                    null,
                    '75 %'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.About = About;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(366);


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(149);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(150);

var _reactRouterDom = __webpack_require__(108);

var _navbarComponent = __webpack_require__(402);

var _home = __webpack_require__(405);

var _footer = __webpack_require__(418);

var _gallery = __webpack_require__(420);

var _about = __webpack_require__(163);

var _contacts = __webpack_require__(429);

__webpack_require__(431);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import { CatalogComponent } from './scripts/components/catalog/catalog.component.jsx';
_reactDom2.default.render(React.createElement(
  'div',
  null,
  React.createElement(
    _reactRouterDom.HashRouter,
    null,
    React.createElement(
      'div',
      { className: 'page-wrapper' },
      React.createElement(_navbarComponent.NavbarComponent, null),
      React.createElement(
        _reactRouterDom.Switch,
        null,
        React.createElement(_reactRouterDom.Route, { path: '/home', render: function render() {
            return React.createElement(_home.HomePage, null);
          } }),
        React.createElement(_reactRouterDom.Route, { path: '/gallery', render: function render() {
            return React.createElement(_gallery.Gallery, null);
          } }),
        React.createElement(_reactRouterDom.Route, { path: '/about', render: function render() {
            return React.createElement(_about.About, null);
          } }),
        React.createElement(_reactRouterDom.Route, { path: '/contacts', render: function render() {
            return React.createElement(_contacts.Contacts, null);
          } }),
        React.createElement(_reactRouter.Redirect, { path: '/', to: '/home' })
      ),
      React.createElement(_footer.Footer, null)
    )
  )
), document.getElementById('page')); // eslint-disable-line

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _navbar = __webpack_require__(403);

var _reactRouterDom = __webpack_require__(108);

__webpack_require__(404);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var NavbarComponent = function (_Component) {
  _inherits(NavbarComponent, _Component);

  function NavbarComponent() {
    _classCallCheck(this, NavbarComponent);

    return _possibleConstructorReturn(this, (NavbarComponent.__proto__ || Object.getPrototypeOf(NavbarComponent)).apply(this, arguments));
  }

  _createClass(NavbarComponent, [{
    key: 'render',
    value: function render() {
      var links = _navbar.navbarItems.map(function (item, i) {
        return React.createElement(
          _reactRouterDom.NavLink,
          { key: Symbol(i).toString(), className: item.class, to: item.route },
          React.createElement(
            'p',
            null,
            item.title
          )
        );
      });

      return React.createElement(
        'nav',
        { className: 'navbar' },
        links
      );
    }
  }]);

  return NavbarComponent;
}(_react.Component);

exports.NavbarComponent = NavbarComponent;

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarItems = [{
  title: 'home',
  route: '/home',
  class: 'navbar-link'
}, {
  title: 'gallery',
  route: '/gallery',
  class: 'navbar-link fa fa-th'
}, {
  title: 'about',
  route: '/about',
  class: 'navbar-link fa fa-user-secret'
}, {
  title: 'contacts',
  route: '/contacts',
  class: 'navbar-link fa fa-envelope'
}];

exports.navbarItems = navbarItems;

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _header = __webpack_require__(406);

var _about = __webpack_require__(163);

var _other = __webpack_require__(410);

var _portfolio = __webpack_require__(412);

var _works = __webpack_require__(414);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(_header.Header, null),
        React.createElement(_about.About, null),
        React.createElement(_other.Other, null),
        React.createElement(_portfolio.Portfolio, null),
        React.createElement(_works.Works, null)
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.HomePage = HomePage;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(407);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        { className: 'header' },
        React.createElement(
          'div',
          { className: 'header__logo' },
          React.createElement(
            'h1',
            null,
            'MY WEBSITE LOGO'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.Header = Header;

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_02.jpg";

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Other = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(411);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Other = function (_Component) {
  _inherits(Other, _Component);

  function Other() {
    _classCallCheck(this, Other);

    return _possibleConstructorReturn(this, (Other.__proto__ || Object.getPrototypeOf(Other)).apply(this, arguments));
  }

  _createClass(Other, [{
    key: 'render',
    value: function render() {

      var date = new Date();
      var years = date.getFullYear();
      var start = 2012;
      var year = years - start;

      return React.createElement(
        'section',
        { className: 'other' },
        React.createElement(
          'div',
          { className: 'item year' },
          React.createElement(
            'h3',
            null,
            year,
            '+'
          ),
          React.createElement(
            'p',
            null,
            'Years'
          )
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'h3',
            null,
            '55+'
          ),
          React.createElement(
            'p',
            null,
            'Projects Done'
          )
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'h3',
            null,
            '89+'
          ),
          React.createElement(
            'p',
            null,
            'Happy Clients'
          )
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'h3',
            null,
            '150+'
          ),
          React.createElement(
            'p',
            null,
            'Meetings'
          )
        )
      );
    }
  }]);

  return Other;
}(_react.Component);

exports.Other = Other;

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(413);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Portfolio = function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        { className: 'portfolio relative' },
        React.createElement(
          'div',
          { className: 'portfolio__header' },
          React.createElement(
            'h2',
            null,
            'PORTFOLIO'
          )
        )
      );
    }
  }]);

  return Portfolio;
}(_react.Component);

exports.Portfolio = Portfolio;

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Works = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(110);

var _classnames2 = _interopRequireDefault(_classnames);

var _works = __webpack_require__(415);

__webpack_require__(416);

__webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Works = function (_Component) {
  _inherits(Works, _Component);

  function Works(props) {
    _classCallCheck(this, Works);

    var _this = _possibleConstructorReturn(this, (Works.__proto__ || Object.getPrototypeOf(Works)).call(this, props));

    _this.state = {
      modal: false
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
    return _this;
  }

  _createClass(Works, [{
    key: 'addClass',
    value: function addClass() {
      this.setState({
        modal: true
      });
    }
  }, {
    key: 'removeClass',
    value: function removeClass() {
      this.setState({
        modal: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var img = _works.imgItems.map(function (item) {
        return React.createElement(
          'div',
          { key: item.id, className: 'content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3' },
          React.createElement(
            'div',
            { className: 'item' },
            React.createElement('img', { onClick: _this2.addClass, src: item.imgUrl, alt: '' })
          )
        );
      });

      return React.createElement(
        'section',
        { className: 'works' },
        React.createElement(
          'div',
          { className: 'page-content-M' },
          React.createElement(
            'div',
            { className: 'content-wrapper' },
            React.createElement(
              'h3',
              null,
              'MY WORK'
            ),
            React.createElement(
              'p',
              null,
              'Here are some of my latest lorem work ipsum tipsum.',
              React.createElement('br', null),
              'Click on the images to make them bigger'
            ),
            React.createElement(
              'div',
              { className: 'grid-container' },
              img
            ),
            React.createElement(
              'div',
              { className: (0, _classnames2.default)('modalBg', { 'showed': this.state.modal }) },
              React.createElement('div', { className: 'modalWindow' }),
              React.createElement(
                'button',
                { onClick: this.removeClass },
                'remove class'
              )
            ),
            React.createElement(
              'div',
              { className: 'btn' },
              React.createElement(
                'a',
                { href: '/#/gallery' },
                React.createElement(
                  'button',
                  null,
                  'GALLERY'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Works;
}(_react.Component);

exports.Works = Works;

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgItems = [{
  id: '001',
  title: 't',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '002',
  title: 't1',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '003',
  title: 't2',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '004',
  title: 't3',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '005',
  title: 't4',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '006',
  title: 't5',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '007',
  title: 't6',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '008',
  title: 't7',
  imgUrl: 'assets/images/foto_01.jpg'
}];

exports.imgItems = imgItems;

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(419);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var date = new Date();
      var year = date.getFullYear();

      return React.createElement(
        'footer',
        { className: 'footer' },
        React.createElement(
          'div',
          { className: 'content-wrapper' },
          React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
              'a',
              { href: 'https://www.facebook.com/romalysyk', target: '_blank' },
              React.createElement('i', { className: 'fa fa-facebook-official' })
            ),
            React.createElement(
              'a',
              { href: 'https://www.instagram.com/romanlysyk/', target: '_blank' },
              React.createElement('i', { className: 'fa fa-instagram' })
            ),
            React.createElement(
              'a',
              { href: 'https://plus.google.com/u/0/110130571380761850863', target: '_blank' },
              React.createElement('i', { className: 'fa fa-google-plus' })
            ),
            React.createElement(
              'a',
              { href: 'https://photographers.ua/RomanLisik/', target: '_blank' },
              React.createElement('i', { className: 'fa fa-camera' })
            ),
            React.createElement(
              'a',
              { href: 'https://photographers.ua/RomanLisik/', target: '_blank' },
              React.createElement('i', { className: 'fa fa-twitter' })
            )
          ),
          React.createElement(
            'div',
            { className: 'date' },
            React.createElement(
              'p',
              null,
              'Roman-Lysyk \xA9 2012-',
              year,
              '. All rights reserved.'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.Footer = Footer;

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(110);

var _classnames2 = _interopRequireDefault(_classnames);

var _foto = __webpack_require__(421);

var _windowTask = __webpack_require__(422);

__webpack_require__(428);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.state = {
      modal: false
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'addClass',
    value: function addClass() {
      this.setState({
        modal: true
      });
    }
  }, {
    key: 'removeClass',
    value: function removeClass() {
      this.setState({
        modal: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var img = _foto.imgItems.map(function (item) {
        return React.createElement(
          'div',
          { key: item.id, className: 'content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3' },
          React.createElement(
            'div',
            { className: 'item' },
            React.createElement('img', { onClick: _this2.addClass, src: item.imgUrl, alt: '' })
          )
        );
      });

      return React.createElement(
        'section',
        { className: 'gallery' },
        React.createElement(
          'div',
          { className: 'page-content-L' },
          React.createElement(_windowTask.Window, null),
          React.createElement(
            'div',
            { className: 'page-content-M' },
            React.createElement(
              'div',
              { className: 'content-wrapper' },
              React.createElement(
                'h3',
                null,
                'MY WORK'
              ),
              React.createElement(
                'p',
                null,
                'Here are some of my latest lorem work ipsum tipsum.',
                React.createElement('br', null),
                'Click on the images to make them bigger'
              ),
              React.createElement(
                'div',
                { className: 'grid-container' },
                img
              ),
              React.createElement(
                'div',
                { className: (0, _classnames2.default)('modalBg', { 'showed': this.state.modal }) },
                React.createElement('div', { className: 'modalWindow' }),
                React.createElement(
                  'button',
                  { onClick: this.removeClass },
                  'remove class'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.Gallery = Gallery;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgItems = [{
  id: '001',
  title: 't',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '002',
  title: 't1',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '003',
  title: 't2',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '004',
  title: 't3',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '005',
  title: 't4',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '006',
  title: 't5',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '007',
  title: 't6',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '008',
  title: 't7',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '009',
  title: 't',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '010',
  title: 't1',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '011',
  title: 't2',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '012',
  title: 't3',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '013',
  title: 't4',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '014',
  title: 't5',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '015',
  title: 't6',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '016',
  title: 't7',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '017',
  title: 't',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '018',
  title: 't1',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '019',
  title: 't2',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '020',
  title: 't3',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '021',
  title: 't4',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '022',
  title: 't5',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '023',
  title: 't6',
  imgUrl: 'assets/images/foto_01.jpg'
}, {
  id: '024',
  title: 't7',
  imgUrl: 'assets/images/foto_01.jpg'
}];

exports.imgItems = imgItems;

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _checkbox = __webpack_require__(423);

var _radio = __webpack_require__(425);

__webpack_require__(427);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = function (_Component) {
  _inherits(Window, _Component);

  function Window() {
    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).apply(this, arguments));
  }

  _createClass(Window, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'content-wrapper1' },
        React.createElement(
          'div',
          { className: 'window-task' },
          React.createElement(
            'div',
            { className: 'window-task__header' },
            React.createElement(
              'p',
              null,
              'Select'
            )
          ),
          React.createElement(_checkbox.Checkbox, null),
          React.createElement(_radio.Radio, null)
        )
      );
    }
  }]);

  return Window;
}(_react.Component);

exports.Window = Window;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _task = __webpack_require__(424);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checkboxState: true
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tasks = _task.task.map(function (item) {
        return React.createElement('input', {
          key: item.id,
          id: item.id,
          name: item.title,
          type: 'checkbox',
          checked: _this2.checkboxState,
          onClick: _this2.toggle.bind(_this2)
        });
      });
      var tasks1 = _task.task.map(function (item) {
        return React.createElement(
          'label',
          { htmlFor: item.id, className: 'cls' },
          React.createElement(
            'div',
            { className: 'input' },
            React.createElement('span', { className: 'deg' }),
            React.createElement('span', { className: 'rad' })
          ),
          React.createElement(
            'p',
            null,
            item.name
          )
        );
      });
      return React.createElement(
        'div',
        { className: 'window-task__categories' },
        React.createElement(
          'p',
          null,
          'Categories'
        ),
        tasks,
        React.createElement(
          'div',
          { id: 'controls' },
          tasks1
        )
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var task = [{
  id: 'inp1',
  name: 'Portrait',
  checkboxState: true
}, {
  id: 'inp2',
  name: 'Children',
  checkboxState: false
}, {
  id: 'inp3',
  name: 'Family',
  checkboxState: true
}, {
  id: 'inp4',
  name: 'Gestation',
  checkboxState: true
}];

exports.task = task;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

var _taskRadio = __webpack_require__(426);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.state = {
      isGoing: true
    };
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(Radio, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tasks = _taskRadio.taskRadio.map(function (item) {
        return React.createElement('input', {
          id: item.id,
          name: item.name,
          type: 'radio',
          checked: _this2.state.isGoing,
          onChange: _this2.handleInputChange });
      });
      var tasks1 = _taskRadio.taskRadio.map(function (item) {
        return React.createElement(
          'label',
          { htmlFor: item.id, className: 'cls' },
          React.createElement(
            'div',
            { className: 'input' },
            React.createElement('span', { className: 'deg' }),
            React.createElement('span', { className: 'rad' })
          ),
          React.createElement(
            'p',
            null,
            item.title
          )
        );
      });
      return React.createElement(
        'div',
        { className: 'window-task__categories' },
        React.createElement(
          'p',
          null,
          'Date'
        ),
        tasks,
        React.createElement(
          'div',
          { id: 'controls' },
          tasks1
        )
      );
    }
  }]);

  return Radio;
}(_react.Component);

exports.Radio = Radio;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taskRadio = [{
  id: 'inp5',
  title: 'New on top',
  name: 'isGoing',
  isGoing: true
}, {
  id: 'inp6',
  title: 'Old on top',
  name: 'isGoing',
  isGoing: false
}];

exports.taskRadio = taskRadio;

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var React = _interopRequireWildcard(_react);

__webpack_require__(430);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_Component) {
  _inherits(Contacts, _Component);

  function Contacts() {
    _classCallCheck(this, Contacts);

    return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
  }

  _createClass(Contacts, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        { className: 'contacts' },
        React.createElement(
          'div',
          { className: 'page-content-M' },
          React.createElement(
            'div',
            { className: 'head' },
            React.createElement(
              'h2',
              null,
              'WHERE I WORK'
            ),
            React.createElement(
              'p',
              null,
              'I\'d love your feedback!'
            )
          ),
          React.createElement(
            'div',
            { className: 'grid-container' },
            React.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5' },
              React.createElement(
                'h3',
                null,
                '131231'
              )
            ),
            React.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7' },
              React.createElement(
                'h3',
                null,
                '131231'
              )
            )
          )
        )
      );
    }
  }]);

  return Contacts;
}(_react.Component);

exports.Contacts = Contacts;

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[164]);