let billAmount = 50;

function gratuity(amount) {
  let gretuityPercentage = amount * 0.2;

  return gretuityPercentage;
}

console.log(gratuity(billAmount));

function totalWithGrat(amount) {
  let grat = gratuity(amount);

  let totalBill = grat + billAmount;

  return `your total bill is ${totalBill}`;
}

console.log(totalWithGrat(billAmount));
