const Employee = require('../lib/employee');


//initalize testing 

describe("Employee", () => {
    describe("Initialization", () => {
      // object should return and empty string
      it("should initiate an object", () => {
        const obj = new Employee();
        // We expect 'result' to equal object 
        expect(typeof(obj)).toEqual("object");
      });
    });

    //create test for name object
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("Benny");
        expect(obj.name).toEqual("Benny");
      });
    });
    //create test for id object
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("Benny",12);
        expect(obj.id).toEqual(12);
      });
    });
    //create test for email object
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee("Benjamin",12, "benny.email@email");
        expect(obj.email).toEqual("benny.email@email");
      });
    });
    //create test for getName method
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("Benjamin");
        expect(obj.getName()).toEqual("Benjamin");
      });
    });
    //create test for getId method
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("Benjamin", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
    //create test for getEmail method
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("Benjamin", 12, "benny.email@email");
        expect(obj.getEmail()).toEqual("benny.email@email");
      });
    });
    //create test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";//must define role
        const obj = new Employee("Benjamin", 12, "benny.email@email");
        expect(obj.getRole()).toEqual(role);
      });
    });
});