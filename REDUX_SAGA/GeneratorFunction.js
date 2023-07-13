// In  function we can able to return multiple values to deal with that we have generators function that can return multiple values 

//==EXample==//
const Hello = () => {
    return "hellow1"
    return "hellow2"
    return "hello3"
}
//  Here it will only return first return and stop executing after that 
// console.log(Hello())

//==Generator Function ==//
function* Generatorfirst (){
    yield 'hi'
    yield 'hi'
    yield 'hi'
    yield 'hi'
    return 'hi'
    

}
const a=Generatorfirst()
console.log()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())