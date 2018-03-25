webpackJsonp([0],Array(117).concat([
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_001.jpg";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_002.jpg";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_003.jpg";

/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(445);

var _content = __webpack_require__(446);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      var lang = void 0;
      var languageBrowser = navigator.language;
      if (languageBrowser === 'uk-UA') {
        lang = 0;
      } else if (languageBrowser === 'ru-RU') {
        lang = 1;
      } else {
        lang = 2;
      }

      var header = _content.contentItem.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'item' },
          _react2.default.createElement(
            'h4',
            null,
            item.aboutMe[lang]
          ),
          _react2.default.createElement(
            'p',
            { className: 'italic' },
            item.lovePhoto[lang]
          ),
          _react2.default.createElement(
            'p',
            null,
            item.text[lang]
          )
        );
      });

      var title = _content.contentItem.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'content' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'b',
              null,
              _react2.default.createElement('i', { className: 'fas fa-user' }),
              ' ',
              item.title[lang]
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            item.name[lang]
          ),
          _react2.default.createElement('img', { src: __webpack_require__(447), alt: '' })
        );
      });

      var text = _content.contentItem.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'content content__text' },
          _react2.default.createElement(
            'p',
            null,
            item.text2[lang]
          )
        );
      });

      return _react2.default.createElement(
        'section',
        { className: 'about-me', id: 'navabout' },
        _react2.default.createElement(
          'div',
          { className: 'page-content-M' },
          header,
          _react2.default.createElement(
            'div',
            { className: 'grid-container' },
            _react2.default.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6' },
              title
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6' },
              text
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-block' },
            _react2.default.createElement(
              'p',
              null,
              'Im really good at:'
            ),
            _react2.default.createElement(
              'div',
              { className: 'properties' },
              _react2.default.createElement(
                'div',
                { className: 'properties__header' },
                _react2.default.createElement('i', { className: 'fas fa-camera-retro' }),
                _react2.default.createElement(
                  'p',
                  null,
                  ' Photography'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'properties__bar' },
                _react2.default.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '90 %'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'properties__header' },
                _react2.default.createElement('i', { className: 'fas fa-laptop' }),
                _react2.default.createElement(
                  'p',
                  null,
                  ' Web Design'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'properties__bar' },
                _react2.default.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '85 %'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'properties__header' },
                _react2.default.createElement('i', { className: 'fas fa-images' }),
                _react2.default.createElement(
                  'p',
                  null,
                  ' Photoshop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'properties__bar' },
                _react2.default.createElement(
                  'div',
                  { className: 'properties__bar_rate' },
                  _react2.default.createElement(
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
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_004.jpg";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_005.jpg";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_006.jpg";

/***/ }),
/* 178 */
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
      var date = new Date(this.props.date);
      var dateForm = date.toLocaleDateString();
      var classString = this.props.show ? "slide show" : "slide";
      return _react2.default.createElement(
        "div",
        { className: classString },
        _react2.default.createElement(
          "div",
          { className: "slide__title" },
          _react2.default.createElement(
            "h5",
            null,
            this.props.title
          )
        ),
        _react2.default.createElement("img", { src: this.props.image }),
        _react2.default.createElement(
          "div",
          { className: "slide__date" },
          _react2.default.createElement(
            "h5",
            null,
            dateForm
          )
        )
      );
    }
  }]);

  return Slide;
}(_react.Component);

exports.Slide = Slide;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" },
        _react2.default.createElement(
          "div",
          { className: "title" },
          _react2.default.createElement(
            "p",
            null,
            "Lets get in touch. Send me a message:"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "form" },
          _react2.default.createElement("input", { type: "text", placeholder: "Name", name: "Name" }),
          _react2.default.createElement("input", { type: "text", placeholder: "Email", name: "Email" }),
          _react2.default.createElement("textarea", { placeholder: "Message", rows: "5", name: "Message" })
        ),
        _react2.default.createElement(
          "div",
          { className: "btn btn__little" },
          _react2.default.createElement(
            "button",
            { className: "button" },
            _react2.default.createElement("i", { className: "fab fa-telegram-plane" }),
            _react2.default.createElement(
              "p",
              null,
              "subm"
            ),
            _react2.default.createElement(
              "p",
              null,
              "it"
            )
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.Form = Form;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Links = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Links = function (_Component) {
  _inherits(Links, _Component);

  function Links() {
    _classCallCheck(this, Links);

    return _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).apply(this, arguments));
  }

  _createClass(Links, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" },
        _react2.default.createElement(
          "div",
          { className: "title" },
          _react2.default.createElement(
            "p",
            null,
            "Contact"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "contact" },
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fas fa-phone" }),
            _react2.default.createElement("i", { className: "fab fa-telegram-plane" }),
            _react2.default.createElement("i", { className: "fab fa-viber" }),
            "+38(096)7594520"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fas fa-envelope" }),
            "roma-lysyk@ukr.net"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fab fa-facebook-square" }),
            _react2.default.createElement(
              "a",
              { href: "https://www.facebook.com/romalysyk" },
              "facebook.com/romalysyk"
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fab fa-instagram" }),
            _react2.default.createElement(
              "a",
              { href: "https://www.instagram.com/romanlysyk" },
              "instagram.com/romanlysyk"
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fab fa-twitter-square" }),
            _react2.default.createElement(
              "a",
              { href: "https://twitter.com/roma_lysyk" },
              "twitter.com/roma_lysyk"
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fab fa-google-plus-square" }),
            _react2.default.createElement(
              "a",
              { href: "https://plus.google.com/u/0/110130571380761850863" },
              "plus.google.com"
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("i", { className: "fas fa-camera" }),
            _react2.default.createElement(
              "a",
              { href: "https://photographers.ua/RomanLisik/" },
              "photographers.ua/RomanLisik"
            )
          )
        )
      );
    }
  }]);

  return Links;
}(_react.Component);

exports.Links = Links;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(401);


/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(58);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(160);

var _reactRouterDom = __webpack_require__(81);

var _navbarComponent = __webpack_require__(437);

var _scrollingUp = __webpack_require__(440);

var _home = __webpack_require__(442);

var _footer = __webpack_require__(458);

