"use strict";
var StockDetails = /** @class */ (function () {
    function StockDetails(name, desc) {
        this.name = name;
        this.desc = desc;
    }
    StockDetails.prototype.createOutput = function () {
        return {
            name: this.name,
            desc: this.desc
        };
    };
    return StockDetails;
}());
var icici = new StockDetails('ICICI', 'Icici Stock description');
console.log(icici.createOutput());
