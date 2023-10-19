"use strict";
// Interfaces
const department = {
    name: 'webDev',
    budget: 50000
};
/* const mainProject: Project = {
    ...department,
    projectBudget: 5000
}
console.log(mainProject) */
function transformDepartment(department, amount) {
    return {
        name: department.name,
        projectBudget: amount
    };
}
const mainProject = transformDepartment(department, 5000);
console.log(mainProject);
