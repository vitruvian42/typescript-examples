interface Observable {
    registerObserver(ObserverObj : Observer) : void;
    removeObserver (ObserverObj : Observer) : void;
    NotifyObservers() : void;
    price : any;
}

interface Observer {
    recieveNotification ( Message : any ) : void
}

class StockObservable implements Observable {
    observers : Observer[];
    price : any;
    constructor() {
        this.observers = []
    }

    registerObserver(ObserverObj: Observer) {
        this.observers.push(ObserverObj)
    }    
    removeObserver(ObserverObj: Observer) {
        for(let i=0;i<this.observers.length;i++){
            if(this.observers[i]===ObserverObj){
                this.observers.splice(i,1)
            }
        }
    }
    NotifyObservers() {
        for(let i=0;i<this.observers.length;i++){
            this.observers[i].recieveNotification("Price updated")
        }
    }
    setPrice (price : number) {
        this.price = price
        this.NotifyObservers()
    }
}

class StockObserver1 implements Observer {
    Obserable : Observable;
    constructor(ObservableObj: Observable){
        this.Obserable = ObservableObj
    }
    recieveNotification(Message: any): void {
        console.log(Message + " : " +this.Obserable.price)
    }
}

class StockObserver2 implements Observer {
    Obserable : Observable;
    constructor(ObservableObj: Observable){
        this.Obserable = ObservableObj
    }
    recieveNotification(Message: any): void {
        console.log(this.Obserable.price)
    }
}

class StockObserver3 implements Observer {
    Obserable : Observable;
    constructor(ObservableObj: Observable){
        this.Obserable = ObservableObj
    }
    recieveNotification(Message: any): void {
        console.log(Message)
    }
}


let Stock1 = new StockObservable()

let Observer1 = new StockObserver1(Stock1)
let Observer2 = new StockObserver2(Stock1)
let Observer3 = new StockObserver3(Stock1)


Stock1.registerObserver(Observer1)
Stock1.registerObserver(Observer2)
Stock1.registerObserver(Observer3)

Stock1.setPrice(100)


Stock1.removeObserver(Observer3)


Stock1.setPrice(300)