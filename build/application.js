webpackJsonp([0],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskListStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmmiter = __webpack_require__(158);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskListStore = function (_EventEmitter) {
  _inherits(TaskListStore, _EventEmitter);

  function TaskListStore() {
    _classCallCheck(this, TaskListStore);

    var _this = _possibleConstructorReturn(this, (TaskListStore.__proto__ || Object.getPrototypeOf(TaskListStore)).call(this));

    _this._list = [];
    _this._url = 'http://127.0.0.1:4001/list';
    return _this;
  }

  _createClass(TaskListStore, [{
    key: 'addTask',
    value: function addTask(title) {
      var _this2 = this;

      var task = { title: title };
      var xhr = new XMLHttpRequest();

      xhr.open('POST', this._url);
      xhr.setRequestHeader("Content-type", "application/json");

      xhr.send(JSON.stringify(task));

      xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this2._list.push(JSON.parse(xhr.response));
            _this2.publish('dataChanged', _this2._list);
          } else {}
        }
      });
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(id) {
      var _this3 = this;

      var xhr = new XMLHttpRequest();

      xhr.open('DELETE', this._url + ('/' + id));

      xhr.send();

      xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this3._list = _this3._list.filter(function (task) {
              return task.id !== id;
            });

            _this3.publish('dataChanged', _this3._list);
          } else {}
        }
      });
    }
  }, {
    key: 'getList',
    value: function getList(onError) {
      var _this4 = this;

      var xhr = new XMLHttpRequest();

      xhr.open('GET', this._url);
      xhr.send();

      xhr.addEventListener('readystatechange', function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this4._list = JSON.parse(xhr.response);
            _this4.publish('dataChanged', _this4._list);
          } else {
            onError(xhr.status);
          }
        }
      });
    }
  }]);

  return TaskListStore;
}(_eventEmmiter.EventEmitter);

var taskListStore = new TaskListStore();

exports.taskListStore = taskListStore;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._listeners = {};
  }

  _createClass(EventEmitter, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      if (!this._listeners[event]) {
        this._listeners[event] = [];
      }

      this._listeners[event].push(callback);
    }
  }, {
    key: "publish",
    value: function publish(event, data) {
      console.log(event, data);
      this._listeners[event].forEach(function (eventCallback) {
        eventCallback(data);
      });
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(361);


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(143);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(144);

var _reactRouterDom = __webpack_require__(103);

var _counterComponent = __webpack_require__(395);

var _navbarComponent = __webpack_require__(396);

var _taskListComponent = __webpack_require__(399);

var _catalogComponent = __webpack_require__(404);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-line
_reactDom2.default.render(React.createElement(
  'div',
  null,
  React.createElement(
    _reactRouterDom.HashRouter,
    null,
    React.createElement(
      'div',
      { className: 'app' },
      React.createElement(_navbarComponent.NavbarComponent, null),
      React.createElement(
        _reactRouterDom.Switch,
        null,
        React.createElement(_reactRouterDom.Route, { path: '/taskList', render: function render() {
            return React.createElement(_taskListComponent.TaskListComponent, null);
          } }),
        React.createElement(_reactRouterDom.Route, { path: '/contacts', render: function render() {
            return React.createElement(
              'h1',
              null,
              'Contacts'
            );
          } }),
        React.createElement(_reactRouterDom.Route, { path: '/catalog', render: function render() {
            return React.createElement(_catalogComponent.CatalogComponent, null);
          } }),
        React.createElement(_reactRouter.Redirect, { path: '/', to: '/taskList' })
      )
    )
  )
), document.getElementById('taskList'));

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

var _taskList = __webpack_require__(157);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var CounterComponent = function (_Component) {
  _inherits(CounterComponent, _Component);

  function CounterComponent() {
    _classCallCheck(this, CounterComponent);

    var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this));

    _this.state = {
      totalTaskCount: 0
    };
    return _this;
  }

  _createClass(CounterComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _taskList.taskListStore.subscribe('dataChanged', function (tasks) {
        _this2.setState(function (state) {
          state.totalTaskCount = tasks.length;
          return state;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        this.state.totalTaskCount
      );
    }
  }]);

  return CounterComponent;
}(_react.Component);

exports.CounterComponent = CounterComponent;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

var _navbar = __webpack_require__(397);

var _reactRouterDom = __webpack_require__(103);

__webpack_require__(398);

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
          { key: Symbol(i).toString(), className: 'navbar-link', to: item.route },
          item.title
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarItems = [{
  title: 'Tasks',
  route: '/taskList'
}, {
  title: 'Contacts',
  route: '/contacts'
}, {
  title: 'Catalog',
  route: '/catalog'
}];

exports.navbarItems = navbarItems;

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskListComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

var _taskComponent = __webpack_require__(400);

var _taskListHeaderComponent = __webpack_require__(402);

var _taskList = __webpack_require__(157);

