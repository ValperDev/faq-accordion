const faqQuestions = document.querySelectorAll(".faq__question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    const toggleButton = faqQuestion.querySelector(".faq__toggle");
    toggleButton.classList.toggle("faq__toggle-expanded");
    const faqAnswer = faqQuestion.closest(".faq__item").querySelector(".faq__answer");
    faqAnswer.classList.toggle("active");
  });
});
