function validateForm() {
  const currentDate = new Date();
  let checkInDate = document.forms["reservation"]["cin"].value;
  let err = "";
  input = document.getElementById("checkIn");
  err = document.getElementById("checkInErr");
  if (checkInDate === "") {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Check In date is required!";
    return false;
  }
  err.textContent = "";
  input.style.borderColor = "";
  //Checkin date should not be less than today
  let inputDate = new Date(checkInDate);
  // Get the current date
  if (inputDate < currentDate) {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Check In date should not be past date";
    return false;
  }

  let checkOutDate = document.forms["reservation"]["cout"].value;
  input = document.getElementById("checkOut");
  err = document.getElementById("checkOutErr");
  if (checkOutDate === "") {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Check Out date is required!";
    return false;
  }
  inputDate = new Date(checkOutDate);
  // Get the current date
  if (inputDate < currentDate) {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Check out date should not be past date";
    return false;
  }

  err.textContent = "";
  input.style.borderColor = "";
  return true;
}
