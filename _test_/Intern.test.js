//dependencies
const Intern = require('../lib/intern');

//initialize testing

describe("Intern", () => {
    describe("Initialization", () => {
        //object should return an empty string
        it("should initiate an object", () => {
            const obj = new Intern();
            //We expect 'result' to equal object
            expect(typeof(obj)).toEqual("object");
        });
    });
     //create test for school object
    describe("School", () => {
        it("should create new School", () => {
          const obj = new Intern("eric", 101, "eric@mail.com", "OSU");
          expect(obj.school).toEqual("OSU");
        });
      });
          //create test for getSchool method
    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
          const obj = new Intern("eric", 101, "eric@mail.com", "OSU");
          expect(obj.getSchool()).toEqual("OSU");
        });
      });
      //create test for getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Intern";//must define role
          const obj = new Intern("eric", 101, "eric@mail.com", "OSU");
          expect(obj.getRole()).toEqual(role);
        });
      });
});