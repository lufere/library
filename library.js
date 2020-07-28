'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Book = function (_React$Component) {
    _inherits(Book, _React$Component);

    function Book(props) {
        _classCallCheck(this, Book);

        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

        _this.state = { clickDel: false };
        return _this;
    }

    _createClass(Book, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState({ clickDel: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var read = void 0;
            this.props.book.read ? read = "READ" : read = 'NOT READ';

            if (this.state.clickDel) return null;

            return React.createElement(
                'div',
                { className: 'aBook' },
                React.createElement(
                    'p',
                    null,
                    this.props.book.title
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.book.author
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.book.pages
                ),
                React.createElement(
                    'p',
                    { className: 'readBtn' },
                    read
                ),
                React.createElement(DeleteBtn, {
                    onClick: function onClick() {
                        return _this2.handleClick();
                    },
                    value: this.state.clickDel
                })
            );
        }
    }]);

    return Book;
}(React.Component);

function DeleteBtn(props) {
    if (props.value) {
        return 'Works';
    }
    return React.createElement(
        'button',
        {
            className: 'delBtn',
            onClick: function onClick() {
                return props.onClick();
            }
        },
        'DELETE'
    );
}

function BookContainer(props) {
    return React.createElement(
        'div',
        { className: 'books' },
        React.createElement(Book, { book: foundation }),
        React.createElement(Book, { book: foundation2 })
    );
}

var foundation = { title: "Foundation", author: "Isaac Asimov", pages: 244, read: true };
var foundation2 = { title: "Foundation and Empire", author: "Isaac Asimov", pages: 256, read: true };

var domContainer = document.querySelector('#reactTest');
ReactDOM.render(React.createElement(BookContainer, null), domContainer);