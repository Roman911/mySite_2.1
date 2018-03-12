webpackJsonp([0],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(427);

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
        { className: 'about-me', id: 'navabout' },
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
                React.createElement('img', { src: __webpack_require__(166), alt: '' })
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_02.jpg";

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(385);


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(152);

var _reactRouterDom = __webpack_require__(111);

var _navbarComponent = __webpack_require__(419);

var _scrollingUp = __webpack_require__(422);

var _home = __webpack_require__(424);

var _footer = __webpack_require__(432);

var _gallery = __webpack_require__(434);

var _about = __webpack_require__(165);

var _contacts = __webpack_require__(452);

__webpack_require__(454);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import { CatalogComponent } from './scripts/components/catalog/catalog.component.jsx';
// eslint-disable-line
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
      React.createElement(_footer.Footer, null),
      React.createElement(_scrollingUp.ScrollButton, { scrollStepInPx: '50', delayInMs: '16.66' })
    )
  )
), document.getElementById('page'));

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _navbar = __webpack_require__(420);

var _reactRouterDom = __webpack_require__(111);

var _classnames = __webpack_require__(52);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(421);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarComponent = function (_Component) {
  _inherits(NavbarComponent, _Component);

  function NavbarComponent() {
    _classCallCheck(this, NavbarComponent);

    var _this = _possibleConstructorReturn(this, (NavbarComponent.__proto__ || Object.getPrototypeOf(NavbarComponent)).call(this));

    _this.state = {
      fixed: false
    };
    _this.addClass = _this.addClass.bind(_this);
    return _this;
  }

  _createClass(NavbarComponent, [{
    key: 'addClass',
    value: function addClass() {
      if (window.pageYOffset < 250) {
        this.setState({ fixed: false });
      } else {
        this.setState({ fixed: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var onsc = addEventListener('scroll', this.addClass);
      var links = _navbar.navbarItems.map(function (item, index) {
        return _react2.default.createElement(
          _reactRouterDom.NavLink,
          { key: index, className: item.class, to: item.route },
          _react2.default.createElement(
            'p',
            null,
            item.title
          )
        );
      });
      return _react2.default.createElement(
        'nav',
        { className: (0, _classnames2.default)('navbar', { 'fixed': this.state.fixed }) },
        links,
        onsc
      );
    }
  }]);

  return NavbarComponent;
}(_react.Component);

exports.NavbarComponent = NavbarComponent;

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarItems = [{
  title: 'home',
  route: '/home',
  class: 'navbar-link fa fa-th'
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

/***/ 421:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(52);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(423);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollButton = function (_Component) {
  _inherits(ScrollButton, _Component);

  function ScrollButton() {
    _classCallCheck(this, ScrollButton);

    var _this = _possibleConstructorReturn(this, (ScrollButton.__proto__ || Object.getPrototypeOf(ScrollButton)).call(this));

    _this.state = {
      intervalId: 0,
      show: false
    };
    _this.addClass = _this.addClass.bind(_this);
    return _this;
  }

  _createClass(ScrollButton, [{
    key: 'scrollStep',
    value: function scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
  }, {
    key: 'addClass',
    value: function addClass() {
      if (window.pageYOffset < 700) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      var intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onsc = addEventListener('scroll', this.addClass);
      return _react2.default.createElement(
        'button',
        { className: (0, _classnames2.default)('btn scroll', { 'show': this.state.show }),
          onClick: function onClick() {
            _this2.scrollToTop();
          } },
        _react2.default.createElement('i', { className: 'fas fa-chevron-up' }),
        onsc
      );
    }
  }]);

  return ScrollButton;
}(_react.Component);

exports.ScrollButton = ScrollButton;

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(425);

var _about = __webpack_require__(165);

var _other = __webpack_require__(428);

var _portfolio = __webpack_require__(430);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { Navbar } from './../navbarHome/navbar.jsx';


//import { Works } from './../works/works.jsx';

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header.Header, null),
        _react2.default.createElement(_about.About, null),
        _react2.default.createElement(_other.Other, null),
        _react2.default.createElement(_portfolio.Portfolio, null)
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.HomePage = HomePage;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(426);

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
        { className: 'header', id: 'navhome' },
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

/***/ 426:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Other = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(429);

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

/***/ 429:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(431);

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
        { className: 'portfolio relative', id: 'navportfolio' },
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

/***/ 431:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(433);

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

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _windowTask = __webpack_require__(435);

var _foto = __webpack_require__(442);

__webpack_require__(167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).apply(this, arguments));
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "page-content-L" },
          _react2.default.createElement(_windowTask.Window, null),
          _react2.default.createElement(_foto.Foto, null)
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.Gallery = Gallery;

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _task = __webpack_require__(436);

var _taskRadio = __webpack_require__(437);

var _checkbox = __webpack_require__(438);

var _radio = __webpack_require__(440);

__webpack_require__(441);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checked = _task.task.slice();
var radio = _taskRadio.taskRadio.slice();

var arr = [1, 2, 3, 5, 7];
var arr2 = [4, 6, 8, 9, 10];

var Window = function (_Component) {
  _inherits(Window, _Component);

  function Window() {
    _classCallCheck(this, Window);

    var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this));

    _this.state = {
      arr: false,
      arr2: false
    };
    return _this;
  }

  _createClass(Window, [{
    key: "render",
    value: function render() {
      var checkbox = checked.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(_checkbox.Checkbox, { name: item.name, id: item.id, index: index })
        );
      });
      var radio1 = radio.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(_radio.Radio, { name: item.name })
        );
      });
      return _react2.default.createElement(
        "div",
        { className: "content-wrapper1" },
        _react2.default.createElement(
          "div",
          { className: "window-task" },
          _react2.default.createElement(
            "div",
            { className: "window-task__header" },
            _react2.default.createElement(
              "p",
              null,
              "Select"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "window-task__categories" },
            _react2.default.createElement(
              "p",
              null,
              "Categories"
            ),
            checkbox
          ),
          _react2.default.createElement(
            "div",
            { className: "window-task__radio" },
            _react2.default.createElement(
              "p",
              null,
              "Date"
            ),
            radio1
          )
        )
      );
    }
  }]);

  return Window;
}(_react.Component);

