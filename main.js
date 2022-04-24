/*
let str = `
010-1234-5678.
themash88@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
*/
/*
//const regexp = new RegExp('the', 'gi')
//g: 전체에서 찾는다 i: 대소문자 구분x

const regexp = /the/gi
console.log(str.match(regexp))
*/
/*
const regexp = /fox/gi
console.log(regexp.test(str)) // true
*/
/*
const regexp = /fox/gi
//console.log(regexp.test(str)) // false
//console.log(str.replace(regexp,'AAA'))
str = str.replace(regexp, 'AAA')
// 위에 const가 아닌 let으로 재할당 가능한 경우
console.log(str)
*/
//const regexp = /the/gi
//console.log(str.match(regexp))
//위 두개 줄을 한번에 표출
//console.log(str.match(/the/gi))

//console.log(str.match(/\.$/gim))
/*
let str = `
010-1234-5678.
themash88@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
동해물과_백두산이 마르고 닳도록
`
*/
/* 
console.log(
  str.match(/d$/gm)
)
console.log(
  str.match(/^T/gm)
)
console.log(
  str.match(/http/g)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/dog|fox/) // 둘중 먼저 찾아지는 것 먼저 반환
)
console.log(
  str.match(/fox|dog/g)
)
*/
/*
console.log(
  str.match(/https?/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)
*/
/*
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
*/
/*
console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}/g)
)
console.log(
  str.match(/\d{1,}/g)
)

const h = `  the hello  world  !


`
console.log(
  str.match(/\s/g)
)
console.log(
  h.replace(/\s/g,'')
)
*/

const str = `
010-1234-5678.
themash88@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddddd
http://localhost:1234/
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/.{1,}(?=@)/g) //@ 기준으로 .(모든글자) 1번째부터 반환 .{1,} 위치 중요
)
console.log(
  str.match(/(?<=@).{1,}/g) //@ 기준으로 .(모든글자) 1번째부터 반환 .{1,} 위치 중요
)