var _gallery = __webpack_require__(460);

var _about = __webpack_require__(173);

var _contacts = __webpack_require__(618);

__webpack_require__(621);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _navbarConfig = __webpack_require__(438);

var _reactRouterDom = __webpack_require__(81);

var _classnames = __webpack_require__(46);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(439);

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
      fixed: false,
      menu: false
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
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
    key: 'hendleClick',
    value: function hendleClick() {
      this.setState({ menu: !this.state.menu });
      if (this.state.menu === true) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass() {
      this.setState({ menu: false });
      document.body.style.overflow = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onsc = addEventListener('scroll', this.addClass);
      var lang = void 0;
      var languageBrowser = navigator.language;
      if (languageBrowser === 'uk-UA') {
        lang = 0;
      } else if (languageBrowser === 'ru-RU') {
        lang = 1;
      } else {
        lang = 2;
      }
      var links = _navbarConfig.navbarItems.map(function (item, index) {
        return _react2.default.createElement(
          _reactRouterDom.NavLink,
          { onClick: function onClick() {
              return _this2.removeClass();
            }, key: index, className: item.class, to: item.route },
          _react2.default.createElement(
            'p',
            null,
            item.title[lang]
          )
        );
      });
      return _react2.default.createElement(
        'nav',
        { className: 'navbar' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('navbar-mob', { 'showed': this.state.menu }) },
          _react2.default.createElement(
            'div',
            { className: 'navbar-mob__btn', onClick: function onClick() {
                return _this2.hendleClick();
              } },
            _react2.default.createElement('i', { className: 'fas fa-arrow-circle-right' }),
            _react2.default.createElement(
              'p',
              null,
              'menu'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-mob__list' },
            links
          )
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('navbar-disc', { 'fixed': this.state.fixed }) },
          links
        )
      );
    }
  }]);

  return NavbarComponent;
}(_react.Component);

exports.NavbarComponent = NavbarComponent;

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarItems = [{
  title: ['головна', 'главная', 'home'],
  route: '/home',
  class: 'navbar-link'
}, {
  title: ['галерея', 'галерея', 'gallery'],
  route: '/gallery',
  class: 'navbar-link fas fa-th'
}, {
  title: ['про мене', 'обо мне', 'about me'],
  route: '/about',
  class: 'navbar-link fas fa-user-secret'
}, {
  title: ['контакти', 'контакты', 'contacts'],
  route: '/contacts',
  class: 'navbar-link fas fa-address-book'
}];

exports.navbarItems = navbarItems;

