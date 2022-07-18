// function 함수(...a: number[]) {
//     console.log(a);
// }
// 함수(1,2,3,4,5);

let [변수1, 변수2] = ['이름', 100];

//let {student, age} = {student: true, age: 20};  // Destructuring
// console.log(student);   // true
// console.log(age);   // 20

// function 함수({student, age} : {student: boolean, age: number}) {
//     console.log(student, age);
// }

// 함수({student: true, age: 20});

// function maxValue(...nums: number[]) {
//     let result = 0;
//     nums.forEach((i) => {
//         if(result < i) {
//             result = i;
//         }
//     })
//     return result;
// }
// console.log(maxValue(4, 6, 7, 9));


type UserType = {
    user: string,
    comment: number[],
    admin: boolean
}

function 함수({user, comment, admin}: UserType) :void {
    console.log(user, comment, admin);
}
함수({user: "kim", comment: [3, 5, 4], admin: false});