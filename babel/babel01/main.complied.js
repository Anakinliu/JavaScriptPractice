"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// let fn = (x) => {
//     return x + 2;
// }
var A = /*#__PURE__*/function () {
  function A(x) {
    var _this = this;

    _classCallCheck(this, A);

    _defineProperty(this, "hi", function () {
      console.log(_this.age);
    });

    _defineProperty(this, "hi2", 666);

    this.age = x;

    this.test = function () {
      console.log(_this.age);
    };
  }

  _createClass(A, [{
    key: "say",
    value: function say() {
      console.log(this.age);
    }
  }]);

  return A;
}();

_defineProperty(A, "name", 'AAA');

console.log(A.name);
console.log(A.hi);
console.log(A.hi2);
var aa = new A(3);
console.log(aa.hi);
console.log(aa.hi2);
