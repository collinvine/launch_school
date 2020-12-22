function createPayment(services = {}) {
  let phonePayment = services.phone || 0;
  let internetPayment = services.internet || 0;
  let amountPayment = services.amount || 0;

  return {
    phone: phonePayment,
    internet: internetPayment,
    amount: amountPayment,

    total: function() {
      let value =  this.amount ? this.amount : this.phone + this.internet;
      return value;
    }
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000