__webpack_require__(403);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var TaskListComponent = function (_Component) {
  _inherits(TaskListComponent, _Component);

  function TaskListComponent(rootElement) {
    _classCallCheck(this, TaskListComponent);

    var _this = _possibleConstructorReturn(this, (TaskListComponent.__proto__ || Object.getPrototypeOf(TaskListComponent)).call(this));

    _this.initComponent();
    return _this;
  }

  _createClass(TaskListComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        tasks: []
      });
    }
  }, {
    key: 'initComponent',
    value: function initComponent() {
      var _this2 = this;

      console.log('Init');
      this.render();

      _taskList.taskListStore.subscribe('dataChanged', function (data) {
        _this2.setState(function () {
          return { tasks: data };
        });
      });
    }
  }, {
    key: 'addTask',
    value: function addTask(title) {
      debugger;

      _taskList.taskListStore.addTask(title);
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(id) {
      console.log(id);
      _taskList.taskListStore.deleteTask(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var list = [];
      if (this.state) {
        list = this.state.tasks.map(function (item) {
          return React.createElement(_taskComponent.TaskComponent, { key: item.id, test: 'hello-world', task: item });
        });
      }

      return React.createElement(
        'div',
        { className: 'task-list' },
        React.createElement(_taskListHeaderComponent.HeaderComponent, { onAdd: this.addTask.bind(this) }),
        React.createElement(
          'main',
          { className: 'task-list__main' },
          list
        ),
        React.createElement('footer', { className: 'task-list__footer' })
      );
    }
  }]);

  return TaskListComponent;
}(_react.Component);

exports.TaskListComponent = TaskListComponent;

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var TaskComponent = function (_Component) {
  _inherits(TaskComponent, _Component);

  function TaskComponent() {
    _classCallCheck(this, TaskComponent);

    var _this = _possibleConstructorReturn(this, (TaskComponent.__proto__ || Object.getPrototypeOf(TaskComponent)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(TaskComponent, [{
    key: 'render',
    value: function render() {
      var title = this.props.task.title;
      var isCompleted = this.props.task.completed;

      return React.createElement(
        'div',
        { className: 'task edit' },
        React.createElement('img', { src: __webpack_require__(401), alt: '' }),
        React.createElement('input', { type: 'checkbox', checked: isCompleted, onChange: function onChange() {} }),
        React.createElement(
          'span',
          { className: 'task__title' },
          React.createElement(
            'span',
            { className: 'task__title-text' },
            title
          ),
          React.createElement('input', { className: 'task__title-input', type: 'text' })
        )
      );
    }
  }]);

  return TaskComponent;
}(_react.Component);

exports.TaskComponent = TaskComponent;

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/accessories_large_2x.jpg";

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var HeaderComponent = function (_Component) {
  _inherits(HeaderComponent, _Component);

  function HeaderComponent() {
    _classCallCheck(this, HeaderComponent);

    var _this = _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this));

    _this.state = {
      title: ''
    };
    return _this;
  }

  _createClass(HeaderComponent, [{
    key: 'addTask',
    value: function addTask() {
      this.props.onAdd(this.state.title);
      this.setState(function (state) {
        state.title = '';
        return state;
      });
    }
  }, {
    key: 'onChangeHandler',
    value: function onChangeHandler(event) {
      var title = event.target.value;
      this.setState(function (state) {
        state.title = title;
        return state;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'header',
        { className: 'task-list__header' },
        React.createElement('input', { type: 'text', onChange: this.onChangeHandler.bind(this), value: this.state.title }),
        React.createElement(
          'button',
          { onClick: this.addTask.bind(this) },
          'Add'
        )
      );
    }
  }]);

  return HeaderComponent;
}(_react.Component);

exports.HeaderComponent = HeaderComponent;

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var React = _interopRequireWildcard(_react);

var _phones = __webpack_require__(405);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var CatalogComponent = function (_Component) {
  _inherits(CatalogComponent, _Component);

  function CatalogComponent() {
    _classCallCheck(this, CatalogComponent);

    var _this = _possibleConstructorReturn(this, (CatalogComponent.__proto__ || Object.getPrototypeOf(CatalogComponent)).call(this));

    _this.state = {
      phones: []
    };
    return _this;
  }

  _createClass(CatalogComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _phones.phonesStore.subscribe('dataChanged', function (phones) {
        _this2.setState(function (state) {
          state.phones = phones;
          return state;
        });
      });

      _phones.phonesStore.getList();
    }
  }, {
    key: 'render',
    value: function render() {
      var phones = this.state.phones.map(function (item, i) {
        return React.createElement(
          'div',
          { className: 'catalog__item', key: i },
          React.createElement('img', { src: item.imgUrl, alt: '' }),
          React.createElement(
            'h2',
            { className: 'catalog__title' },
            item.name,
            '  ',
            item.price,
            ' $'
          )
        );
      });
      return React.createElement(
        'div',
        { className: 'catalog' },
        phones
      );
    }
  }]);

  return CatalogComponent;
}(_react.Component);

exports.CatalogComponent = CatalogComponent;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phonesStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmmiter = __webpack_require__(158);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhonesStore = function (_EventEmitter) {
  _inherits(PhonesStore, _EventEmitter);

  function PhonesStore() {
    _classCallCheck(this, PhonesStore);

    var _this = _possibleConstructorReturn(this, (PhonesStore.__proto__ || Object.getPrototypeOf(PhonesStore)).call(this));

    _this._list = [];
    _this._url = 'http://127.0.0.1:4002/api/v1/phones';
    return _this;
  }

  _createClass(PhonesStore, [{
    key: 'getList',
    value: function getList(onError) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      xhr.open('GET', this._url);
      xhr.send();

      xhr.addEventListener('readystatechange', function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var list = JSON.parse(xhr.response).map(function (item) {
              item.imgUrl = 'http://127.0.0.1:4002/api/v1/' + item.imgUrl;
              return item;
            });
            console.log(list);
            _this2._list = list;

            _this2.publish('dataChanged', _this2._list);
          } else {
            onError(xhr.status);
          }
        }
      });
    }
  }]);

  return PhonesStore;
}(_eventEmmiter.EventEmitter);

var phonesStore = new PhonesStore();

exports.phonesStore = phonesStore;

/***/ })

},[159]);