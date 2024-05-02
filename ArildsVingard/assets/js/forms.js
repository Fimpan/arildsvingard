//phone

function getIp(callback) {
  fetch("ipinfo.io/140.82.183.34?token=66e2f39b20a2bd", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: "sv",
      };
    })
    .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "";
  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

//_________________________________
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
