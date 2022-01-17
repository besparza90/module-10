const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const employee = new Engineer('Brian','10','staff@gmail.com','besparza90');
    
    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('staff@gmail.com')
    expect(employee.github).toBe('besparza90')
  });

test("get employee github", () => {
    const employee = new Engineer('Brian','10','staff@gmail.com', 'besparza90');

    expect(employee.getGitHub()).toEqual(expect.stringContaining(employee.github));
  });


test("get employee role", () => {
    const employee = new Engineer('Brian','10','staff@gmail.com','besparza90');

    expect(employee.getRole()).toEqual(expect.stringContaining("Engineer"));
  });