/***/ }),
/* 439 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(46);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(441);

__webpack_require__(117);

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
        { className: (0, _classnames2.default)('btn__scroll scroll', { 'show': this.state.show }),
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
/* 441 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(443);

var _about = __webpack_require__(173);

var _other = __webpack_require__(448);

var _portfolio = __webpack_require__(450);

var _works = __webpack_require__(452);

var _contact = __webpack_require__(455);

var _contactItem = __webpack_require__(456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _react2.default.createElement(_portfolio.Portfolio, null),
        _react2.default.createElement(_works.Works, null),
        _react2.default.createElement(_contact.ContactBaner, null),
        _react2.default.createElement(_contactItem.Contact, null)
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.HomePage = HomePage;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(444);

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
            'h3',
            null,
            'ROMA_'
          ),
          React.createElement(
            'h3',
            null,
            'LI'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.Header = Header;

/***/ }),
/* 444 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 445 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var contentItem = [{
  aboutMe: ['про мене', 'обо мне', 'about me'],
  lovePhoto: ['Я люблю фотографувати', 'Я люблю фотографировать', 'I love photography'],
  text: ['Ласкаво прошу на мій сайт! Мене звати Роман. Я займаюсь фотозйомкою більше 5 років. Фотографія для мене - це спосіб зафіксувати момент життя, впіймати емоцію і настрій. Фотографії - це те, що останеться з вами на все життя, те, що ви будете показувати своїм дітям і внукам. Саме тому я з великою увагою підхожу до їхнього створення. Головна задача для мене – це зберегти неповторні моменти вашого життя. Особливість моменту, щирість емоції, красиве світло і композиція — це основні складові хорошої фотографії, на мій погляд.', 'Добро пожаловать на мой сайт! Меня зовут Роман. Я занимаюсь фотосъёмкой более 5 лет. Фотография для меня - это способ запечатлеть мгновение жизни, уловить эмоцию и настроение. Фотографии - это то, что останется с вами на всю жизнь, то, что вы будете показывать своим детям и внукам. Именно поэтому я с большим вниманием подхожу к их созданию. Главная задача для меня – это сохранить неповторимые моменты вашей жизни. Уникальность момента, искренние эмоции, красивый свет и композиция — вот основные составляющие хорошей фотографии, на мой взгляд.', 'We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
  title: ['Мене звати:', 'Меня зовут:', 'My Name:'],
  name: ['Роман Лисик', 'Роман Лысык', 'Roman Lysyk'],
  text2: ['Особливість моменту, щирість емоції, красиве світло і композиція — це основні складові хорошої фотографії, на мій погляд. Кожний проект для мене художньо особливий і має виключно індивідуально-творчий підхід. Те, чим я займаюсь це історія до якої можна доторкнутися крізь час. Це те, що ніколи не старіє і немає терміну дії…', 'Уникальность момента, искренние эмоции, красивый свет и композиция — вот основные составляющие хорошей фотографии, на мой взгляд. Каждый проект для меня художественно особенный и имеет исключительно индивидуально-творческой подход. Те, чем я занимаюсь это история к которой можно дотронутся сквозь время. Это то, что некогда не стареет, не имеет срока годности…', 'Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
}];

exports.contentItem = contentItem;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_18.jpg";

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Other = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(449);

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
/* 449 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _portfolio = __webpack_require__(451);

__webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: 'render',
    value: function render() {
      var lang = void 0;
      var languageBrowser = navigator.language;
      if (languageBrowser === 'uk-UA') {
        lang = 0;
      } else if (languageBrowser === 'ru-RU') {
        lang = 1;
      } else {
        lang = 2;
      }
      var port = _portfolio.item.map(function (item, index) {
        return _react2.default.createElement(
          'h2',
          { key: index },
          item.head[lang]
        );
      });

      return _react2.default.createElement(
        'section',
        { className: 'portfolio relative', id: 'navportfolio' },
        _react2.default.createElement(
          'div',
          { className: 'portfolio__header' },
          port
        )
      );
    }
  }]);

  return Portfolio;
}(_react.Component);

exports.Portfolio = Portfolio;

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var item = [{
  head: ['PORTFOLIO', 'PORTFOLIO2', 'PORTFOLIO3']
}];

exports.item = item;

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Works = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(81);

var _classnames = __webpack_require__(46);

var _classnames2 = _interopRequireDefault(_classnames);

var _works = __webpack_require__(453);

var _slid = __webpack_require__(178);

__webpack_require__(454);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var img = _works.imgItems.map(function (item) {
  return item.imgUrl;
});

var Works = function (_Component) {
  _inherits(Works, _Component);

  function Works(props) {
    _classCallCheck(this, Works);

    var _this = _possibleConstructorReturn(this, (Works.__proto__ || Object.getPrototypeOf(Works)).call(this, props));

    _this.state = {
      modal: false,
      modalImg: 0,
      images: img,
      currentIndex: 0,
      length: img.length
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
    _this.onKeyPressed = _this.onKeyPressed.bind(_this);
    return _this;
  }

  _createClass(Works, [{
    key: 'setModal',
    value: function setModal(visible, index) {
      this.setState({ modalImg: this.state.images[index] });
      this.setState({ modal: visible });
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var img = _works.imgItems.map(function (item) {
        if (item.line === 1) {
          return _react2.default.createElement(
            'div',
            { key: item.id, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, item.id);
              } },
            _react2.default.createElement('img', { src: item.imgUrl, alt: '' })
          );
        }
      });
      var img2 = _works.imgItems.map(function (item) {
        if (item.line === 2) {
          return _react2.default.createElement(
            'div',
            { key: item.id, style: { flexGrow: 3 }, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, item.id);
              } },
            _react2.default.createElement('img', { src: item.imgUrl, alt: '' })
          );
        }
      });
      var img3 = _works.imgItems.map(function (item) {
        if (item.line === 3) {
          return _react2.default.createElement(
            'div',
            { key: item.id, style: { flexGrow: 3 }, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, item.id);
              } },
            _react2.default.createElement('img', { src: item.imgUrl, alt: '' })
          );
        }
      });
      var slid = _works.imgItems.map(function (item, index) {
        return _react2.default.createElement(_slid.Slide, {
          key: index,
          image: item.imgUrl,
          show: _this2.state.currentIndex === index
        });
      });
      var onke = addEventListener('keydown', this.onKeyPressed);
      return _react2.default.createElement(
        'section',
        { className: 'works' },
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
              { className: 'content-block' },
              img
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-block' },
              img2
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-block' },
              img3
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn' },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/gallery' },
                _react2.default.createElement(
                  'button',
                  { className: 'button' },
                  _react2.default.createElement('i', { className: 'fas fa-th' }),
                  _react2.default.createElement(
                    'p',
                    null,
                    'galle'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'ry'
                  )
                )
              )
            ),
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
                { className: 'btn__remove', onClick: this.removeClass },
                'X'
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
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgItems = [{
  id: 0,
  line: 1,
  title: 't',
  portrait: 'portrait',
  imgUrl: __webpack_require__(118),
  description: "description 1"
}, {
  id: 1,
  line: 1,
  title: 't',
  portrait: 'portrait',
  imgUrl: __webpack_require__(119),
  description: "description 1"
}, {
  id: 2,
  line: 1,
  title: 't1',
  portrait: 'portrait',
  imgUrl: __webpack_require__(120),
  description: "description 2"
}, {
  id: 3,
  line: 2,
  title: 't2',
  portrait: 'portrait',
  imgUrl: __webpack_require__(175),
  description: "description 3"
}, {
  id: 4,
  line: 2,
  title: 't3',
  portrait: 'portrait',
  imgUrl: __webpack_require__(176)
}, {
  id: 5,
  line: 2,
  title: 't4',
  portrait: 'portrait',
  imgUrl: __webpack_require__(177)
}, {
  id: 6,
  line: 3,
  title: 't5',
  portrait: 'portrait',
  imgUrl: __webpack_require__(118)
}, {
  id: 7,
  line: 3,
  title: 't6',
  portrait: 'portrait',
  imgUrl: __webpack_require__(119)
}, {
  id: 0,
  line: 3,
  title: 't7',
  portrait: 'portrait',
  imgUrl: __webpack_require__(120)
}];

exports.imgItems = imgItems;

/***/ }),
/* 454 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactBaner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactBaner = function (_Component) {
  _inherits(ContactBaner, _Component);

  function ContactBaner() {
    _classCallCheck(this, ContactBaner);

    return _possibleConstructorReturn(this, (ContactBaner.__proto__ || Object.getPrototypeOf(ContactBaner)).apply(this, arguments));
  }

  _createClass(ContactBaner, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'section',
        { className: 'portfolio relative', id: 'navportfolio' },
        _react2.default.createElement(
          'div',
          { className: 'portfolio__header' },
          _react2.default.createElement(
            'h2',
            null,
            'CONTACT'
          )
        )
      );
    }
  }]);

  return ContactBaner;
}(_react.Component);

exports.ContactBaner = ContactBaner;

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(181);

var _links = __webpack_require__(182);

__webpack_require__(457);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "contacts" },
        _react2.default.createElement(
          "div",
          { className: "page-content-M" },
          _react2.default.createElement(
            "div",
            { className: "head" },
            _react2.default.createElement(
              "h2",
              null,
              "WHERE I WORK"
            ),
            _react2.default.createElement(
              "p",
              null,
              "I'd love your feedback!"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "grid-container" },
            _react2.default.createElement(_form.Form, null),
            _react2.default.createElement(_links.Links, null)
          )
        )
      );
    }
  }]);

  return Contact;
}(_react.Component);

exports.Contact = Contact;

/***/ }),
/* 457 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

__webpack_require__(459);

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
              React.createElement('i', { className: 'fab fa-facebook-square' })
            ),
            React.createElement(
              'a',
              { href: 'https://www.instagram.com/romanlysyk/', target: '_blank' },
              React.createElement('i', { className: 'fab fa-instagram' })
            ),
            React.createElement(
              'a',
              { href: 'https://plus.google.com/u/0/110130571380761850863', target: '_blank' },
              React.createElement('i', { className: 'fab fa-google-plus-square' })
            ),
            React.createElement(
              'a',
              { href: 'https://photographers.ua/RomanLisik/', target: '_blank' },
              React.createElement('i', { className: 'fas fa-camera' })
            ),
            React.createElement(
              'a',
              { href: 'https://twitter.com/?lang=uk', target: '_blank' },
              React.createElement('i', { className: 'fab fa-twitter-square' })
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
/* 459 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _foto = __webpack_require__(461);

var _task = __webpack_require__(462);

var _taskRadio = __webpack_require__(463);

var _tags = __webpack_require__(464);

var _foto2 = __webpack_require__(465);

var _checkbox = __webpack_require__(613);

var _radio = __webpack_require__(615);

var _tags2 = __webpack_require__(616);

__webpack_require__(183);

__webpack_require__(617);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checked = _task.task.slice();
var radio = _taskRadio.taskRadio.slice();

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.state = {
      checkboxState: false,
      portrait: false,
      children: false,
      family: false,
      gestation: false,
      radioState: false,
      date: false,
      showed: false
    };
    _this.toggle = _this.toggle.bind(_this);
    _this.addClass = _this.addClass.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: "toggle",
    value: function toggle(id) {
      this.setState({ checkboxState: !this.state.checkboxState });
      if (id === 0) {
        this.setState({ portrait: !this.state.portrait });
      } else if (id === 1) {
        this.setState({ children: !this.state.children });
      } else if (id === 2) {
        this.setState({ family: !this.state.family });
      } else if (id === 3) {
        this.setState({ gestation: !this.state.gestation });
      }
    }
  }, {
    key: "toggleRadio",
    value: function toggleRadio(id) {
      this.setState({ radioState: !this.state.radioState });
      if (id === 0) {
        this.setState({ date: !this.state.date });
      }
    }
  }, {
    key: "addClass",
    value: function addClass() {
      if (window.pageYOffset < 350) {
        this.setState({ showed: false });
      } else {
        this.setState({ showed: true });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onsc = addEventListener('scroll', this.addClass);
      var img = [];
      _foto2.imgItems.map(function (item) {
        if (_this2.state.portrait || _this2.state.children || _this2.state.family || _this2.state.gestation || !item.imgUrl) {
          return;
        }
        img.push(item);
      });
      _foto2.imgItems.map(function (item) {
        if (!_this2.state.portrait || !item.portrait) {
          return;
        }
        img.push(item);
      });
      _foto2.imgItems.map(function (item) {
        if (!_this2.state.children || !item.children) {
          return;
        }
        img.push(item);
      });
      _foto2.imgItems.map(function (item) {
        if (!_this2.state.family || !item.family) {
          return;
        }
        img.push(item);
      });
      _foto2.imgItems.map(function (item) {
        if (!_this2.state.gestation || !item.gestation) {
          return;
        }
        img.push(item);
      });
      img = this.state.date ? img : img.reverse();
      var checkbox = checked.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index, onChange: function onChange() {
              return _this2.toggle(index);
            } },
          _react2.default.createElement(_checkbox.Checkbox, { name: item.name, id: item.id, index: index, checked: _this2.state.checkboxState })
        );
      });
      var radio1 = radio.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index, onChange: function onChange() {
              return _this2.toggleRadio(index);
            } },
          _react2.default.createElement(_radio.Radio, { name: item.name, id: item.id, index: index, checked: _this2.state.radioState })
        );
      });
      var tag = _tags.tags.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(_tags2.Tags, { tag: item.tag })
        );
      });
      return _react2.default.createElement(
        "section",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "page-content-L" },
          _react2.default.createElement(
            "div",
            { className: "content-wrapper1" },
            _react2.default.createElement(
              "div",
              { className: "window-task" },
              _react2.default.createElement(
                "div",
                { className: "window-header" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Select"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "window-control" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Categories"
                ),
                checkbox
              ),
              _react2.default.createElement(
                "div",
                { className: "window-control" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Date"
                ),
                radio1
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "window-tags" },
              _react2.default.createElement(
                "div",
                { className: "window-header" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Tags:"
                )
              ),
              tag
            )
          ),
          _react2.default.createElement(_foto.Foto, { img: img })
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.Gallery = Gallery;

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foto = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(46);

var _classnames2 = _interopRequireDefault(_classnames);

var _slid = __webpack_require__(178);

__webpack_require__(183);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Foto = function (_Component) {
  _inherits(Foto, _Component);

  function Foto(props) {
    _classCallCheck(this, Foto);

    var _this = _possibleConstructorReturn(this, (Foto.__proto__ || Object.getPrototypeOf(Foto)).call(this, props));

    var img = props.img;
    var imgUrl = img.map(function (item) {
      return item.imgUrl;
    });
    _this.state = {
      modal: false,
      modalImg: 0,
      images: imgUrl,
      currentIndex: 0,
      length: img.length,
      res: false
    };
    _this.addClass = _this.addClass.bind(_this);
    _this.removeClass = _this.removeClass.bind(_this);
    _this.onKeyPressed = _this.onKeyPressed.bind(_this);
    return _this;
  }

  _createClass(Foto, [{
    key: 'setModal',
    value: function setModal(visible, index, length) {
      this.setState({ modalImg: this.state.images[index] });
      this.setState({ modal: visible });
      this.setState({ currentIndex: index });
      this.setState({ length: length });
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var imgItem = this.props.img;
      console.log(imgItem);
      var img = imgItem.map(function (item, index) {
        if (index % 4 === 0) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, index, imgItem.length);
              } },
            _react2.default.createElement('img', { src: item.imgUrl })
          );
        }
      });
      var img2 = imgItem.map(function (item, index) {
        if ((index - 1) % 4 === 0) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, index, imgItem.length);
              } },
            _react2.default.createElement('img', { src: item.imgUrl })
          );
        }
      });
      var img3 = imgItem.map(function (item, index) {
        if ((index - 2) % 4 === 0) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, index, imgItem.length);
              } },
            _react2.default.createElement('img', { src: item.imgUrl })
          );
        }
      });
      var img4 = imgItem.map(function (item, index) {
        if ((index - 3) % 4 === 0) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'item', onClick: function onClick() {
                return _this2.setModal(true, index, imgItem.length);
              } },
            _react2.default.createElement('img', { src: item.imgUrl })
          );
        }
      });
      var slid = imgItem.map(function (item, index) {
        return _react2.default.createElement(_slid.Slide, {
          key: index,
          image: item.imgUrl,
          title: item.title,
          date: item.date,
          show: _this2.state.currentIndex === index
        });
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
                _react2.default.createElement(
                  'div',
                  { className: 'content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3' },
                  img
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3' },
                  img2
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3' },
                  img3
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3' },
                  img4
                )
              ),
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
                  { className: 'btn__remove', onClick: this.removeClass },
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
/* 462 */
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
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taskRadio = [{
  id: 'inp5',
  name: 'By date',
  checkboxState: false
}];

