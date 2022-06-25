// function chgname(x? :string) :void{
//     if(x) {
//         console.log("dkssudgktpdy " + x);
//     } else {
//         console.log("왜입력안함");
//     }
// }
// function cntnum(x :number | string) :number{
//     return x.toString().length;
// }
// function mryChc(money :number, house :boolean, apl :string) :string | void {
//     let score :number = 0;
//     score += money;
//     if (house === true) {
//         score += 500;
//     }
//     if (apl === '상') {
//         score += 100;
//     }
//     if (score >= 600) {
//         return '결혼가능';
//     }
// }
// console.log(mryChc(100, true, '상'));
// type이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야함
// Type Narrowing --> if문 등으로 타입을 하나로 정해주는 것
// function 내함수(x :number | string) {   
//     // if(typeof x === 'string') {
//     //     return x + "1"
//     // } else {
//     //     return x + 1
//     // }
//     let array :number[] = [];
//     if(typeof x === "number") {
//         array[0] = x;
//     }
//     array[1] = x as number;   // assertion(타입 덮어쓰기)
// }
// function chgCharnum(x :number | string) {
//     if(typeof x === "string") {
//         return Number(x);
//     }
//     console.log(x);
// }
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
function endSbj(sbj) {
    if (typeof sbj.subject === "string") {
        return sbj.subject;
    }
    else if (Array.isArray(sbj.subject)) { //Array.isArray() --> 문자열인지 확인
        return sbj.subject[sbj.subject.length - 1];
    }
    else {
        return 'ㅇ';
    }
}
console.log(endSbj({ subject: ['english', 'art'] }));
console.log(endSbj({ subject: 'english' }));
