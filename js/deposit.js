document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  if (newDepositAmount < 0) {
    alert("you enter negative number! Please enter positive value");
    return false;
  } else if (isNaN(newDepositAmount)) {
    alert("Your input is not a number! Please enter number");
    return false;
  }
  const previousDepositTotal = getTextElementValueById("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
