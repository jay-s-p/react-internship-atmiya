


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