
class TripMember {

    constructor() {
        this.__tickets__ = [];
    }

    get name() { return this.__name__ }

    set name(value) { this.__name__ = value }

    get tickets() { return this.__tickets__ }

    setTickets(value, index) { this.__tickets__[index] = value }

    get commonExpenses() { return this.__commonExpenses__ }

    set commonExpenses(value) { this.__commonExpenses__ = value }

    removeTicket() { this.__tickets__.pop() }

    get totalExpense() {
        let sum = this.__tickets__.reduce((acc, val) => acc + Number(val), 0);
        return sum + this.__commonExpenses__;
    }

    toString() {
        return `${this.__name__} spent a total of ${this.totalExpense.toFixed(2)} dollars on the trip`;
    }
}

const TripMembersHandler = () => {

    let person_object = {}

    const new_member = (id) => {
        person_object[id] = new TripMember()
    }

    const change_tickets = (id, value, index) => {
        person_object[id].setTickets(value, index)
    }

    const change_name = (id, value) => {
        person_object[id].name = value
    }

    const change_common_expenses = (id, value) => {
        person_object[id].commonExpenses = value;
    }

    const remove_ticket = (id) => {
        person_object[id].removeTicket()
    }

    const total_members = () =>{
        return Object.values(person_object).length
    }

    return [new_member, change_name, remove_ticket, change_tickets, change_common_expenses, total_members]
}

const [new_member, change_name, remove_ticket, change_tickets, change_common_expenses, total_members] = TripMembersHandler()


class DOMhandler {
    add_person = () => {
        const id = document.querySelectorAll(".person").length + 1
        const person_component = `
        <fieldset class="person">
            <legend>Person ${id}</legend>
            <table id="p-${id}" border="1">
                <tr id="p-${id}-tr-name">
                    <td>Name : </td>
                    <td>
                        <input type="text" oninput="change_name('p-${id}', this.value)" id="p-${id}-name" required>
                    </td>
                </tr>
                <tr id="p-${id}-tr-tickets"> 
                    <td colspan="2">Tickets</td> 
                </tr> 
                <tr id="p-${id}-add-ticket">
                    <td><button onclick="add_ticket('p-${id}')">Add Ticket</button></td>
                    <td><button onclick="remove_last_ticket('p-${id}')">Remove last</button></td>
                </tr>
                <tr id="p-${id}-tr-common-expenses">
                    <td colspan="2"><button onclick="add_common_expenses('p-${id}')">Add common expenses</button></td>
                </tr>
            </table>
        </fieldset>
        <div id="add_person"></div>
            `
        new_member(`p-${id}`)
        document.getElementById("add_person").outerHTML = person_component
    }

    add_ticket = (id) => {
        let tickets = document.querySelectorAll(`.${id}-tr-tickets`);
        const s1 = `<tr class="${id}-tr-tickets"><td> Ticket ${tickets.length + 1} : </td><td><input type="text"  oninput="change_tickets('${id}',this.value, ${tickets.length})"  class="${id}-t"></td> </tr>`
        console.log(tickets[tickets.length - 1]);
        let temp_data = document.getElementById(`${id}-add-ticket`).outerHTML
        document.getElementById(`${id}-add-ticket`).outerHTML = s1 + temp_data
    }

    remove_last_ticket = (id) => {
        let elements = document.querySelectorAll(`.${id}-tr-tickets`)
        if (elements.length == 0) return
        elements[elements.length - 1].remove()
        remove_ticket(id)
    }

    add_common_expenses = (id) => {
        console.log(id + "-tr-common-expenses");
        console.log(document.getElementById(id + "-tr-common-expenses"));
        const s1 = ` <td>Common expenses : </td> <td><input oninput = "change_common_expenses('${id}', this.value)"/></td> `
        document.getElementById(id + "-tr-common-expenses").innerHTML = s1
    }
}

const DOM = new DOMhandler()

// const calculate = () => {

//     let total_expenses = 0
//     let individual_expenses = {}

//     for (let individual of participants) {

//         if (individual.commonExpenses) {
//             total_expenses += parseFloat(individual.commonExpenses)
//             individual_expenses[individual.name] = parseFloat(individual.commonExpenses)
//         }
//         if (individual.tickets)
//             for (let cost of individual.tickets) {
//                 total_expenses += parseFloat(cost)
//                 individual_expenses[individual.name] += parseFloat(cost)
//             }
//     }

//     const average_expenses = parseFloat(total_expenses / participants.length);

//     let abcd = {}
//     for (let individual of participants) {
//         abcd[individual.name] = average_expenses - individual_expenses[individual.name]
//     }

//     return [total_expenses, individual_expenses, abcd]
// }

// let [total_expenses, individual_expenses, abcd] = calculate()

// for (let individual in abcd) {
//     if (abcd[individual] > 0)
//         console.log(`You have to take ${individual}'s ${Math.abs(abcd[individual])}$`);
//     else if (abcd[individual] < 0)
//         console.log(`You have to pay ${individual} ${Math.abs(abcd[individual])}$`);
// 