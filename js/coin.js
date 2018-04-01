var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    namespace Money {
        export namespace Coins { // nested namespace!
    */
    var Coin = /** @class */ (function () {
        //value: number; // not necessary if we use 'public' access modifier in constructor below!
        function Coin(value) {
            this.value = value;
            this.imagePath = "img/"; // can't be accessed outside the namespace
            this.value = value;
        }
        Object.defineProperty(Coin.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        return Coin;
    }());
    exports.Coin = Coin;
    var Quarter = /** @class */ (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            var _this = _super.call(this, 25) || this;
            _this.imageName = "Quarter";
            return _this;
        }
        ;
        Quarter.prototype.getImageUrl = function () {
            return this.imagePath + this.imageName + ".png"; // relative path
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = /** @class */ (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            var _this = _super.call(this, 10) || this;
            _this.imageName = "Dime";
            return _this;
        }
        ;
        Dime.prototype.getImageUrl = function () {
            return this.imagePath + this.imageName + ".png"; // relative path
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = /** @class */ (function (_super) {
        __extends(Half, _super);
        function Half() {
            var _this = _super.call(this, 50) || this;
            _this.imageName = "Half";
            return _this;
        }
        ;
        Half.prototype.getImageUrl = function () {
            return this.imagePath + this.imageName + ".png"; // relative path
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = /** @class */ (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            var _this = _super.call(this, 100) || this;
            _this.imageName = "Dollar";
            return _this;
        }
        ;
        Dollar.prototype.getImageUrl = function () {
            return this.imagePath + this.imageName + ".png"; // relative path
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
/*
    }
}
*/ 
//# sourceMappingURL=coin.js.map