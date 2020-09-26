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

var ReadBtn = function (_React$Component) {
    _inherits(ReadBtn, _React$Component);

    function ReadBtn(props) {
        _classCallCheck(this, ReadBtn);

        var _this = _possibleConstructorReturn(this, (ReadBtn.__proto__ || Object.getPrototypeOf(ReadBtn)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(ReadBtn, [{
        key: "handleClick",
        value: function handleClick(event) {
            var readClass = event.target.className;
            console.log(readClass);
            console.log(this.props.read);
        }
    }, {
        key: "render",
        value: function render() {
            var renderClass = void 0;
            this.props.read ? renderClass = "read" : renderClass = "notRead";
            return React.createElement("div", {
                className: renderClass,
                onClick: this.handleClick
            });
        }
    }]);

    return ReadBtn;
}(React.Component);

var BookInput = function (_React$Component2) {
    _inherits(BookInput, _React$Component2);

    function BookInput(props) {
        _classCallCheck(this, BookInput);

        var _this2 = _possibleConstructorReturn(this, (BookInput.__proto__ || Object.getPrototypeOf(BookInput)).call(this, props));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
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

var Book = function (_React$Component3) {
    _inherits(Book, _React$Component3);

    function Book(props) {
        _classCallCheck(this, Book);

        return _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));
    }

    _createClass(Book, [{
        key: "render",
        value: function render() {
            var _this4 = this;

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
                        this.props.book.pages + " Pages"
                    ),
                    React.createElement(ReadBtn, {
                        read: this.props.book.read
                    }),
                    React.createElement(DeleteBtn, {
                        onClick: function onClick() {
                            return _this4.props.handleDel(event);
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

var Library = function (_React$Component4) {
    _inherits(Library, _React$Component4);

    function Library(props) {
        _classCallCheck(this, Library);

        var _this5 = _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this, props));

        _this5.state = {
            title: "Dune",
            author: "Frank Herbert",
            pages: 604,
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg",
            read: false,
            search: "Oathbringer",
            books: [{ title: "Foundation", author: "Isaac Asimov", pages: 244, read: true, cover: "https://i.pinimg.com/originals/c6/6e/bc/c66ebc177446badebed65a0d80c45a64.jpg" }, { title: "The Way of Kings", author: "Brandon Sanderson", pages: 1007, read: true, cover: "https://prodimage.images-bn.com/pimages/9780765376671_p0_v5_s1200x630.jpg" }, { title: "A Storm of Swords", author: "George R. R. Martin", pages: 992, read: true, cover: "https://images-na.ssl-images-amazon.com/images/I/91-KBK-9K2L.jpg" }],
            readSearch: false
        };
        _this5.handleChange = _this5.handleChange.bind(_this5);
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        _this5.handleDel = _this5.handleDel.bind(_this5);
        _this5.searchBook = _this5.searchBook.bind(_this5);
        return _this5;
    }

    _createClass(Library, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // localStorage.removeItem('library');
            var library = JSON.parse(localStorage.getItem('library'));
            if (library) this.setState({ books: library });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var target = event.target;
            var value = target.name === "read" || target.name === "readSearch" ? target.checked : target.value;
            // const value = target.name === "readSearch"? target.checked: target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var _this6 = this;

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
                // console.table(this.state.books);
                localStorage.setItem('library', JSON.stringify(_this6.state.books));
            });
            event.preventDefault();
        }
    }, {
        key: "handleDel",
        value: function handleDel(event) {
            var _this7 = this;

            var target = event.target.parentElement;
            var title = target.querySelector(".title").innerHTML;
            var newBooks = this.state.books;
            var index = newBooks.map(function (book) {
                return book.title;
            }).indexOf(title);
            newBooks.splice(index, 1);
            this.setState({
                books: newBooks
            }, function () {
                localStorage.setItem('library', JSON.stringify(_this7.state.books));
            });
        }
    }, {
        key: "searchBook",
        value: function searchBook(event) {
            var _this8 = this;

            event.persist();
            var query = this.state.search;
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + query).then(function (res) {
                return res.json();
            }).then(function (result) {
                // console.log(result);
                console.log(_this8.state.readSearch);
                _this8.setState({
                    title: result.items[0].volumeInfo.title,
                    author: result.items[0].volumeInfo.authors[0],
                    pages: result.items[0].volumeInfo.pageCount,
                    cover: result.items[0].volumeInfo.imageLinks.smallThumbnail,
                    read: _this8.state.readSearch
                });
                _this8.handleSubmit(event);
            });
            this.setState({ search: "" });
            event.preventDefault();
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

var BookSearch = function (_React$Component5) {
    _inherits(BookSearch, _React$Component5);

    function BookSearch(props) {
        _classCallCheck(this, BookSearch);

        var _this9 = _possibleConstructorReturn(this, (BookSearch.__proto__ || Object.getPrototypeOf(BookSearch)).call(this, props));

        _this9.handleChange = _this9.handleChange.bind(_this9);
        _this9.handleSubmit = _this9.handleSubmit.bind(_this9);
        return _this9;
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
                { id: "inputs", onSubmit: function onSubmit(e) {
                        e.preventDefault();
                    } },
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
                    "label",
                    null,
                    "Read?",
                    React.createElement("input", {
                        name: "readSearch",
                        type: "checkbox",
                        id: "readSearch",
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
                    "Search Book"
                )
            );
        }
    }]);

    return BookSearch;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Library, null), domContainer);