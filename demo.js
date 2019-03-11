var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var market;
(function (market) {
    var StockInfo = /** @class */ (function () {
        function StockInfo(name, desc) {
            this.name = name;
            this.desc = desc;
        }
        StockInfo.prototype.createOutput = function () {
            return {
                name: this.name,
                desc: this.desc
            };
        };
        return StockInfo;
    }());
    market.StockInfo = StockInfo;
    var StockPrice = /** @class */ (function (_super) {
        __extends(StockPrice, _super);
        function StockPrice(name) {
            return _super.call(this, name) || this;
        }
        StockPrice.prototype.setPrice = function (price) {
            this.price = price;
        };
        StockPrice.prototype.getPrice = function () {
            return this.price;
        };
        StockPrice.prototype.returnName = function () {
            return this.name;
        };
        return StockPrice;
    }(StockInfo));
    market.StockPrice = StockPrice;
})(market || (market = {}));
//let axis = new StockInfo('AXIS','Axis Stock description')
var axisPrice = new market.StockPrice('AXIS');
axisPrice.setPrice(1000);
//console.log(axis.createOutput())
//console.log(axisPrice.returnName())
//import { StockInfo } from './classes'
/// <reference path="classes.ts" />
var sbi = new market.StockInfo('SBI', 'SBI Stock Info');
console.log(sbi.createOutput());
