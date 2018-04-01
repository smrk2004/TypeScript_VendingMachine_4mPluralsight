/// <reference path="../ts/typings/knockout.d.ts" />
// /// <reference path="./coin.ts" />
// /// <reference path="./product.ts" />
// /// <reference path="./productFactory.ts" />

//import Coins = Money.Coins;
import * as Coins from "./coin"
import {Product,Initial} from "./product"   // explicit module import
//import ProductFactory from "./productFactory"
import getProductFactory from "./productFactory"

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}
class Cell {
    constructor (public product: Product) {}
    stock = ko.observable(3); // uses generics implicitly!
    sold = ko.observable<boolean>(false); // uses generics explicitly!
}
export class VendingMachine {

    private paid = ko.observable(0);// now an observable via ko not direct-init to 0
                                    // total change inserted
    private paidStr = ko.observable("0");

    selectedCell:any = ko.observable(new Cell(new Initial))
    cells:any = ko.observableArray([]); // observable array
    acceptedCoins: Array<Coins.Coin> = [new Coins.Quarter(), new Coins.Dime(), new Coins.Half(), new Coins.Dollar()];
    canPay = ko.pureComputed(() => this.paid()-this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {

        this.cells([]); // clear observable array

        for (let index = 0; index < givenSize; index++) {
            let product = getProductFactory();
            this.cells.push(new Cell(product));
        }
        var test=this.cells();
    }

    select = (cell:Cell):void => {
        cell.sold(false)
        this.selectedCell(cell)
    }

    // use arrow fn, to ensure 'this' reprs the object immediately outside the arrow fn, here referring to VendingMachine object
    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid(); // get val from observable
        let newTotal = oldTotal + coin.Value;
        
        let paidDollars = (newTotal>=100) ? Math.floor(newTotal/100): 0;
        let paidCentsPastDollar = (newTotal%100);
        let paidCentsPastDollarStr = (paidCentsPastDollar<10 ? "0" : "") + paidCentsPastDollar.toString();

        this.paidStr(paidDollars + '.' + paidCentsPastDollarStr);        
        this.paid(newTotal); // pass in new value to observable    // OLD CODE        //        //this.paid += coin.Value;        //var element:any = document.getElementById("total");        //    element.innerHTML = this.paid.toString();
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return
        }

        let currentPaid = this.paid();
        let newTotal = Math.round(100*(currentPaid - this.selectedCell().product.price))/100;
        
        let paidDollars = (newTotal>=100) ? Math.floor(newTotal/100): 0;
        let paidCentsPastDollar = (newTotal%100);
        let paidCentsPastDollarStr = (paidCentsPastDollar<10 ? "0" : "") + paidCentsPastDollar.toString();

        this.paidStr(paidDollars + '.' + paidCentsPastDollarStr);
        this.paid(newTotal);

        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock-1);
        this.selectedCell().sold(true);
    }
} 