/* --------------------------------- Loader --------------------------------- */
window.addEventListener("load", () => {
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("hide-loader");

  spinner.addEventListener("transitioned", () => {
    document.body.removeChild("spinner");
  });
});
/* --------------------------------- Loader --------------------------------- */
/* --------------------------------- Nav Bar --------------------------------- */
var navTrigger = document.querySelector(".navTrigger");
var navBar = document.querySelector(".nav-bar");
navTrigger.onclick = function () {
  navTrigger.classList.toggle("active");
  navBar.classList.toggle("show");
};
document.onclick = function (e) {
  if (!navTrigger.contains(e.target) && !navBar.contains(e.target)) {
    navTrigger.classList.remove("active");
    navBar.classList.remove("show");
  }
};
/* --------------------------------- Nav Bar --------------------------------- */
/* ------------------------------ Pricing page ------------------------------ */
var tabs = document.querySelectorAll(".tabs li");
var contents = document.querySelectorAll(".price-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // to remove uk-active class from previous tab
    tabs.forEach((tab) => tab.classList.remove("uk-active"));
    
    // to show content according to tab selected
    tab.classList.add("uk-active");

    // to hide previous tab content
    contents.forEach((c) => c.classList.remove("uk-active"));
    contents[index].classList.add("uk-active");
  });
});
/* ------------------------------ Pricing page ------------------------------ */
/* ------------------------------- Send Email ------------------------------- */
var yourName = document.getElementById("yourName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var massageAccept = document.querySelector(".massage-accept");

function sendEmail() {
  Email.send({
    SecureToken: "99668455-af99-44e8-962f-ed146b732187",
    To: "abdallaahnoor@gmail.com",
    From: "abdallahabdelaziznoor@gmail.com",
    Subject: "Contact Message",
    Body:
      "Name: " +
      yourName.value +
      "<br> Email: " +
      email.value +
      "<br> Phone Number: " +
      phone.value +
      "<br> Message: " +
      message.value,
  }).then((message) => massageAccept.classList.add("show"));
}
/* ------------------------------- Send Email ------------------------------- */
/* -------------------------------- Swiper JS ------------------------------- */
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* -------------------------------- Swiper JS ------------------------------- */
/* ---------------------------------- Accordion ---------------------------------- */
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
var acc = document.getElementsByClassName("accordion");
var i;

// Add onclick listener to every accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    // For toggling purposes detect if the clicked section is already "active"
    var isActive = this.classList.contains("active");

    // Close all accordions
    var allAccordions = document.getElementsByClassName("accordion");
    for (j = 0; j < allAccordions.length; j++) {
      // Remove active class from section header
      allAccordions[j].classList.remove("active");

      // Remove the max-height class from the panel to close it
      var panel = allAccordions[j].nextElementSibling;
      var maxHeightValue = getStyle(panel, "maxHeight");

      if (maxHeightValue !== "0px") {
        panel.style.maxHeight = null;
      }
    }
    // Toggle the clicked section using a ternary operator
    isActive ? this.classList.remove("active") : this.classList.add("active");

    // Toggle the panel element
    var panel = this.nextElementSibling;
    var maxHeightValue = getStyle(panel, "maxHeight");

    if (maxHeightValue !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

function getStyle(el, styleProp) {
  var value,
    defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) {
    // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        var oldLeft = el.style.left,
          oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}
/* ---------------------------------- Accordion ---------------------------------- */
/* ---------------------------------- go up --------------------------------- */
var goUp = document.querySelector(".go-up");
window.onscroll = function () {
  if (this.scrollY >= 75) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }
};
goUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/* ---------------------------------- go up --------------------------------- */
/* -------------------------------- WhatsApp -------------------------------- */
var wtsappIcon = document.querySelector(".wtsapp-icon");
var whatsappWidget = document.querySelector(".whatsapp-Widget");
var close = document.querySelector(".close");
wtsappIcon.onclick = function () {
  whatsappWidget.classList.toggle("show");
};
close.onclick = function () {
  whatsappWidget.classList.remove("show");
};
// document.onclick = function (e) {
//   if (!whatsappWidget.contains(e.target) && !wtsappIcon.contains(e.target)) {
//     whatsappWidget.classList.remove("show");
//   }
// };
/* -------------------------------- WhatsApp -------------------------------- */
