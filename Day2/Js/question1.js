const transformEmployees = (employees) => {
  const result = {};

  for (let emp of employees) {
    if (!result[emp.dept]) {
      result[emp.dept] = {
        employees: [],
        totalSalary: 0,
        totalCount: 0
      };
    }

    result[emp.dept].employees.push(emp.name);
    result[emp.dept].totalSalary += emp.salary;
    result[emp.dept].totalCount++;
  }

  // Calculate average salary
  for (let dept in result) {
    const avg =
      result[dept].totalSalary / result[dept].totalCount;

    result[dept].avgSalary = Number(avg.toFixed(2));
    delete result[dept].totalSalary;
  }

  return result;
};