exports.Window = Window;

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var task = [{
  id: '1',
  name: 'Portrait',
  checkboxState: false
}, {
  id: 'inp2',
  name: 'Children',
  checkboxState: false
}, {
  id: 'inp3',
  name: 'Family',
  checkboxState: false
}, {
  id: 'inp4',
  name: 'Gestation',
  checkboxState: false
}];

exports.task = task;

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taskRadio = [{
  id: 'inp5',
  name: 'By date',
  checkboxState: false
}, {
  id: 'inp6',
  name: 'By categories',
  checkboxState: false
}];

exports.taskRadio = taskRadio;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(52);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(439);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arr = [1, 2, 3, 5, 7];
var arr2 = [4, 6, 8, 9, 10];

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checkboxState: false,
      show: false,
      arr: false,
      arr2: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'toggle',
    value: function toggle(id) {
      this.setState({ checkboxState: !this.state.checkboxState });
      this.setState({ show: !this.state.show });
      if (id === 0) {
        this.setState({ arr: !this.state.arr });
      } else if (id === 1) {
        this.setState({ arr2: !this.state.arr2 });
      }

      console.log(id);
    }
  }, {
    key: 'arr5',
    value: function arr5() {
      if (this.state.arr === true) {
        return arr;
      } else {
        return '';
      }
    }
  }, {
    key: 'arr6',
    value: function arr6() {
      if (this.state.arr2 === true) {
        return arr2;
      } else {
        return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var array = [this.arr5(), this.arr6()].map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          item
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'controls' },
        _react2.default.createElement(
          'label',
          { className: (0, _classnames2.default)('cls', { 'showed': this.state.show }) },
          _react2.default.createElement('input', {
            checked: this.props.checkboxState,
            name: this.props.name,
            id: this.props.id,
            onChange: function onChange() {
              return _this2.toggle(_this2.props.index);
            },
            type: 'checkbox' }),
          _react2.default.createElement(
            'div',
            { className: 'input' },
            _react2.default.createElement('span', { className: 'deg' }),
            _react2.default.createElement('span', { className: 'rad' })
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.name
          )
        ),
        array
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(52);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.state = {
      checkboxState: false,
      show: false
    };
    return _this;
  }

  _createClass(Radio, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ checkboxState: !this.state.checkboxState });
      this.setState({ show: !this.state.show });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'controls' },
        _react2.default.createElement(
          'label',
          { className: (0, _classnames2.default)('cls', { 'showed': this.state.show }) },
          _react2.default.createElement('input', {
            checked: this.checkboxState,
            name: this.props.name,
            onChange: this.toggle.bind(this),
            type: 'checkbox'
          }),
          _react2.default.createElement(
            'div',
            { className: 'input' },
            _react2.default.createElement('span', { className: 'deg' }),
            _react2.default.createElement('span', { className: 'rad' })
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.name
          )
        )
      );
    }
  }]);

  return Radio;
}(_react.Component);

exports.Radio = Radio;

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foto = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(52);

var _classnames2 = _interopRequireDefault(_classnames);

var _foto = __webpack_require__(443);

var _slid = __webpack_require__(449);

__webpack_require__(167);

__webpack_require__(450);

__webpack_require__(451);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var leng = _foto.imgItems.slice();
var imgs = leng.map(function (item) {
  return item.imgUrl;
});

