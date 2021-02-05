// [...Array(10).keys()]
// 0 ~ 9の配列を作り出す

// map, fillter, reduce

// 1-10までランダムに表示！
// const num = [...Array(10).keys()].map((i) => i++);
// while (num.length > 0) {
//   const randIndex = Math.floor(Math.random() * num.length);
//   console.log(num[randIndex]);
//   num.slice(randIndex, 1);
// }

// // 1-10までランダムに3つ表示させる
// while (num.length > 7) {
//   const randIndex = Math.floor(Math.random() * num.length);
//   console.log(num[randIndex]);
//   num.slice(randIndex, 1);
// }

// FizzBuzz短い選手権
;[...Array(30).keys()]
  .map((i) => i + 1)
  .map((i) => {
    const fizzbuzz = `${i % 3 === 0 ? 'fizz' : ''}${i % 5 === 0 ? 'buzz' : ''}`
    return fizzbuzz === '' ? i : fizzbuzz
  })
  .forEach((num) => console.log(num))
