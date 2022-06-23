var 이름 = 'sun';
var 집 = { name: '수완' };
function 함수(x) {
    return x * 2;
}
var join = { name: '모아' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 회원 = 123; // Union Type(타입 2개이상 합친 새로운 타입만들기)
var 회원들 = [1, '2', 3];
var 이름2; //(any랑 비슷함)모든 자료형 허용
// 변수가 숫자타입이어야 오류 없이 숫자 계산을 해줌
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function fcn(x) {
    return x * 2;
}
function 함수2(x) {
} //파라미터가 옵션일 경우에 파라미터변수에 '?' 붙임. 타입 지정 안하면 undefined와 같음
