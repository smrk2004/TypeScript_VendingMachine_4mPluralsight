// /// <reference path="./product.ts" />
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
define(["require", "exports", "./product"], function (require, exports, Products) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Products = __importStar(Products);
    //export default class ProductFactory {
    //static
    function GetProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new Products.CocaCola();
            case 1: return new Products.Fanta();
            case 2: return new Products.Sprite();
            case 3: return new Products.Peanuts();
            case 4: return new Products.Cashews();
            case 5: return new Products.Plain();
            case 6: return new Products.Cheddar();
            case 7: return new Products.Mints();
            case 8: return new Products.Gummies();
            case 9: return new Products.Hershey();
            case 10: return new Products.MilkyWay();
            default: return new Products.Initial();
        }
    }
    exports.default = GetProduct;
});
//}
//# sourceMappingURL=productFactory.js.map