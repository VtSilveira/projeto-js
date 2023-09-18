function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll(".js-accordion dt");
  faqQuestions[0].classList.add("activate-accordion");
  faqQuestions[0].nextElementSibling.classList.add("activate-accordion");

  if (faqQuestions.length) {
    function activeAccordion(event) {
      event.currentTarget.classList.toggle("activate-accordion");
      event.currentTarget.nextElementSibling.classList.toggle(
        "activate-accordion"
      );
    }

    faqQuestions.forEach((question) => {
      question.addEventListener("click", activeAccordion);
    });
  }
}

function initSmoothScrolls() {
  const internLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const itemHref = event.currentTarget.getAttribute("href");
    const itemSection = document.querySelector(itemHref);
    const top = itemSection.offsetTop;
  
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
  
  internLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initTabNav();
initFAQAccordion();
initSmoothScrolls();