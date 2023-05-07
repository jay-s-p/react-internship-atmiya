
class TripMembersHandler {
    #personMap = new Map();
    #TRIP_MEMBER_DATA_KEY = "trip_members_data"

    constructor() {
        this.loadData()
    }

    newMember(id) {
        this.#personMap.set(id, new TripMember());
        this.storeData()
    }

    changeName(id, name) {
        this.#personMap.get(id).name = name;
        this.storeData()
    }

    changeTickets(id, index, value) {
        this.#personMap.get(id).setTicket(index, value);
        this.storeData()
    }

    changeCommonExpenses(id, value) {
        this.#personMap.get(id).commonExpenses = value;
        this.storeData()
    }

    removeTicket(id) {
        this.#personMap.get(id).removeTicket();
        this.storeData()
    }

    getTotalMembers() {
        return this.#personMap.size;
    }

    getMembers() {
        return Array.from(this.#personMap.values());
    }


    storeData() {
        const data = {};
        this.#personMap.forEach((value, key) => {
            data[key] = value.toJSON();
        });
        localStorage.setItem(this.#TRIP_MEMBER_DATA_KEY, JSON.stringify(data));
    }

    loadData() {
        const data = localStorage.getItem(this.#TRIP_MEMBER_DATA_KEY);
        if (data) {
            const parsedData = JSON.parse(data);
            Object.keys(parsedData).forEach(key => {
                this.#personMap.set(key, new TripMember(parsedData[key]));
                DOM.setFromData(key, parsedData[key].name, parsedData[key].tickets, parsedData[key].commonExpenses)
            });
        }
    }

    totalExpenses() {
        let totalExpenses = 0;
        let individual_expenses = {}
        for (const i of this.#personMap.values()) {
            let x = parseFloat(i.totalExpense)
            totalExpenses += x
            individual_expenses[i.name] = x
        }
        let x = 1
        if (this.#personMap.size !== 0)
            x = this.#personMap.size
        const average_expenses = Math.ceil(parseFloat(totalExpenses / x));

        let abcd = {}
        for (let individual of this.#personMap.values()) {
            abcd[individual.name] = average_expenses - individual_expenses[individual.name]
        }

        let data = ""
        for (let individual in abcd) {
            if (abcd[individual] > 0)
                data += (`You have to take ${individual}'s ${Math.abs((abcd[individual]))}$<br/>`);
            else if (abcd[individual] < 0)
                data += (`You have to pay ${individual} ${Math.abs((abcd[individual]))}$<br/>`);
        }

        document.getElementById("calculation_result").innerHTML = `
        Total Expenses : ${totalExpenses}rs<br/>
        Average Expenses : ${average_expenses}rs<br/>
        ${data}
        `

    }

    calculate() {
        this.totalExpenses()
    }

    reset() {
        this.#personMap = new Map();
        this.storeData()
    }
}

const tripMembersHandler = new TripMembersHandler();