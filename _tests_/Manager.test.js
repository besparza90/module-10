const Manager = require('../lib/Manager')

test('create manager object', () => {
    const employee = new Manager('Brian','10','staff@email.com', '101');
    
    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('staff@email.com')
    expect(employee.officeNumber).toBe('101')
  });

test("get manager office number", () => {
    const employee = new Manager('Brian','10','staff@email.com', '101');

    expect(employee.getOfficeNumber()).toEqual(expect.stringContaining(employee.officeNumber.toString()));
  });


test("get manager role", () => {
    const employee = new Manager('Brian','10','staff@email.com','101');

    expect(employee.getRole()).toEqual(expect.stringContaining("Manager"));
  });