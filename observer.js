"use strict";
var StockObservable = /** @class */ (function () {
    function StockObservable() {
        this.observers = [];
    }
    StockObservable.prototype.registerObserver = function (ObserverObj) {
        this.observers.push(ObserverObj);
    };
    StockObservable.prototype.removeObserver = function (ObserverObj) {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === ObserverObj) {
                this.observers.splice(i, 1);
            }
        }
    };
    StockObservable.prototype.NotifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].recieveNotification("Price updated");
        }
    };
    StockObservable.prototype.setPrice = function (price) {
        this.price = price;
        this.NotifyObservers();
    };
    return StockObservable;
}());
var StockObserver1 = /** @class */ (function () {
    function StockObserver1(ObservableObj) {
        this.Obserable = ObservableObj;
    }
    StockObserver1.prototype.recieveNotification = function (Message) {
        console.log(Message + " : " + this.Obserable.price);
    };
    return StockObserver1;
}());
var StockObserver2 = /** @class */ (function () {
    function StockObserver2(ObservableObj) {
        this.Obserable = ObservableObj;
    }
    StockObserver2.prototype.recieveNotification = function (Message) {
        console.log(this.Obserable.price);
    };
    return StockObserver2;
}());
var StockObserver3 = /** @class */ (function () {
    function StockObserver3(ObservableObj) {
        this.Obserable = ObservableObj;
    }
    StockObserver3.prototype.recieveNotification = function (Message) {
        console.log(Message);
    };
    return StockObserver3;
}());
var Stock1 = new StockObservable();
var Observer1 = new StockObserver1(Stock1);
var Observer2 = new StockObserver2(Stock1);
var Observer3 = new StockObserver3(Stock1);
Stock1.registerObserver(Observer1);
Stock1.registerObserver(Observer2);
Stock1.registerObserver(Observer3);
Stock1.setPrice(100);
Stock1.removeObserver(Observer3);
Stock1.setPrice(300);
