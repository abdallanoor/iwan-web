/* ------------------------------- Send Email ------------------------------- */
const btn = document.getElementById("button");
var yourName = document.getElementById("from_name");
var email = document.getElementById("email_id");
var phone = document.getElementById("phone_id");
var message = document.getElementById("message");
var massageAccept = document.querySelector(".massage-accept");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerHTML = "SENDING...";

  const serviceID = "default_service";
  const templateID = "template_s25pjyr";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerHTML = "SEND";
      yourName.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
      massageAccept.classList.add("show");
    },
    () => {
      btn.innerHTML = "SEND";
    }
  );
});
/* ------------------------------- Send Email ------------------------------- */