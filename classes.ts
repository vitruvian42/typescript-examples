 namespace market {
    export class StockInfo{
        protected name: string;
        private desc?: string;
        constructor(name: string, desc?: string) {
            this.name = name;
            this.desc = desc;
        }
        createOutput() {
            return {
                name: this.name,
                desc: this.desc
            };
        }
    }

    export class StockPrice extends StockInfo{
        price: any;
        constructor (name: string){
            super(name)
        }
        setPrice (price: number){
            this.price = price
        }
        getPrice () {
            return this.price
        }
        returnName () {
            return this.name
        }
    }
}

//let axis = new StockInfo('AXIS','Axis Stock description')

let axisPrice = new market.StockPrice('AXIS')

axisPrice.setPrice(1000)

//console.log(axis.createOutput())


//console.log(axisPrice.returnName())