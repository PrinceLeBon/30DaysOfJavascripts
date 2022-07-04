let quote = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."
console.log(quote)
let quote_theresa = "\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\""
console.log(quote_theresa)
console.log(typeof 10 == typeof '10')
console.log(typeof 10 == typeof parseInt('10'))
console.log("python".includes("on"))
console.log("jargon".includes("on"))
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes("jargon"))
console.log(Math.floor(Math.random() * 11)*10)
console.log((Math.floor(Math.random() * 11) * 5) + 50)
console.log((Math.floor(Math.random() * 11)) * 25.5)
console.log('JavaScript'.charAt(Math.floor(Math.random() * 11)* (('JavaScript'.length)/10)))
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
let following_sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(following_sentence.substr(following_sentence.indexOf('because because because'), 'because because because'.length))