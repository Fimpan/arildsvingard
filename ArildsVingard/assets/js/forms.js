//countries

var select = document.getElementById("selectCountry");

var countries = new Array(
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Mongolia",
  "Morocco",
  "Monaco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "San Marino",
  " Sao Tome",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
);

//console.log(countries);
//console.log(select);

for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  //for every turn of the loop create an option tag
  //console.log(option);
  var txt = document.createTextNode(countries[i]);
  //for every turn of the loop create the inner text
  //console.log(txt);
  option.appendChild(txt);
  //for every turn of the loop put the words from txt inside the <option> tags
  //console.log(option);
  option.setAttribute("value", countries[i]); //for every turn of the loop set the value attribute to corresponding country name
  //console.log(option);
  select.insertBefore(option, select.lastChild);
  //console.log(select);
}

//phone

function getIp(callback) {
  fetch("ipinfo.io/140.82.183.34?token=66e2f39b20a2bd", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: "se",
      };
    })
    .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  initialCountry: "se",
});

const info = document.querySelector(".alert-info");

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "";
  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

//_________________________________

function formatPostalCode(input) {
  // Remove any non-digit characters
  var value = input.value.replace(/\D/g, "");

  // Add a space after the third digit
  if (value.length > 3) {
    value = value.slice(0, 3) + " " + value.slice(3);
  }

  // Update the input value
  input.value = value;
}

// card-form
document.getElementById("name").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
});
document
  .getElementById("expirationdate")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/(\d{2})/, "$1/")
      .slice(0, 5);
  });

document.getElementById("securitycode").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 3);
});
document.getElementById("cardnumber").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim()
    .slice(0, 19);
});

//Presentkort
document.getElementById("okButton").addEventListener("click", function (e) {
  console.log("OK button clicked");
  e.preventDefault();
  var warningElement = document.getElementById("warning");
  if (warningElement) {
    warningElement.style.display = "block";
  } else {
    console.log("Warning element not found");
  }
});
