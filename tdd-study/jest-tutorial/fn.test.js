const fn = require("./fn");

// test("2 더하기 3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 더하기 3은 5가 아니야", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// // 비동기 - CallBack
// // jest는 일반적으로 함수가 끝까지 실행되면 그대로 종료
// // done이라는 함수를 받으면 jest가 done함수가 실행되기 전까지 종료되지 않음
// // 만약 done을 전달받았는데 호출하지 않으면 테스트 실패
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     expect(name).toBe("Mike");
//     done();
//   }
//   expect(fn.getName(callback)).not.toBe(5);
// });

// 비동기 - Promise
// Promise를 return해주면 callback처럼 따로 done을 넘겨주지 않아도 resolve될 때까지 기다려준다
// Promise를 넘겨주면 반드시 return을 해줘야한다 그렇지 않으면 jest가 종료된다
// test("3초 후에 받아온 나이는 30", () => {
//   //   return fn.getAge().then((age) => {
//   //     expect(age).toBe(30);
//   //   });
//   //   return expect(fn.getAge()).resolves.toBe(30);
//   return expect(fn.getAge()).rejects.toBe("error");
// });

// // 비동기 - async / await
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn.getAge();

//   expect(age).toBe(30);
// });

// 각 테스트 직전에 실행된다.
// beforeEach(() => {
//   num = 0;
// });

// 각 테스트 직후에 실행된다.
// afterEach(() => {
//   num = 10;
// });

// 이런 경우 num을 초기화 해줘야 한다
// 이럴 경우 beforeEach를 사용한다
// test("0 더하기 1 은 1 이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2 는 2 이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// 만약에 전후 작업이 시간이 걸리는 작업이라면?
// 테스트 전에 디비에 접속해서 유저 정보를 가져오고, 테스트 이후에는 디비 커넥션을 끊는 방법
// 이럴 경우 test가 많아지면 그만큼 시간이 많이 걸리기 때문에 각 테스트마다 디비를 연결하고 끊는 것이
// 아니라 처음과 최후에만 실행하면 된다 이럴 때 사용하는 것이 beforeAll / afterAll

// 테스트 전체를 실행하기 전 발동
// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });

// // 테스트 전체를 실행한 후 발동
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// test("성별은 남자", () => {
//   expect(user.gender).toBe("male");
// });

// // 만약에 다양한 db를 접속해야 한다면?
// // describe를 사용하여 비슷한 기능끼리 묶는다.
// describe("Car 관련 작업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });

//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

// 테스트가 실패했을 때 실패한 요인이 해당 함수 자체인지 아니면 외부의 영향 떄문인지 테스트하기 위해
// only를 사용하여 해당 함수만 한 번 더 실행할 수 있다

// let num = 0;

// test("0 더하기 1 은 1", () => {
//   expect(fn.add(num, 1)).toBe(1);
// });

// test("0 더하기 2 은 2", () => {
//   expect(fn.add(num, 2)).toBe(2);
// });

// test("0 더하기 3 은 3", () => {
//   expect(fn.add(num, 3)).toBe(3);
//   num = 10;
// });

// test("0 더하기 4 은 4", () => {
//   expect(fn.add(num, 4)).toBe(4);
// });

// mock function

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// // calls로 알 수 있는 것은 함수가 총 몇 번 호출 되었는 가 and 호출될 때 인수는 무엇을 받았는 가
// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// const mockFn = jest.fn();

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("전달된 값은 11, 21, 31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// // results에는 return된 값이 배열로 들어있다
// test("10에서 1 증가한 값이 반환된다", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// test("20에서 1 증가한 값이 반환된다", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });

// test("30에서 1 증가한 값이 반환된다", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// // results에는 return된 값이 배열로 들어있다
// test("10에서 1 증가한 값이 반환된다", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// 외부 함수를 사용해야할 때 (유저를 만드는)
// 이런 경우 테스트를 할 때마다 유저가 생성된다
test("유저를 만든다 (실제)", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

jest.mock("./fn");

fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다 (모킹)", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

// 유용한 메서드
test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 세 번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40을 받았는가?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
