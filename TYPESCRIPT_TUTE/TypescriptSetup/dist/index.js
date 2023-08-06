"use strict";
class User {
    constructor(email, password) {
        (this.email = email), (this.password = password);
    }
    print() {
        console.log(this.password);
    }
}
const u1 = new User('yash@gmail.com', 'yash123');
u1.print();
