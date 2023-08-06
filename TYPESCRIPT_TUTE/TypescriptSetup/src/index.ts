// class User {
//   email: string;
//  private password: string;
//   constructor(email: string, password: string) {
//     (this.email = email), (this.password = password);
//   }
//   print (){
//     console.log( this.password)
//   }
// }
// const u1= new User('yash@gmail.com','yash123');
// u1.print()

// class Student {
//   name: string = "";
//   age: number = 0;
//   constructor(name: string, number: number) {
//     (this.age = number), (this.name = name);
//   }

//   printInfo = (): void => {
//     console.log(this.age);
//     console.log(this.name);
//   };
// }

// class Teacher extends Student {
//   name: string;
//   constructor(name: string, age: number) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//   }
// }
// const s1 = new Student("yash", 22);
// const t1 = new Teacher('rohit',22);
// s1.printInfo();
// t1.printInfo()

// class User {
//   email: string;
//   private password: string = "";
//   constructor(email: string) {
//     this.email = email;
//     // this.password = password;
//   }
//   printinfo = (): void => {
//     console.log(this.email);
//     console.log(this.password);
//   };
// }
// class Admin extends User {
//   constructor(email: string) {
//     super(email);
//     this.email = email;
//   }
// }

// const u1 = new User("yash@gmail.com");
// const a1= new Admin("new email.")
// a1.printinfo()

// class School {
//   studentlist: string[];
//   constructor(studentlist: string[]) {
//     this.studentlist = studentlist;
//   }
//   printStudentList() {
//     console.log(this.studentlist);
//   }
// }
// class Collge extends School {
//   constructor(studentlist: string[]) {
//     super(studentlist);
//     this.studentlist = studentlist;
//   }
// }
// class Job extends School {}
// const S1 = new School(["yash", "rohit", "ruturaj"]);
// S1.printStudentList();
// const j1 = new Job(["yash", "rohit", "ruturaj"]);
// j1.printStudentList();
import { Add } from "../Modules/Addition";
const a = new Add();
console.log(a.sum(2, 3)) 
