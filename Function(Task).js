// 1st
function calculateElectricityBill(units) {
    let bill = 0;

    if (units <= 50) {
        bill = units * 1;
    } else if (units <= 100) {
        bill = 50 * 1 + (units - 50) * 2;
    } else if (units <= 150) {
        bill = 50 * 1 + 50 * 2 + (units - 100) * 3;
    } else if (units <= 200) {
        bill = 50 * 1 + 50 * 2 + 50 * 3 + (units - 150) * 4;
    } else {
        bill = 50 * 1 + 50 * 2 + 50 * 3 + 50 * 4 + (units - 200) * 5;
        bill = bill * 0.9; 
    }

    return bill;
}
let unitsConsumed = 210;
let totalBill = calculateElectricityBill(unitsConsumed);
console.log( unitsConsumed + " units = ₹" + totalBill);

// 2nd
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 3rd
function calculateWeeklySalary(hoursWorked, hourlyRate) {
    if (hoursWorked <= 40) {
        return hoursWorked * hourlyRate;
    } else {
        let overtimeHours = hoursWorked - 40;
        return (40 * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    }
}
function applyBonus(salary, bonus) {
    return salary + (bonus || 0);
}
function displaySalary(employeeName, totalSalary) {
    console.log(employeeName + -totalSalary.toFixed(2));
}
let employees = [
    {name: "Nani", hoursWorked: 45, hourlyRate: 200, bonus: 500},
    {name: "Abhi", hoursWorked: 38, hourlyRate: 180, bonus: 0},
];

for (let emp of employees) {
    let weeklySalary = calculateWeeklySalary(emp.hoursWorked, emp.hourlyRate);
    let totalSalary = applyBonus(weeklySalary, emp.bonus);
    displaySalary(emp.name, totalSalary);
}


