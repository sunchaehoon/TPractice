let 이름 :string = 'sun';
let 집:{name? : string} = {name: '수완'}

function 함수(x: number) :number /*리턴type을 number로 지정*/ {
    return x * 2;
}

type Member = {
    name: string
}
let join :Member = {name: '모아'}

let project : {
    member: string[],
    days : number,
    started : boolean,
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

let 회원 :number | string = 123;    // Union Type(타입 2개이상 합친 새로운 타입만들기)

let 회원들 :(number | string) [] = [1, '2', 3];

let 이름2 :unknown;     //(any랑 비슷함)모든 자료형 허용
// 변수가 숫자타입이어야 오류 없이 숫자 계산을 해줌

let 학교 : {
    score :(number | boolean)[],
    teacher :string,
    friend :string | string[],
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


function fcn(x :number) :number {   //리턴값의 타입을 지정    
    return x*2;
}

function 함수2(x? :number) {

}   //파라미터가 옵션일 경우에 파라미터변수에 '?' 붙임. 타입 지정 안하면 undefined와 같음