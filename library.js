'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DeleteBtn(props) {
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

var BookInput = function (_React$Component) {
    _inherits(BookInput, _React$Component);

    function BookInput(props) {
        _classCallCheck(this, BookInput);

        var _this = _possibleConstructorReturn(this, (BookInput.__proto__ || Object.getPrototypeOf(BookInput)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(BookInput, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.props.onInputChange(event);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            this.props.onFormSubmit(event);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { id: "inputs" },
                React.createElement(
                    "h2",
                    null,
                    "Add a book manually:"
                ),
                React.createElement(
                    "label",
                    null,
                    "Title:",
                    React.createElement("input", {
                        name: "title",
                        type: "text",
                        id: "title",
                        value: this.props.title,
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
                        value: this.props.author,
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
                        value: this.props.pages,
                        onChange: this.handleChange
                    })
                ),
                React.createElement(
                    "label",
                    null,
                    "Cover URL:",
                    React.createElement("input", { name: "cover",
                        type: "text",
                        id: "cover",
                        value: this.props.cover,
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
                        checked: this.props.read,
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

var Book = function (_React$Component2) {
    _inherits(Book, _React$Component2);

    function Book(props) {
        _classCallCheck(this, Book);

        return _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));
    }

    _createClass(Book, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var read = void 0;
            var defaultBG = "https://cdn.hipwallpaper.com/i/7/96/AKf6Qb.jpg";
            var background = void 0;
            this.props.book.cover ? background = this.props.book.cover : background = defaultBG;
            this.props.book.read ? read = "READ" : read = 'NOT READ';
            return React.createElement(
                "div",
                { className: "aBookWrapper", style: { backgroundImage: "url(" + background + ")" } },
                React.createElement(
                    "div",
                    { className: "aBook" },
                    React.createElement(
                        "p",
                        { className: "title" },
                        this.props.book.title
                    ),
                    React.createElement(
                        "p",
                        { className: "author" },
                        this.props.book.author
                    ),
                    React.createElement(
                        "p",
                        { className: "pages" },
                        this.props.book.pages
                    ),
                    React.createElement(
                        "p",
                        { className: "readBtn" },
                        read
                    ),
                    React.createElement(DeleteBtn, {
                        onClick: function onClick() {
                            return _this3.props.handleDel(event);
                        }
                    })
                )
            );
        }
    }]);

    return Book;
}(React.Component);

function BookContainer(props) {
    var books = props.books;
    return React.createElement(
        "div",
        { className: "books" },
        books.map(function (book) {
            return React.createElement(Book, {
                handleDel: function handleDel() {
                    return props.handleDel(event);
                },
                key: book.title,
                book: book
            });
        })
    );
}

var Library = function (_React$Component3) {
    _inherits(Library, _React$Component3);

    function Library(props) {
        _classCallCheck(this, Library);

        var _this4 = _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this, props));

        _this4.state = {
            title: "Dune",
            author: "Frank Herbert",
            pages: 604,
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg",
            read: false,
            search: "A storm of swords",
            books: [{ title: "Foundation", author: "Isaac Asimov", pages: 244, read: true, cover: "https://i.pinimg.com/originals/c6/6e/bc/c66ebc177446badebed65a0d80c45a64.jpg" }, { title: "The Way of Kings", author: "Brandon Sanderson", pages: 1007, read: true, cover: "https://prodimage.images-bn.com/pimages/9780765376671_p0_v5_s1200x630.jpg" }]
        };
        _this4.handleChange = _this4.handleChange.bind(_this4);
        _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
        _this4.handleDel = _this4.handleDel.bind(_this4);
        _this4.searchBook = _this4.searchBook.bind(_this4);
        return _this4;
    }

    _createClass(Library, [{
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
            var _this5 = this;

            var newBooks = this.state.books;
            this.setState({
                books: newBooks.concat([{
                    title: this.state.title,
                    author: this.state.author,
                    pages: this.state.pages,
                    cover: this.state.cover,
                    read: this.state.read
                }]),
                title: "",
                author: "",
                pages: "",
                cover: "",
                read: ""
            }, function () {
                console.table(_this5.state.books);
            });
            event.preventDefault();
        }
    }, {
        key: "handleDel",
        value: function handleDel(event) {
            var target = event.target.parentElement;
            var title = target.querySelector(".title").innerHTML;
            var newBooks = this.state.books;
            var index = newBooks.map(function (book) {
                return book.title;
            }).indexOf(title);
            newBooks.splice(index, 1);
            this.setState({
                books: newBooks
            });
        }
    }, {
        key: "searchBook",
        value: function searchBook() {
            var query = this.state.search;
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + query).then(function (res) {
                return res.json();
            }).then(function (result) {
                console.log(result);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var values = {
                title: this.state.title,
                author: this.state.author,
                pages: this.state.pages,
                cover: this.state.cover,
                read: this.state.read
            };
            return React.createElement(
                "div",
                null,
                React.createElement(BookContainer, {
                    handleDel: this.handleDel,
                    books: this.state.books
                }),
                React.createElement(
                    "div",
                    { id: "searchBars" },
                    React.createElement(BookInput, Object.assign({
                        onInputChange: this.handleChange,
                        onFormSubmit: this.handleSubmit
                    }, values)),
                    React.createElement(
                        "p",
                        { id: "or" },
                        "OR"
                    ),
                    React.createElement(BookSearch, {
                        onInputChange: this.handleChange,
                        onFormSubmit: this.searchBook,
                        search: this.state.search
                    })
                )
            );
        }
    }]);

    return Library;
}(React.Component);

var BookSearch = function (_React$Component4) {
    _inherits(BookSearch, _React$Component4);

    function BookSearch(props) {
        _classCallCheck(this, BookSearch);

        var _this6 = _possibleConstructorReturn(this, (BookSearch.__proto__ || Object.getPrototypeOf(BookSearch)).call(this, props));

        _this6.handleChange = _this6.handleChange.bind(_this6);
        _this6.handleSubmit = _this6.handleSubmit.bind(_this6);
        return _this6;
    }

    _createClass(BookSearch, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.props.onInputChange(event);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            this.props.onFormSubmit(event);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { id: "inputs" },
                React.createElement(
                    "h2",
                    null,
                    "Search in Google Books:"
                ),
                React.createElement(
                    "label",
                    null,
                    "Search query:",
                    React.createElement("input", {
                        name: "search",
                        type: "text",
                        id: "search",
                        value: this.props.search,
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
                    "Search Book"
                )
            );
        }
    }]);

    return BookSearch;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Library, null), domContainer);