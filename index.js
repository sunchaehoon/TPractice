// type Animal = string | number | undefined;
function 그냥함수(x, func1, func2) {
    let result1 = func1(x);
    let result2 = func2(result1);
    console.log(result2);
}
