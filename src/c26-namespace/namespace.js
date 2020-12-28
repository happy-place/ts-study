var Home;
(function (Home) {
    var Head = /** @class */ (function () {
        function Head() {
            var elem = document.createElement('div');
            elem.innerText = 'This is header';
            document.body.appendChild(elem);
        }
        return Head;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Head();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
