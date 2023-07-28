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

  if(faqQuestions.length){
    function activeAccordion(event) {
      event.currentTarget.classList.toggle("activate-accordion")
      event.currentTarget.nextElementSibling.classList.toggle("activate-accordion")
    }
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", activeAccordion);
    });
  }
}

initTabNav();
initFAQAccordion();