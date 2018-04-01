// /// <reference path="./productCategory.ts" />
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    categories = __importStar(categories);
    var Initial = /** @class */ (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
            this.displayPrice = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = /** @class */ (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 230;
            this.displayPrice = 2.30;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = /** @class */ (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 240;
            this.displayPrice = 2.40;
            this.category = new categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = /** @class */ (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 220;
            this.displayPrice = 2.20;
            this.category = new categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = /** @class */ (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 100;
            this.displayPrice = 1.00;
            this.category = new categories.KidsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = /** @class */ (function () {
        function Cashews() {
            this.name = "Cashews";
            this.price = 110;
            this.displayPrice = 1.10;
            this.category = new categories.KidsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = /** @class */ (function () {
        function Plain() {
            this.name = "Plain";
            this.price = 210;
            this.displayPrice = 2.10;
            this.category = new categories.ChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = /** @class */ (function () {
        function Cheddar() {
            this.name = "Cheddar";
            this.price = 250;
            this.displayPrice = 2.50;
            this.category = new categories.ChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = /** @class */ (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 120;
            this.displayPrice = 1.20;
            this.category = new categories.KidsCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = /** @class */ (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 190;
            this.displayPrice = 1.90;
            this.category = new categories.KidsCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hershey = /** @class */ (function () {
        function Hershey() {
            this.name = "Hershey's";
            this.price = 130;
            this.displayPrice = 1.30;
            this.category = new categories.CandyBarCategory();
        }
        return Hershey;
    }());
    exports.Hershey = Hershey;
    var MilkyWay = /** @class */ (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 180;
            this.displayPrice = 1.80;
            this.category = new categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=product.js.map