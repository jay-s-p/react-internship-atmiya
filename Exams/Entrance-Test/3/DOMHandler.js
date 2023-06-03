
class DOMhandler {

    setFromData(p_id, name, tickets, commonExpenses) {
        const input_change_name = `tripMembersHandler.changeName('${p_id}', this.value)`
        const dom_add_ticket = `DOM.addTicket('${p_id}')`
        const dom_remove_ticket = `DOM.removeLastTicket('${p_id}')`
        const dom_add_common_expenses = `DOM.addCommonExpenses('${p_id}')`
        let ticket_data = ""
        if (tickets)
            tickets.map((ticket, i) => ticket_data += `<tr class="${p_id}-tr-tickets"><td> Ticket ${i + 1} : </td><td><input type="text" value="${ticket}" oninput="tripMembersHandler.changeTickets('${p_id}', '${i}', this.value)"  class="${p_id}-t"></td> </tr>`)
        const main_data = `<fieldset class="person" name="${p_id}"><legend>Person ${p_id.replace("p-", "")}
        <button onclick="tripMembersHandler.removePerson('${p_id}')"> Remove</button>
        </legend><table id="${p_id}" border="1">
            <tr id="${p_id}-tr-name">
                <td>Name : </td>
                <td>
                    <input type="text" oninput="${input_change_name}" id="${p_id}-name" ${name ? `value="${name}"` : ""} required autofocus>
                </td>
            </tr>
            <tr id="${p_id}-tr-tickets"> 
                <td colspan="2">Tickets</td> 
            </tr> 
            ${ticket_data}
            <tr id="${p_id}-add-ticket">
                <td><button onclick="${dom_add_ticket}">Add Ticket</button></td>
                <td><button onclick="${dom_remove_ticket}">Remove last</button></td>
            </tr>
            ${commonExpenses ?
                ` <td>Common expenses : </td> <td><input value="${commonExpenses}" oninput = "tripMembersHandler.changeCommonExpenses('${p_id}', this.value)"/></td> `
                :
                `<tr id="${p_id}-tr-common-expenses">
                    <td colspan="2"><button onclick="${dom_add_common_expenses}">Add common expenses</button></td>
                </tr>`
            }
        </table>
    </fieldset>
    <div id="add_person"></div>`
        document.getElementById("add_person").outerHTML = main_data
    }

    addPerson(name = null) {
        const id = document.querySelectorAll("fieldset.person")[document.querySelectorAll("fieldset.person").length - 1] ? parseInt(document.querySelectorAll("fieldset.person")[document.querySelectorAll("fieldset.person").length - 1].name.slice(2)) + 1 : 1
        const p_id = `p-${id}`
        const input_change_name = `tripMembersHandler.changeName('${p_id}', this.value)`
        const dom_add_ticket = `DOM.addTicket('${p_id}')`
        const dom_remove_ticket = `DOM.removeLastTicket('${p_id}')`
        const dom_add_common_expenses = `DOM.addCommonExpenses('${p_id}')`
        const HTML_Person = `
        <fieldset class="person" name="p-${id}">
            <legend>Person ${id} <button onclick="tripMembersHandler.removePerson('p-${id}')">Remove</button></legend>
            <table id="${p_id}" border="1">
                <tr id="${p_id}-tr-name">
                    <td>Name : </td>
                    <td>
                        <input type="text" oninput="${input_change_name}" id="${p_id}-name" ${name ? `value="${name}"` : ""} required autofocus>
                    </td>
                </tr>
                <tr id="${p_id}-tr-tickets"> 
                    <td colspan="2">Tickets</td> 
                </tr> 
                <tr id="${p_id}-add-ticket">
                    <td><button onclick="${dom_add_ticket}">Add Ticket</button></td>
                    <td><button onclick="${dom_remove_ticket}">Remove last</button></td>
                </tr>
                <tr id="${p_id}-tr-common-expenses">
                    <td colspan="2"><button onclick="${dom_add_common_expenses}">Add common expenses</button></td>
                </tr>
            </table>
        </fieldset>
        <div id="add_person"></div>
            `
        tripMembersHandler.newMember(`${p_id}`)
        document.getElementById("add_person").outerHTML = HTML_Person
    }

    addTicket(id) {
        let tickets = document.getElementsByClassName(`${id}-tr-tickets`);;;
        const input_change_ticket = `tripMembersHandler.changeTickets('${id}', ${tickets.length}, this.value)`
        const HTMLData = `<tr class="${id}-tr-tickets"><td> Ticket ${tickets.length + 1} : </td><td><input type="number"  oninput="${input_change_ticket}"  class="${id}-t" autofocus></td> </tr>`
        let OldData = document.getElementById(`${id}-add-ticket`).outerHTML
        document.getElementById(`${id}-add-ticket`).outerHTML = HTMLData + OldData
    }

    removeLastTicket(id) {
        let elements = document.querySelectorAll(`.${id}-tr-tickets`)
        if (elements.length == 0) return
        elements[elements.length - 1].remove()
        tripMembersHandler.removeTicket(id)
    }

    addCommonExpenses(id) {
        const change_common_expenses = `tripMembersHandler.changeCommonExpenses('${id}', this.value)`;
        const HTMLData = ` <td>Common expenses : </td> <td><input type="number" oninput = "${change_common_expenses}" autofocus/></td> `
        document.getElementById(id + "-tr-common-expenses").innerHTML = HTMLData
    }
}

const DOM = new DOMhandler()