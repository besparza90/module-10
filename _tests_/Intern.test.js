const Intern = require('../lib/Intern')

test('create intern object', () => {
    const employee = new Intern('Brian','10','staff@email.com','UCB');
    
    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('staff@email.com')
    expect(employee.school).toBe('UCB')
  });

test("get intern school", () => {
    const employee = new Intern('Brian','10','staff@email.com', 'UCB');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school));
  });


test("get intern role", () => {
    const employee = new Intern('Brian','10','staff@email.com','UCB');

    expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
  });