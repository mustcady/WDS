//string
let m='muskan'
let str=`this is '${m}' string`
console.log(str);

let longStr='this is \
a very long\
string'
console.log(longStr.length)
console.log(m.length)

//searching
let s='this has some data here'
let key='has'
console.log(s.indexOf(key))

let k='this is a easy job'
let k1=' ab aab abbcd ba aab'
console.log(k1.lastIndexOf('ab',1))
console.log(k.indexOf('is',4))
