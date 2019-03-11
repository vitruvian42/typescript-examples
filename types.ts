let var_boolean = false
let var_string = 'Test'
let var_number = 123
let var_array = [1,2,3,4]
let var_tuple : [number,string,number] = [1,'2',3]
let var_any = 'asdsad'
let var_null = null
let var_undefined = undefined


interface Stock {
    name : string;
    desc : string;
    readonly price? : number;
    createOutput?() : Stock;
}


interface createOutput {
    (input_variable : Stock) : Object
}



enum var_enum {'Hi', 'Hello'}


let createOutput : createOutput
createOutput =  function(input_variable : Stock){
    //input_variable.price = 1000
    return input_variable
}

let output = createOutput({
    name : 'ICICI',
    desc  : 'Icici Stock description',
    //price : 2000
})

console.log(output)