let inputName = document.querySelector(".inName");
let inputNumber = document.querySelector(".inNum");
let inputYears = document.querySelector(".inye");
let inputMonth = document.querySelector(".inmo");
let inputDays = document.querySelector(".inda");
let OutButNumber = document.querySelector(".cardNum");
let OutbutName = document.querySelector(".nameOutbut");
let OutbutDay = document.querySelector(".days");
let OutbutMon = document.querySelector(".mon");
let Outy = document.querySelector(".writename");

let ValidNumber = /^\d{4} \d{4} \d{4} \d{3}[A-Z]$/;

function clickSubmit() {
  let Name = inputName.value;
  let Numbering = inputNumber.value;
  let Day = parseInt(inputDays.value);
  let Month = parseInt(inputMonth.value);
  let Year = parseInt(inputYears.value);

  inputName.classList.remove("errRed");
  inputNumber.classList.remove("errRed");
  inputDays.classList.remove("errRed");
  inputMonth.classList.remove("errRed");
  inputYears.classList.remove("errRed");

  let valid = true;

  if (!ValidNumber.test(Numbering)) {
    inputNumber.classList.add("errRed");
    valid = false;
  }

  if (Day < 1 || Day > 31) {
    inputDays.classList.add("errRed");
    valid = false;
  }

  if (Month < 1 || Month > 12) {
    inputMonth.classList.add("errRed");
    valid = false;
  }

  if (isNaN(Year) || Year < 1000 || Year > 9999) {
    inputYears.classList.add("errRed");
    valid = false;
  }

  if (!valid) {
    return false;
  }

  localStorage.setItem("named", Name);
  localStorage.setItem("numd", Numbering);
  localStorage.setItem("dayd", Day);
  localStorage.setItem("moned", Month);
  localStorage.setItem("yed", Year);

  OutButNumber.innerHTML = localStorage.getItem("numd");
  OutbutName.innerHTML = localStorage.getItem("named");
  OutbutDay.innerHTML = localStorage.getItem("dayd");
  OutbutMon.innerHTML = localStorage.getItem("moned");
  Outy.innerHTML = localStorage.getItem("yed");

  return false;
}
