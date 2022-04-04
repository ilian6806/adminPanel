
const paymentsData = require('./payments');
const paymentsMonthData = require('./payments-month');

module.exports = () => {

    [paymentsData, paymentsMonthData].forEach((list) => {
        for (var i = 0; i < list.length; i++) {
            list[i].id = i + 1;
        }
    });

    return {
        payments: paymentsData,
        paymentsMonthly: paymentsMonthData
    };
};