let userName = {"name": "Azizbek"}
let userAge = {"age": "22"}
let userJob = {"name": "WEb developer"}
const ObjectGroup = Object.assign(userName, userAge, userJob)
console.log(ObjectGroup);

// Output: { name: 'WEb developer', age: '22' }