var arr = [1, 2, 3, 5, 7];
var arr2 = [4, 6, 8, 9, 10];

var Foto = function (_Component) {
  _inherits(Foto, _Component);

  function Foto(props) {
    _classCallCheck(this, Foto);

    var _this = _possibleConstructorReturn(this, (Foto.__proto__ || Object.getPrototypeOf(Foto)).call(this, props));

    _this.state = {
      modal: false,
      modalImg: imgs[0],
      images: imgs,
      currentIndex: 0,
      length: leng.length,
      arr: true
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
    _this.onKeyPressed = _this.onKeyPressed.bind(_this);
    return _this;
  }

  _createClass(Foto, [{
    key: 'setModal',
    value: function setModal(vis, index) {
      this.setState({ modalImg: this.state.images[index] });
      this.setState({ modal: vis });
      this.setState({ currentIndex: index });
      document.body.style.overflow = 'hidden';
    }
  }, {
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
      document.body.style.overflow = '';
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.state.currentIndex < this.state.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }
  }, {
    key: 'prev',
    value: function prev() {
      if (this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      } else {
        this.setState({ currentIndex: this.state.length - 1 });
      }
    }
  }, {
    key: 'onKeyPressed',
    value: function onKeyPressed() {
      if (event.keyCode === 27) {
        this.removeClass();
      } else if (event.keyCode === 39) {
        this.next();
      } else if (event.keyCode === 37) {
        this.prev();
      }
    }
  }, {
    key: 'arr5',
    value: function arr5() {
      if (this.state.arr === true) {
        return arr2;
      } else {
        return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var img = leng.map(function (val, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'content-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3' },
          _react2.default.createElement(
            'div',
            { className: 'item', onClick: function onClick() {
                return _this2.setModal(true, index);
              } },
            _react2.default.createElement('img', { src: _this2.state.images[index] })
          )
        );
      });
      var slid = leng.map(function (item, index) {
        return _react2.default.createElement(_slid.Slide, {
          key: index,
          image: item.imgUrl,
          show: _this2.state.currentIndex === index
        });
      });
      var num = [this.arr5()].map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'p',
            null,
            item
          )
        );
      });
      var onke = addEventListener('keydown', this.onKeyPressed);
      return _react2.default.createElement(
        'section',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'page-content-L' },
          _react2.default.createElement(
            'div',
            { className: 'page-content-M' },
            _react2.default.createElement(
              'div',
              { className: 'content-wrapper' },
              _react2.default.createElement(
                'h3',
                null,
                'MY WORK'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Here are some of my latest lorem work ipsum tipsum.',
                _react2.default.createElement('br', null),
                'Click on the images to make them bigger'
              ),
              _react2.default.createElement(
                'div',
                { className: 'grid-container' },
                img
              ),
              num,
              _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('modalBg', { 'showed': this.state.modal }) },
                _react2.default.createElement(
                  'div',
                  { className: 'modalWindow' },
                  _react2.default.createElement(
                    'a',
                    { className: 'previous', onClick: function onClick() {
                        return _this2.prev();
                      } },
                    _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
                  ),
                  slid,
                  _react2.default.createElement(
                    'a',
                    { className: 'next', onClick: function onClick() {
                        return _this2.next();
                      } },
                    _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
                  )
                ),
                _react2.default.createElement(
                  'button',
                  { onClick: this.removeClass },
                  'X'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Foto;
}(_react.Component);

exports.Foto = Foto;

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgItems = [{
  id: '002',
  title: 't',
  imgUrl: './../../../../assets/images/foto_01.jpg',
  description: "description 1"
}, {
  id: '002',
  title: 't1',
  imgUrl: __webpack_require__(444),
  description: "description 2"
}, {
  id: '003',
  title: 't2',
  imgUrl: __webpack_require__(166),
  description: "description 3"
}, {
  id: '004',
  title: 't3',
  imgUrl: __webpack_require__(445)
}, {
  id: '005',
  title: 't4',
  imgUrl: __webpack_require__(446)
}, {
  id: '006',
  title: 't5',
  imgUrl: __webpack_require__(447)
}, {
  id: '007',
  title: 't6',
  imgUrl: __webpack_require__(448)
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

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_01.jpg";

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_03.jpg";

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_04.jpg";

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_05.jpg";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_06.jpg";

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide() {
    _classCallCheck(this, Slide);

    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
  }

  _createClass(Slide, [{
    key: "render",
    value: function render() {
      var classString = this.props.show ? "slide show" : "slide";
      return _react2.default.createElement(
        "div",
        { className: classString },
        _react2.default.createElement("img", { src: this.props.image })
      );
    }
  }]);

  return Slide;
}(_react.Component);

exports.Slide = Slide;

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(453);

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

/***/ 453:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[183]);