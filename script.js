const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const calculateBtn = document.querySelector("#calculate");
const totalDOM = document.querySelector("#total");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const billValue = bill.value;
  const tipPercentage = tip.value;
  console.log(billValue, typeof billValue);
  console.log(tipPercentage, typeof tipPercentage);

  const total = Number(billValue) + Number((billValue * tipPercentage) / 100);
  //   const total = billValue * (1 + tipPercentage / 100);
  console.log(total);
  totalDOM.innerHTML = `<strong>$${total.toFixed(2)}</strong>`;
});
