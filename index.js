// Write your solution in this file!
// const employee =  {
//     name: "value1",
//     streetAddress: "value2"
// }

// function updateEmployeeWithKeyAndValue(obj, key, value){
//     const newEmployee = {...obj}
//      newEmployee[key] = value;
//     return newEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value;
//     return employee
// }

// function deleteFromEmployeeByKey(obj, key){
//     const newEmployee = {...obj}
//     delete newEmployee.name;
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee.name;
//     return employee
// }

 
const employee = {
    name: "yourName", 
    streetAddress: "address"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value 
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee }
    delete newEmployee[key]
    return newEmployee 
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}