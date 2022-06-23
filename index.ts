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