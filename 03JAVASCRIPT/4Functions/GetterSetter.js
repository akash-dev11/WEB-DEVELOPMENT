
// Getter kya hota hai?Getter ka use property ko read karte time automatically function chalane ke liye hota hai.
let user = {
    name: "Akash",
    surname: "Kumar",

    get fullName() {
        return this.name + " " + this.surname;
    }
};
console.log(user.fullName); // => Akash Kumar

// Setter kya hota hai?Setter tab automatically chalta hai jab property ko value assign karte ho.
user = {
    name: "Akash",
    surname: "Kumar",
    get fullName() {
        return this.name + " " + this.surname;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
user.fullName = "Rahul Sharma";
console.log(user.name);     // => Rahul
console.log(user.surname);  // => Sharma
console.log(user.fullName); // => Rahul Sharma

user = {
    _name: "",
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name too short");
            return;
        }

        this._name = value;
    }
};
user.name = "Akash";
console.log(user.name);
// => Akash