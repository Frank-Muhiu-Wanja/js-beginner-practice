function calculate() {
  const totalAmount = document.getElementById("total-amount");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  if (principal < 0 || isNaN(principal)) {
    principal = 0;
    alert("Enter a valid principal");
    principalInput.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
    rate = 0;
    alert("Enter a valid rate");
    rateInput.value = 0;
  }
  if (years < 0 || isNaN(years)) {
    years = 0;
    alert("Years must be valid");
    yearsInput.value = 0;
  }

  const result = principal * Math.pow(1 + rate / 1, 1 * years);
  totalAmount.textContent = result.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
