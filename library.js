'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Book(props) {
  return React.createElement(
    "div",
    { className: "aBook" },
    React.createElement(
      "p",
      null,
      props.book.title
    ),
    React.createElement(
      "p",
      null,
      props.book.author
    ),
    React.createElement(
      "p",
      null,
      props.book.pages
    ),
    React.createElement(
      "p",
      { className: "readBtn" },
      props.book.read
    ),
    React.createElement(
      "button",
      { className: "delBtn" },
      "DELETE"
    )
  );
}

var ClickButton = function (_React$Component) {
  _inherits(ClickButton, _React$Component);

  function ClickButton(props) {
    _classCallCheck(this, ClickButton);

    var _this = _possibleConstructorReturn(this, (ClickButton.__proto__ || Object.getPrototypeOf(ClickButton)).call(this, props));

    _this.state = { clicked: false };
    return _this;
  }

  _createClass(ClickButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.clicked) {
        return 'You clicked this.';
      }

      return React.createElement(
        "button",
        { onClick: function onClick() {
            return _this2.setState({ clicked: true });
          } },
        "Click meeee"
      );
    }
  }]);

  return ClickButton;
}(React.Component);

var foundation = { title: "Foundation", author: "Isaac Asimov", pages: 244 };

var domContainer = document.querySelector('#reactTest');
ReactDOM.render(React.createElement(Book, { book: foundation }), domContainer);