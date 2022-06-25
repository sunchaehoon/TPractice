// type Animal = string | number | undefined;
// let 동물 :Animal = "kim";   // type alias (타입 변수)
// type Person = {name : string, age : number};
// let 사람 :Person = {name : "kim", age : 20};
// type Friend = {
//     readonly name? : string;     // readonly --> object 자료 수정 막을 수 있음(에러)
// }   // ? -> 옵션(name?은 string | undefined와 같은 뜻)
// const 친구 :Friend = {
//     name : '엠버'
// }
// // 친구.name = '유라'; //에러
// type Name = string;
// type Age = number;
// type Person = Name | Age;   //type변수 union type로 합치기 가능
// type PositionX = {x : number};
// type PositionY = {y : number};
// // 같은 이름의 type 변수는 재정의 불가능
// type NewType = PositionX & PositionY;   // & 연산자로 object 타입 extend
// type New2Type = PositionX & PositionX;
// let position :NewType = {x : 10, y : 20};
// type Aobject = {
//     color? :string,
//     size :number,
//     readonly position :number[]
// }
// type Signup = {
//     name: string,
//     phone: number,
//     email: string
// }
// let 회원 = {
//     name: "김철수",
//     phone: 123,
//     email: 'abc@naver.com'
// }
// type Adult = {adult: boolean};
// type NewSignup = Signup & Adult;
// let 이름: 123;  // Literal types(이름 변수엔 무조건 123만 들어올 들어올 수 있음)
// 변수에 뭐가 들어갈지 더 엄격하게 관리 가능, 자동완성 편함
// function Rsp(me: 'rock' | 'scissor' | 'paper') : ('rock' | 'scissor' | 'paper')[] {
//     return ["rock", "scissor"];
// }
// let 자료 = {
//     name: 'kim'
// } as const      // Object 자료를 완전히 잠가놓고 싶으면 as const 쓰기
// type 회원정보 = {
//     plusOne : (x: number) => number,
//     changeName: () => void
// }
// type 함수타입1 = (a: string) => string;
// type 함수타입2 = (a: string) => number;
// function 그냥함수(x: string, func1: 함수타입1, func2: 함수타입2) {
//     let result1 = func1(x);
//     let result2 = func2(result1);
//     console.log(result2);
// }
let 제목 = document.querySelector('#title'); //union type(null 혹은 element)
// if(제목 != null) {
//     제목.innerHTML = 'nice to m';
// }
// if(제목 instanceof Element) {
//     제목.innerHTML = 'nice to m';
// }
// let 버튼 = document.getElementById("button");
// 버튼?.addEventListener("click", function() {
// })
// let 이미지 = document.querySelector("#image");
// if(이미지 instanceof HTMLImageElement) {
//     이미지.src = "new.jpg";
// }
let 링크변경 = document.querySelectorAll(".naver");
링크변경.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
