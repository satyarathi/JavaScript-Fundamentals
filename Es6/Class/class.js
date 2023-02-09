class UserProfile {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);
    }
}
let obj = new UserProfile('Jitendra', 'Satyarathi');
obj.getName();