/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  if (newWithdrawAmount < 0) {
    alert("you enter negative number! Please enter positive value");
    return false;
  } else if (isNaN(newWithdrawAmount)) {
    alert("Your input is not a number! Please enter number");
    return false;
  } else if (newWithdrawAmount > previousBalanceTotal) {
    alert("You have not suficient balance");
    return false;
  }
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
