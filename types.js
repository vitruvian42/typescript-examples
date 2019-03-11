var var_boolean = false;
var var_string = 'Test';
var var_number = 123;
var var_array = [1, 2, 3, 4];
var var_tuple = [1, '2', 3];
var var_any = 'asdsad';
var var_null = null;
var var_undefined = undefined;
function createOutput(var_any) {
    var_any.last_name = "asd";
    return var_any;
}
var output = createOutput({
    first_name: "Nikhil",
    last_name: "jain"
});
console.log(output);
