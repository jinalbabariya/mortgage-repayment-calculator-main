
document
  .getElementById("mortgage-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("Amount").value);
    const rate = parseFloat(document.getElementById("Interest").value);
    const years = parseFloat(document.getElementById("Term").value);

    const principal = amount;
    const monthlyInterest = rate / 100 / 12;
    const totalPayments = years * 12;

    const x = Math.pow(1 + monthlyInterest, totalPayments);
    const monthlyPayment = (principal * monthlyInterest * x) / (x - 1);

    document.getElementById("monthlyPayment").textContent = isFinite(
      monthlyPayment
    )
      ? `Monthly Payment: $${monthlyPayment.toFixed(2)}`
      : `Invalid input`;
  });
