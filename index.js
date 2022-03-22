const employee = {
    name: "Bear",
    streetAddress: "12 Lincoln ave",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "11 Broadway";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = employee;
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "12 Broadway";
    return newEmployee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;

};

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;

};