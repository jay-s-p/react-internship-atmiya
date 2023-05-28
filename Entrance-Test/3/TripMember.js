
class TripMember {
    #name;
    #tickets = [];
    #commonExpenses = 0;


    constructor(obj = null) {
        if (obj) {
            this.name = obj.name
            this.tickets = obj.tickets
            this.commonExpenses = obj.commonExpenses
        }
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get tickets() {
        return this.#tickets;
    }

    set tickets(value) {
        this.#tickets = value;
    }

    setTicket(index, value) {
        this.#tickets[index] = value;
    }

    removeTicket() {
        this.#tickets.pop();
    }

    get commonExpenses() {
        return this.#commonExpenses;
    }

    set commonExpenses(value) {
        this.#commonExpenses = value;
    }

    get totalExpense() {
        let sum = this.#tickets.reduce((acc, val) => acc + Number(val), 0);
        return sum + Number(this.#commonExpenses);
    }

    toString() {
        return `${this.#name} spent a total of ${this.totalExpense.toFixed(2)} dollars on the trip`;
    }

    toJSON() {
        return {
            name: this.#name,
            tickets: this.#tickets,
            commonExpenses: this.#commonExpenses
        }

    }
}
