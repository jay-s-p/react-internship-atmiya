
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

    reset(){
        this.#personMap = new Map();
        this.storeData()
    }
}

const tripMembersHandler = new TripMembersHandler();