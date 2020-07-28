'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Book = function (_React$Component) {
    _inherits(Book, _React$Component);

    function Book(props) {
        _classCallCheck(this, Book);

        // const {title, author, pages} = this.props;
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

// function Book(props){
//     return(
//         <div className="aBook">
//             <p>{props.book.title}</p>
//             <p>{props.book.author}</p>
//             <p>{props.book.pages}</p>
//             <p className="readBtn">{props.book.read}</p>
//             {/* <button className="delBtn">DELETE</button> */}
//             <DeleteBtn/>
//         </div>
//     );
// }

var DeleteBtn = function (_React$Component2) {
    _inherits(DeleteBtn, _React$Component2);

    function DeleteBtn(props) {
        _classCallCheck(this, DeleteBtn);

        var _this3 = _possibleConstructorReturn(this, (DeleteBtn.__proto__ || Object.getPrototypeOf(DeleteBtn)).call(this, props));

        _this3.state = { clicked: false };
        return _this3;
    }

    _createClass(DeleteBtn, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.props.value) {
                return 'Works';
            }

            return React.createElement(
                'button',
                {
                    className: 'delBtn',
                    onClick: function onClick() {
                        return _this4.props.onClick();
                    }
                },
                'DELETE'
            );
        }
    }]);

    return DeleteBtn;
}(React.Component);

function BookContainer(props) {
    return React.createElement(
        'div',
        { className: 'books' },
        React.createElement(Book, { book: foundation })
    );
}

var ClickButton = function (_React$Component3) {
    _inherits(ClickButton, _React$Component3);

    function ClickButton(props) {
        _classCallCheck(this, ClickButton);

        var _this5 = _possibleConstructorReturn(this, (ClickButton.__proto__ || Object.getPrototypeOf(ClickButton)).call(this, props));

        _this5.state = { clicked: false };
        return _this5;
    }

    _createClass(ClickButton, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            if (this.state.clicked) {
                return 'You clicked this.';
            }

            return React.createElement(
                'button',
                { onClick: function onClick() {
                        return _this6.setState({ clicked: true });
                    } },
                'Click meeee'
            );
        }
    }]);

    return ClickButton;
}(React.Component);

var foundation = { title: "Foundation", author: "Isaac Asimov", pages: 244, read: true };

var domContainer = document.querySelector('#reactTest');
ReactDOM.render(React.createElement(BookContainer, null), domContainer);