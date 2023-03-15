/* -------------------------------- nav menu - nav icon -------------------------------- */
var bar = document.querySelector(".bar");
var navBar = document.querySelector(".nav-bar");
bar.onclick = function () {
  navBar.classList.toggle("show");
};
function changeIcon(x) {
  x.classList.toggle("fa-xmark");
}
/* -------------------------------- nav menu - nav icon -------------------------------- */
/* ---------------------------------- FAQS ---------------------------------- */
// W3C's JS Code
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

// Cross-browser way to get the computed height of a certain element. Credit to @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
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
/* ---------------------------------- FAQS ---------------------------------- */
/* ------------------------------ Pricing page ------------------------------ */
var tabs = document.querySelectorAll(".tabs li");
var contents = document.querySelectorAll(".price-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // to remove uk-active class from previous tab
    tabs.forEach((tab) => tab.classList.remove("uk-active"));
    tab.classList.add("uk-active");
    // to show content according to tab selected

    // to hide previous tab content
    contents.forEach((c) => c.classList.remove("uk-active"));
    contents[index].classList.add("uk-active");
  });
});
// to run the animation initially when the page load
// tabs[0].click();
/* ------------------------------ Pricing page ------------------------------ */
/* -------------------------------- Swiper JS ------------------------------- */
var swiper = new Swiper(".mySwiper", {
  grabCursor:true,
  centeredSlides: true,
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
