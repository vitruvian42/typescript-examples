interface Stock {
    name : string;
    desc : string;
    readonly price? : number;
    createOutput?() : Stock;
}

class StockDetails implements Stock{
    name: string;    
    desc: string;
    constructor(name: string, desc:string){
        this.name = name
        this.desc= desc
    }
    price?: number | undefined;
    createOutput (){
        return {
            name : this.name,
            desc : this.desc
        }
    }

}




// class StockDetails implements Stock {
//     name: string;
//     desc: string;
//     constructor(name: string, desc: string) {
//         this.name = name;
//         this.desc = desc;
//     }
//     createOutput() {
//         return {
//             name: this.name,
//             desc: this.desc
//         };
//     }
// }

let icici = new StockDetails('ICICI','Icici Stock description')

console.log(icici.createOutput())
