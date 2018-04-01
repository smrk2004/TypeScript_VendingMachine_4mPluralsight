/// <reference path="../ts/typings/knockout.d.ts" />
// /// <reference path="./coin.ts" />
// /// <reference path="./product.ts" />
// /// <reference path="./productFactory.ts" />
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
define(["require", "exports", "./coin", "./product", "./productFactory"], function (require, exports, Coins, product_1, productFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Coins = __importStar(Coins);
    productFactory_1 = __importDefault(productFactory_1);
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var Cell = /** @class */ (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3); // uses generics implicitly!
            this.sold = ko.observable(false); // uses generics explicitly!
        }
        return Cell;
    }());
    var VendingMachine = /** @class */ (function () {
        function VendingMachine() {
            var _this = this;
            this.paid = ko.observable(0); // now an observable via ko not direct-init to 0
            // total change inserted
            this.paidStr = ko.observable("0");
            this.selectedCell = ko.observable(new Cell(new product_1.Initial));
            this.cells = ko.observableArray([]); // observable array
            this.acceptedCoins = [new Coins.Quarter(), new Coins.Dime(), new Coins.Half(), new Coins.Dollar()];
            this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
            this.select = function (cell) {
                cell.sold(false);
                _this.selectedCell(cell);
            };
            // use arrow fn, to ensure 'this' reprs the object immediately outside the arrow fn, here referring to VendingMachine object
            this.acceptCoin = function (coin) {
                var oldTotal = _this.paid(); // get val from observable
                var newTotal = oldTotal + coin.Value;
                var paidDollars = (newTotal >= 100) ? Math.floor(newTotal / 100) : 0;
                var paidCentsPastDollar = (newTotal % 100);
                var paidCentsPastDollarStr = (paidCentsPastDollar < 10 ? "0" : "") + paidCentsPastDollar.toString();
                _this.paidStr(paidDollars + '.' + paidCentsPastDollarStr);
                _this.paid(newTotal); // pass in new value to observable    // OLD CODE        //        //this.paid += coin.Value;        //var element:any = document.getElementById("total");        //    element.innerHTML = this.paid.toString();
            };
            this.pay = function () {
                if (_this.selectedCell().stock() < 1) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                var currentPaid = _this.paid();
                var newTotal = Math.round(100 * (currentPaid - _this.selectedCell().product.price)) / 100;
                var paidDollars = (newTotal >= 100) ? Math.floor(newTotal / 100) : 0;
                var paidCentsPastDollar = (newTotal % 100);
                var paidCentsPastDollarStr = (paidCentsPastDollar < 10 ? "0" : "") + paidCentsPastDollar.toString();
                _this.paidStr(paidDollars + '.' + paidCentsPastDollarStr);
                _this.paid(newTotal);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (givenSize) {
                this.cells([]); // clear observable array
                for (var index = 0; index < givenSize; index++) {
                    var product = productFactory_1.default();
                    this.cells.push(new Cell(product));
                }
                var test = this.cells();
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map