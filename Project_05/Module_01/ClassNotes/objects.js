//Objects in JS
// const objectLitereal = {}// this is an empty object
// const fullStackApplication = {
//     name: 'Jeff Hauck',
//     //^Key  ^Value
//     age: 25,
//     origin: 'Louisiana, USA',
//     funFact: '',
//}

//Object Accessors

 //1 Dot Notation 
    // const name = fullStackApplication.name // 'Jeff Hauck
 //2 Bracket Notation
    // const name = fullStackApplication['name'] // 'Jeff Hauck

 //Why use one over the other?
    //If you have a variable declared as your key that you want to access you can not use the dot notation to access the value at that key
    //if key is stored in variable you have to use brackets 
    // const myKey = 'name'
    // fullStackApplication[myKey] // 'Jeff Hauck'
    // fullStackApplication[myKey] vs fullStackApplication['myKey'] '' is targeting the string 'myKey' but not the variable

//Object Methods
    // const myObject = {
    //     myFunction () { // myFunction is a Method on myObject
    //         console.log('My function being called')
    //     }
    // }
    // myObject.myFunction() //  <-- must invoke when the key is a function // Calling the method on the object  

//Object are passed as references instead of Values
//   Copying primitive data types copies over Value
    // let a = 'sandwich' // a --> sandwich
    // let b = a // b --> Value of a 
    // b = 'runner' // b --> runner 
    // console.log(a, b)

  //Copying object in the same way as above copies references
//   let c = {
//       foo: 'bar'
//   }
//   let d = c
//   d.foo = 'baz'
   
//Object.assign 
 //ES5
  let c = {
      foo: 'bar'
  }
  let d = Object.assign({}, c)
  d.foo = 'baz'

  //ES6
    //Spread operators 
    let c = {
        foo: 'bar'
    }
    let d = {...c}