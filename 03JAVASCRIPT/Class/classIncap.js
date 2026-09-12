
// Encapsulation means hiding the internal implementation of a class and exposing only what is necessary to the outside.
class BankAccount {
    #balance = 0;  // private JavaScript mein # ka matlab private.
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}
let account = new BankAccount();
account.deposit(1000);
// account.#balance; // ❌ Error
console.log(account.getBalance()); // => 1000