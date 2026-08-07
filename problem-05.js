const getEmployeeDept = (employee) => {

    const { job: { title, department } } = employee;

    return {
        title,
        department
    };
};


let employee = {
    name: "Nadia",
    job: {
        title: "PM",
        department: "Product"
    }
};


console.log(getEmployeeDept(employee));