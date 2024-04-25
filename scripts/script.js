const toggleButtons = document.querySelectorAll(".faq__toggle");

toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener("click", ()=> {
        const faqAnswer = toggleButton.closest(".faq__item").querySelector(".faq__answer");
        faqAnswer.classList.toggle("active");
    })
})