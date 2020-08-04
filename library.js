'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
    _inherits(Library, _React$Component);

    function Library(props) {
        _classCallCheck(this, Library);

        return _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this, props));
    }

    return Library;
}(React.Component);

// function BookInput(props){


var BookInput = function (_React$Component2) {
    _inherits(BookInput, _React$Component2);

    function BookInput(props) {
        _classCallCheck(this, BookInput);

        var _this2 = _possibleConstructorReturn(this, (BookInput.__proto__ || Object.getPrototypeOf(BookInput)).call(this, props));

        _this2.state = {
            title: "",
            author: "",
            pages: "",
            read: false
        };
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(BookInput, [{
        key: "handleChange",
        value: function handleChange(event) {
            var target = event.target;
            var value = target.name === "read" ? target.checked : target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            console.log(this.state.title, this.state.author, this.state.pages, this.state.read);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { id: "inputs" },
                React.createElement(
                    "label",
                    null,
                    "Title:",
                    React.createElement("input", {
                        name: "title",
                        type: "text",
                        id: "title",
                        value: this.state.title,
                        onChange: this.handleChange
                    })
                ),
                React.createElement(
                    "label",
                    null,
                    "Author:",
                    React.createElement("input", { name: "author",
                        type: "text",
                        id: "author",
                        value: this.state.author,
                        onChange: this.handleChange
                    })
                ),
                React.createElement(
                    "label",
                    null,
                    "Pages:",
                    React.createElement("input", { name: "pages",
                        type: "text",
                        id: "pages",
                        value: this.state.pages,
                        onChange: this.handleChange
                    })
                ),
                React.createElement(
                    "label",
                    null,
                    "Read?",
                    React.createElement("input", {
                        name: "read",
                        type: "checkbox",
                        id: "read",
                        checked: this.state.read,
                        onChange: this.handleChange
                    })
                ),
                React.createElement(
                    "button",
                    {
                        type: "button",
                        id: "btn",
                        onClick: this.handleSubmit
                    },
                    "Add Book"
                )
            );
        }
    }]);

    return BookInput;
}(React.Component);

var Book = function (_React$Component3) {
    _inherits(Book, _React$Component3);

    function Book(props) {
        _classCallCheck(this, Book);

        var _this3 = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

        _this3.state = { clickDel: false };
        return _this3;
    }

    _createClass(Book, [{
        key: "handleClick",
        value: function handleClick() {
            this.setState({ clickDel: true });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var read = void 0;
            this.props.book.read ? read = "READ" : read = 'NOT READ';

            if (this.state.clickDel) return null;

            return React.createElement(
                "div",
                { className: "aBook" },
                React.createElement(
                    "p",
                    null,
                    this.props.book.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.book.author
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.book.pages
                ),
                React.createElement(
                    "p",
                    { className: "readBtn" },
                    read
                ),
                React.createElement(DeleteBtn, {
                    onClick: function onClick() {
                        return _this4.handleClick();
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
        "button",
        {
            className: "delBtn",
            onClick: function onClick() {
                return props.onClick();
            }
        },
        "DELETE"
    );
}

function BookContainer(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement(BookInput, null)
        ),
        React.createElement(
            "div",
            { className: "books" },
            React.createElement(Book, { book: foundation }),
            React.createElement(Book, { book: foundation2 })
        )
    );
}

var foundation = { title: "Foundation", author: "Isaac Asimov", pages: 244, read: true };
var foundation2 = { title: "Foundation and Empire", author: "Isaac Asimov", pages: 256, read: true };

var domContainer = document.querySelector('#reactTest');
ReactDOM.render(React.createElement(BookContainer, null), domContainer);