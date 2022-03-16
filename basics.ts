//Primitives: number, string, boolean, boolean, null, undifined
//More complex types: arrays, objects
//Function types, parameters

//! 처음을 대문자로 쓰게 되면 자바스크립트는 다르게 인식하기 때문에 무조건 소문자로 넣는다!!!!!!!!!!
let age: number = 24;

age = "12"; //오류, 위에 number type으로 typescript가 지정을 해놓았는데 string type을 넣었기 때문에 오류임

age = 12; // 오류나지 않음.

//null과 undifined는 다른 방식

//More complex types: arrays, objects

let hobbies: string[]; //배열. 취미들을 넣어놓은 것은 배열일 것이기 때문에 이런 식으로 쓴다. hobbies 안에 문자열 배열을 넣고 싶다는 //number[], boolean[] 다 가능.

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
}; //Person이라는 것에 타입을 저장. 이름은 무엇이든 와도 된다.

//let person: any; //모든 것이 가능하다. 일반적으로 잘 안 쓴다,

//let person: {}; //객체 타입을 사용하겠다고 정의하는 것
let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[]; //이런 타입의 객체가 들어있는 배열을 의미한다.

//유형추론

let course: string | number = "react the Complete Guide"; //둘 이상의 유형을 승인하고 싶을 때는 |를 사용!!

course = 12345;
//typescript는 위에 변수에 다시 할당하려고 하거나 할 때, 유형추론을 이용하여 우리가 굳이 course: string이라고 안 해도 알아서 구분해서 오류를 내준다.

// Functions & types

function add(a: number, b: number): number | string {
  // 이렇게 뒤에 :를 쓰면 반환 유형을 지정할 수 있다. 하지만 typescript는 유형추론이 가능하기 때문에 특별한 것이 아니면 굳이 써 줄 필요가 없다.
  return a + b;
}

function print(value: any) {
  // 단순히 콘솔로그로 보여주는것이기 때문에 값의 유형은 중요하지 않다.
  console.log(value); //이 함수의 문제점은 자바스크립트에 print라는 함수가 기본적을 존재하기 때문에 충돌이 일어날 수 있다. 그래서 이름은 printOrOut 등 이런 식으로 바꿔주어야 한다.
} // 이 함수는 리턴으로 반환하는 값이 없기 때문에 print의 유형은 특수한 void라는 유형이다. void는 null과 undifined를 의미. 즉 리턴할 게 없다!

// Generics

// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray; // 단순히 원본이 변하지 않는 새로운 배열을 만들어주는 배열(기존 것)
// }

function insertAtBeginning<T>(array: T[], value: T) {
  //typescript에만 있는 문법으로, T를 이런식으로 넣으면 typescript는 array와 value의 유형이 일치해야한다는 것을 인식하고 더 자세하게 보게 된다. 그래서 원래는 updateAarray가 any로 인식을 하여 split을 오류처리를 안 했지만, Generics를 사용하여 이 두 가지가 숫자 타입이라는 것을 인식하여 제대로 인식을 한다.
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); //type을 string으로 잘 받아들인다.
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
updatedArray[0].split(""); // 오류가 나지 않는다. 이유는 위에 updatedArray에서 보면 typescript가 any로 유형을 추론하고 있기 때문이다. 하지만 insertAtBeginning에서 array 유형을 any가 아닌 number로 바꾸면 다른 유형에서 다시 쓸 수가 없기 때문에 지정이 불가능하다. 그러므로 이럴 경우에 updatedArray의 오류를 수정하기 위해서 쓰는 문법이 //!Generics다!
