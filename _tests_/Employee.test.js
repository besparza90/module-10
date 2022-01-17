const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Brian','10','staff@gmail.com');
    
    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('staff@gmail.com')
});

test("get employee name", () => {
    const employee = new Employee('Brian','10','staff@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  });

  test("get employee id", () => {
    const employee = new Employee('Brian','10','staff@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
  });

  test("get employee email", () => {
    const employee = new Employee('Brian','10','staff@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
  });

  test("get employee role", () => {
    const employee = new Employee('Brian','10','staff@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });

  module.exports = Employee 