exports.taskRadio = taskRadio;

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tags = [{
  tag: 'polina'
}, {
  tag: 'tatiana'
}, {
  tag: 'ania'
}];

exports.tags = tags;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgItems = [{
  id: 0,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(118)
}, {
  id: 1,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(119)
}, {
  id: 2,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(120)
}, {
  id: 3,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(175)
}, {
  id: 4,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(176)
}, {
  id: 5,
  title: 'Sabina, Dnipro embankment',
  teg: ['sabina'],
  date: [2011, 7, 16],
  portrait: 'portrait',
  imgUrl: __webpack_require__(177)
}, {
  id: 6,
  title: 'Beach, Obolon',
  teg: ['Beach'],
  date: [2011, 8, 27],
  portrait: 'portrait',
  imgUrl: __webpack_require__(466)
}, {
  id: 7,
  title: 'Beach, Obolon',
  teg: ['Beach'],
  date: [2011, 8, 27],
  portrait: 'portrait',
  imgUrl: __webpack_require__(467)
}, {
  id: 8,
  title: 'Beach, Obolon',
  teg: ['Beach'],
  date: [2011, 8, 27],
  portrait: 'portrait',
  imgUrl: __webpack_require__(468)
}, {
  id: 9,
  title: 'Beach, Obolon',
  teg: ['Beach'],
  date: [2011, 8, 27],
  portrait: 'portrait',
  imgUrl: __webpack_require__(469)
}, {
  id: 10,
  title: 'Beach, Obolon',
  teg: ['Beach'],
  date: [2011, 8, 27],
  portrait: 'portrait',
  imgUrl: __webpack_require__(470)
}, {
  id: 11,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(471)
}, {
  id: 12,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(472)
}, {
  id: 13,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(473)
}, {
  id: 14,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(474)
}, {
  id: 15,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(475)
}, {
  id: 16,
  title: 'Curly, European square',
  teg: ['Curly'],
  date: [2012, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(476)
}, {
  id: 17,
  title: 'Tatiana, Podgoretsky castle',
  teg: ['Tatiana'],
  date: [2012, 6, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(477)
}, {
  id: 18,
  title: 'Tatiana, Podgoretsky castle',
  teg: ['Tatiana'],
  date: [2012, 6, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(478)
}, {
  id: 19,
  title: 'Tatiana, Podgoretsky castle',
  teg: ['Tatiana'],
  date: [2012, 6, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(479)
}, {
  id: 20,
  title: 'Tatiana, Podgoretsky castle',
  teg: ['Tatiana'],
  date: [2012, 6, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(480)
}, {
  id: 21,
  title: 'Tatiana, Podgoretsky castle',
  teg: ['Tatiana'],
  date: [2012, 6, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(481)
}, {
  id: 22,
  title: 'Tatiana, Portrait',
  teg: ['Tatiana'],
  date: [2013, 3, 3],
  portrait: 'portrait',
  imgUrl: __webpack_require__(482)
}, {
  id: 23,
  title: 'Tatiana, Sunset',
  teg: ['Tatiana'],
  date: [2013, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(483)
}, {
  id: 24,
  title: 'Tatiana, Sunset',
  teg: ['Tatiana'],
  date: [2013, 5, 5],
  portrait: 'portrait',
  imgUrl: __webpack_require__(484)
}, {
  id: 25,
  title: 'Tatiana, Sunset',
  teg: ['Tatiana'],
  date: [2013, 7, 14],
  portrait: 'portrait',
  imgUrl: __webpack_require__(485)
}, {
  id: 26,
  title: 'Tatiana, Sunset',
  teg: ['Tatiana'],
  date: [2013, 7, 14],
  portrait: 'portrait',
  imgUrl: __webpack_require__(486)
}, {
  id: 27,
  title: 'Tatiana, Museum of Pyrogovo',
  teg: ['Tatiana'],
  date: [2013, 8, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(487)
}, {
  id: 28,
  title: 'Tatiana, Museum of Pyrogovo',
  teg: ['Tatiana'],
  date: [2013, 8, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(488)
}, {
  id: 29,
  title: 'Tatiana, Museum of Pyrogovo',
  teg: ['Tatiana'],
  date: [2013, 8, 4],
  portrait: 'portrait',
  imgUrl: __webpack_require__(489)
}, {
  id: 30,
  title: 'Tatiana, Svitlovodsk Reservoir',
  teg: ['Tatiana'],
  date: [2013, 9, 8],
  portrait: 'portrait',
  imgUrl: __webpack_require__(490)
}, {
  id: 31,
  title: 'Tatiana, Svitlovodsk Reservoir',
  teg: ['Tatiana'],
  date: [2013, 9, 8],
  portrait: 'portrait',
  imgUrl: __webpack_require__(491)
}, {
  id: 32,
  title: 'Tatiana, Svitlovodsk Reservoir',
  teg: ['Tatiana'],
  date: [2013, 9, 8],
  portrait: 'portrait',
  imgUrl: __webpack_require__(492)
}, {
  id: 33,
  title: 'Tatiana, Svitlovodsk Reservoir',
  teg: ['Tatiana'],
  date: [2013, 9, 8],
  portrait: 'portrait',
  imgUrl: __webpack_require__(493)
}, {
  id: 34,
  title: 'Tatiana, Uhman',
  teg: ['Tatiana'],
  date: [2013, 10, 6],
  portrait: 'portrait',
  imgUrl: __webpack_require__(494)
}, {
  id: 35,
  title: 'Tatiana, Uhman',
  teg: ['Tatiana'],
  date: [2013, 10, 6],
  portrait: 'portrait',
  imgUrl: __webpack_require__(495)
}, {
  id: 36,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 4, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(496)
}, {
  id: 37,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 4, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(497)
}, {
  id: 38,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 4, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(498)
}, {
  id: 39,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 4, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(499)
}, {
  id: 40,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 4, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(500)
}, {
  id: 41,
  title: 'Oksana, Brody',
  teg: ['Oksana'],
  date: [2014, 9, 27],
  gestation: 'gestation',
  imgUrl: __webpack_require__(501)
}, {
  id: 42,
  title: 'Oksana, Brody',
  teg: ['Oksana'],
  date: [2014, 9, 27],
  gestation: 'gestation',
  imgUrl: __webpack_require__(502)
}, {
  id: 43,
  title: 'Oksana, Brody',
  teg: ['Oksana'],
  date: [2014, 9, 27],
  gestation: 'gestation',
  imgUrl: __webpack_require__(503)
}, {
  id: 44,
  title: 'Oksana, Brody',
  teg: ['Oksana'],
  date: [2014, 9, 27],
  gestation: 'gestation',
  imgUrl: __webpack_require__(504)
}, {
  id: 45,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(505)
}, {
  id: 46,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(506)
}, {
  id: 47,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(507)
}, {
  id: 48,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(508)
}, {
  id: 49,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(509)
}, {
  id: 50,
  title: 'Tatiana, VDNH',
  teg: ['Tatiana'],
  date: [2014, 10, 12],
  portrait: 'portrait',
  imgUrl: __webpack_require__(510)
}, {
  id: 51,
  title: 'Anna, 2 months',
  teg: ['Anna'],
  date: [2015, 2, 21],
  family: 'family',
  imgUrl: __webpack_require__(511)
}, {
  id: 52,
  title: 'Anna, 2 months',
  teg: ['Anna'],
  date: [2015, 2, 21],
  children: 'children',
  imgUrl: __webpack_require__(512)
}, {
  id: 53,
  title: 'Tatiana, Ivy',
  teg: ['Tatiana'],
  date: [2015, 9, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(513)
}, {
  id: 54,
  title: 'Tatiana, Ivy',
  teg: ['Tatiana'],
  date: [2015, 9, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(514)
}, {
  id: 55,
  title: 'Tatiana, Ivy',
  teg: ['Tatiana'],
  date: [2015, 9, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(515)
}, {
  id: 56,
  title: 'Tatiana, Ivy',
  teg: ['Tatiana'],
  date: [2015, 9, 26],
  portrait: 'portrait',
  imgUrl: __webpack_require__(516)
}, {
  id: 57,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(517)
}, {
  id: 58,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(518)
}, {
  id: 59,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(519)
}, {
  id: 60,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(520)
}, {
  id: 61,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(521)
}, {
  id: 62,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(522)
}, {
  id: 63,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(523)
}, {
  id: 64,
  title: 'Ksenia and sakura',
  teg: ['Ksenia'],
  date: [2016, 4, 24],
  portrait: 'portrait',
  imgUrl: __webpack_require__(524)
}, {
  id: 65,
  title: 'Tatiana, Waiting for a miracle',
  teg: ['Tatiana'],
  date: [2016, 10, 1],
  gestation: 'gestation',
  imgUrl: __webpack_require__(525)
}, {
  id: 66,
  title: 'Tatiana, Waiting for a miracle',
  teg: ['Tatiana'],
  date: [2016, 10, 1],
  gestation: 'gestation',
  imgUrl: __webpack_require__(526)
}, {
  id: 67,
  title: 'Tatiana, Waiting for a miracle',
  teg: ['Tatiana'],
  date: [2016, 10, 1],
  gestation: 'gestation',
  imgUrl: __webpack_require__(527)
}, {
  id: 68,
  title: 'Tatiana, Waiting for a miracle',
  teg: ['Tatiana'],
  date: [2016, 10, 1],
  gestation: 'gestation',
  imgUrl: __webpack_require__(528)
}, {
  id: 69,
  title: 'Tatiana, Waiting for a miracle',
  teg: ['Tatiana'],
  date: [2016, 10, 1],
  gestation: 'gestation',
  imgUrl: __webpack_require__(529)
}, {
  id: 70,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(530)
}, {
  id: 71,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(531)
}, {
  id: 72,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(532)
}, {
  id: 73,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(533)
}, {
  id: 74,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(534)
}, {
  id: 75,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(535)
}, {
  id: 76,
  title: 'Tatiana, Studio Yu-Na',
  teg: ['Tatiana'],
  date: [2017, 1, 21],
  gestation: 'gestation',
  imgUrl: __webpack_require__(536)
}, {
  id: 77,
  title: 'Polina, 2 months',
  teg: ['Polina'],
  date: [2017, 4, 22],
  children: 'children',
  imgUrl: __webpack_require__(537)
}, {
  id: 78,
  title: 'Polina, 2 months',
  teg: ['Polina'],
  date: [2017, 4, 22],
  children: 'children',
  imgUrl: __webpack_require__(538)
}, {
  id: 79,
  title: 'Polina, 2 months',
  teg: ['Polina'],
  date: [2017, 4, 22],
  children: 'children',
  imgUrl: __webpack_require__(539)
}, {
  id: 80,
  title: 'Polina, 2 months',
  teg: ['Polina'],
  date: [2017, 4, 22],
  children: 'children',
  imgUrl: __webpack_require__(540)
}, {
  id: 81,
  title: 'Polina, 2 months',
  teg: ['Polina'],
  date: [2017, 4, 22],
  children: 'children',
  imgUrl: __webpack_require__(541)
}, {
  id: 82,
  title: 'Polina, 4 months',
  teg: ['Polina'],
  date: [2017, 5, 16],
  children: 'children',
  imgUrl: __webpack_require__(542)
}, {
  id: 83,
  title: 'Ksenia and Polina',
  teg: ['Polina', 'Ksenia'],
  date: [2017, 5, 28],
  family: 'family',
  imgUrl: __webpack_require__(543)
}, {
  id: 84,
  title: 'Ksenia and Polina',
  teg: ['Polina', 'Ksenia'],
  date: [2017, 5, 28],
  family: 'family',
  imgUrl: __webpack_require__(544)
}, {
  id: 85,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(545)
}, {
  id: 86,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(546)
}, {
  id: 87,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(547)
}, {
  id: 88,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(548)
}, {
  id: 89,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(549)
}, {
  id: 90,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(550)
}, {
  id: 91,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(551)
}, {
  id: 92,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(552)
}, {
  id: 93,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(553)
}, {
  id: 94,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(554)
}, {
  id: 95,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(555)
}, {
  id: 96,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  children: 'children',
  imgUrl: __webpack_require__(556)
}, {
  id: 97,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  family: 'family',
  imgUrl: __webpack_require__(557)
}, {
  id: 98,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  family: 'family',
  imgUrl: __webpack_require__(558)
}, {
  id: 99,
  title: 'Annia, 1 year',
  teg: ['Annia'],
  date: [2017, 8, 5],
  family: 'family',
  imgUrl: __webpack_require__(559)
}, {
  id: 100,
  title: 'Polina, 6 months',
  teg: ['Polina'],
  date: [2017, 8, 12],
  children: 'children',
  imgUrl: __webpack_require__(560)
}, {
  id: 101,
  title: 'Polina, 6 months',
  teg: ['Polina'],
  date: [2017, 8, 12],
  children: 'children',
  imgUrl: __webpack_require__(561)
}, {
  id: 102,
  title: 'Polina, 6 months',
  teg: ['Polina'],
  date: [2017, 8, 12],
  children: 'children',
  imgUrl: __webpack_require__(562)
}, {
  id: 103,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(563)
}, {
  id: 104,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(564)
}, {
  id: 105,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(565)
}, {
  id: 106,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(566)
}, {
  id: 107,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(567)
}, {
  id: 108,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(568)
}, {
  id: 109,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(569)
}, {
  id: 110,
  title: 'Polina, 7 months',
  teg: ['Polina'],
  date: [2017, 8, 27],
  children: 'children',
  imgUrl: __webpack_require__(570)
}, {
  id: 111,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(571)
}, {
  id: 112,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  family: 'family',
  imgUrl: __webpack_require__(572)
}, {
  id: 113,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(573)
}, {
  id: 114,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  family: 'family',
  imgUrl: __webpack_require__(574)
}, {
  id: 115,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(575)
}, {
  id: 116,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(576)
}, {
  id: 117,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(577)
}, {
  id: 118,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(578)
}, {
  id: 119,
  title: 'Nastia and Yulia, Brovary park',
  teg: ['Nastia'],
  date: [2017, 9, 3],
  children: 'children',
  imgUrl: __webpack_require__(579)
}, {
  id: 120,
  title: 'Annia, Brovary',
  teg: ['Annia'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(580)
}, {
  id: 121,
  title: 'Annia, Brovary',
  teg: ['Annia'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(581)
}, {
  id: 122,
  title: 'Annia, Brovary',
  teg: ['Annia'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(582)
}, {
  id: 123,
  title: 'Annia, Brovary',
  teg: ['Annia'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(583)
}, {
  id: 124,
  title: 'Annia, Brovary',
  teg: ['Annia'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(584)
}, {
  id: 125,
  title: 'Polina, 8 months',
  teg: ['Polina'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(585)
}, {
  id: 126,
  title: 'Polina, 8 months',
  teg: ['Polina'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(586)
}, {
  id: 127,
  title: 'Polina, 8 months',
  teg: ['Polina'],
  date: [2017, 9, 16],
  children: 'children',
  imgUrl: __webpack_require__(587)
}, {
  id: 128,
  title: 'Polina, Autumn',
  teg: ['Polina'],
  date: [2017, 10, 16],
  children: 'children',
  imgUrl: __webpack_require__(588)
}, {
  id: 129,
  title: 'Polina, Autumn',
  teg: ['Polina'],
  date: [2017, 10, 16],
  children: 'children',
  imgUrl: __webpack_require__(589)
}, {
  id: 130,
  title: 'Polina, Autumn',
  teg: ['Polina'],
  date: [2017, 10, 16],
  children: 'children',
  imgUrl: __webpack_require__(590)
}, {
  id: 131,
  title: 'Polina, Autumn',
  teg: ['Polina'],
  date: [2017, 10, 16],
  children: 'children',
  imgUrl: __webpack_require__(591)
}, {
  id: 132,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(592)
}, {
  id: 133,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(593)
}, {
  id: 134,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(594)
}, {
  id: 135,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(595)
}, {
  id: 136,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(596)
}, {
  id: 137,
  title: 'Polina, Mikolaia day',
  teg: ['Polina'],
  date: [2017, 12, 19],
  children: 'children',
  imgUrl: __webpack_require__(597)
}, {
  id: 138,
  title: 'Polina, Vigvam',
  teg: ['Polina'],
  date: [2018, 1, 20],
  children: 'children',
  imgUrl: __webpack_require__(598)
}, {
  id: 139,
  title: 'Polina, Vigvam',
  teg: ['Polina'],
  date: [2018, 1, 20],
  children: 'children',
  imgUrl: __webpack_require__(599)
}, {
  id: 140,
  title: 'Polina, Vigvam',
  teg: ['Polina'],
  date: [2018, 1, 20],
  children: 'children',
  imgUrl: __webpack_require__(600)
}, {
  id: 141,
  title: 'Polina, Vigvam',
  teg: ['Polina'],
  date: [2018, 1, 20],
  children: 'children',
  imgUrl: __webpack_require__(601)
}, {
  id: 142,
  title: 'Polina, Vigvam',
  teg: ['Polina'],
  date: [2018, 1, 20],
  children: 'children',
  imgUrl: __webpack_require__(602)
}, {
  id: 143,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  children: 'children',
  imgUrl: __webpack_require__(603)
}, {
  id: 144,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  children: 'children',
  imgUrl: __webpack_require__(604)
}, {
  id: 145,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  children: 'children',
  imgUrl: __webpack_require__(605)
}, {
  id: 146,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  children: 'children',
  imgUrl: __webpack_require__(606)
}, {
  id: 147,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  family: 'family',
  imgUrl: __webpack_require__(607)
}, {
  id: 148,
  title: 'Polina, Polina Bbirthday Party',
  teg: ['Polina'],
  date: [2018, 2, 12],
  family: 'family',
  imgUrl: __webpack_require__(608)
}, {
  id: 149,
  title: 'Polina, Snow',
  teg: ['Polina'],
  date: [2018, 3, 4],
  children: 'children',
  imgUrl: __webpack_require__(609)
}, {
  id: 150,
  title: 'Polina, Snow',
  teg: ['Polina'],
  date: [2018, 3, 4],
  children: 'children',
  imgUrl: __webpack_require__(610)
}, {
  id: 151,
  title: 'Polina, Snow',
  teg: ['Polina'],
  date: [2018, 3, 4],
  children: 'children',
  imgUrl: __webpack_require__(611)
}, {
  id: 152,
  title: 'Polina, Snow',
  teg: ['Polina'],
  date: [2018, 3, 4],
  children: 'children',
  imgUrl: __webpack_require__(612)
}];

exports.imgItems = imgItems;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_007.jpg";

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_008.jpg";

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_009.jpg";

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_010.jpg";

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_011.jpg";

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_012.jpg";

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_013.jpg";

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_014.jpg";

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_015.jpg";

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_016.jpg";

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_017.jpg";

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_018.jpg";

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_019.jpg";

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_020.jpg";

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_021.jpg";

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_022.jpg";

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_023.jpg";

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_024.jpg";

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_025.jpg";

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_026.jpg";

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_027.jpg";

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_028.jpg";

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_029.jpg";

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_030.jpg";

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_031.jpg";

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_032.jpg";

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_033.jpg";

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_034.jpg";

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_035.jpg";

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_036.jpg";

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_037.jpg";

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_038.jpg";

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_039.jpg";

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_040.jpg";

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_041.jpg";

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_042.jpg";

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_043.jpg";

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_044.jpg";

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_045.jpg";

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_046.jpg";

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_047.jpg";

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_048.jpg";

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_049.jpg";

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_050.jpg";

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_051.jpg";

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_052.jpg";

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_053.jpg";

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_054.jpg";

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_055.jpg";

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_056.jpg";

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_057.jpg";

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_058.jpg";

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_059.jpg";

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_060.jpg";

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_061.jpg";

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_062.jpg";

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_063.jpg";

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_064.jpg";

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_065.jpg";

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_066.jpg";

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_067.jpg";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_068.jpg";

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_069.jpg";

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_070.jpg";

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_071.jpg";

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_072.jpg";

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_073.jpg";

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_074.jpg";

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_075.jpg";

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_076.jpg";

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_077.jpg";

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_078.jpg";

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_079.jpg";

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_080.jpg";

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_081.jpg";

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_082.jpg";

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_083.jpg";

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_084.jpg";

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_085.jpg";

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_086.jpg";

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_087.jpg";

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_088.jpg";

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_089.jpg";

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_090.jpg";

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_091.jpg";

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_092.jpg";

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_093.jpg";

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_094.jpg";

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_095.jpg";

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_096.jpg";

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_097.jpg";

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_098.jpg";

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_099.jpg";

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_100.jpg";

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_101.jpg";

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_102.jpg";

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_103.jpg";

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_104.jpg";

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_105.jpg";

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_106.jpg";

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_107.jpg";

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_108.jpg";

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_109.jpg";

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_110.jpg";

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_111.jpg";

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_112.jpg";

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_113.jpg";

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_114.jpg";

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_115.jpg";

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_116.jpg";

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_117.jpg";

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_118.jpg";

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_119.jpg";

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_120.jpg";

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_121.jpg";

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_122.jpg";

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_123.jpg";

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_124.jpg";

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_125.jpg";

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_126.jpg";

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_127.jpg";

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_128.jpg";

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_129.jpg";

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_130.jpg";

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_131.jpg";

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_132.jpg";

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_133.jpg";

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_134.jpg";

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_135.jpg";

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_136.jpg";

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_137.jpg";

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_138.jpg";

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_139.jpg";

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_140.jpg";

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_141.jpg";

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_142.jpg";

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_143.jpg";

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_144.jpg";

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_145.jpg";

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_146.jpg";

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_147.jpg";

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_148.jpg";

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_149.jpg";

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_150.jpg";

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_151.jpg";

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_152.jpg";

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_153.jpg";

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(46);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(614);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checkboxState: false,
      show: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ checkboxState: !this.state.checkboxState });
      this.setState({ show: !this.state.show });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
        )
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;

/***/ }),
/* 614 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(46);

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
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tags = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_Component) {
  _inherits(Tags, _Component);

  function Tags(props) {
    _classCallCheck(this, Tags);

    return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));
  }

  _createClass(Tags, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          this.props.tag
        )
      );
    }
  }]);

  return Tags;
}(_react.Component);

exports.Tags = Tags;

/***/ }),
/* 617 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _links = __webpack_require__(182);

var _form = __webpack_require__(181);

__webpack_require__(619);

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
          { className: 'page-content-M border' },
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
              { className: 'content-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4' },
              React.createElement(
                'div',
                { className: 'item' },
                React.createElement('img', { src: __webpack_require__(620), alt: '' })
              )
            ),
            React.createElement(
              'div',
              { className: 'content-block col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8' },
              React.createElement(
                'div',
                { className: 'grid-container' },
                React.createElement(_form.Form, null),
                React.createElement(_links.Links, null)
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
/* 619 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/foto_17.jpg";

/***/ }),
/* 621 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
]),[199]);