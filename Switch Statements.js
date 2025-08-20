let paymentmode="UPI";
switch(paymentmode){
  case "Cash":
    console.log("payment Process via Cash");
    break;
  case "Paytem":
    console.log("payment process via Paytm");
    break;
  case "Credit card":
    console.log("payment Process  via credit card ");
    break;
  case "Debit card":
    console.log("paymrnt Process via Debit card");
    break;
  case "UPI":
    console.log("payment Process  via Net banking");
    break;
  default:
    console.log("select payment process");
}