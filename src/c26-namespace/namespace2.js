// namespace 支持嵌套，以 x.y 的形式被访问
var House;
(function (House) {
    let Badroom;
    (function (Badroom) {
        class Bad {
            doubleBed(bed) {
                return bed * 2;
            }
        }
        Badroom.Bad = Bad;
    })(Badroom = House.Badroom || (House.Badroom = {}));
})(House || (House = {}));
