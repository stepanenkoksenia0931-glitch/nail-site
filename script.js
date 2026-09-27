const form = document.querySelector(".booking form");

const successModal = document.querySelector("#successModal");
const successClose = document.querySelector("#successClose");
const telegramButton = document.querySelector("#telegramButton");

let telegramLink = "";


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const service = form.querySelector("select").value;

    if (!name || !phone || service === "Выберите услугу") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const message =
        `Здравствуйте! Хочу записаться на маникюр.%0A%0A` +
        `Имя: ${encodeURIComponent(name)}%0A` +
        `Телефон: ${encodeURIComponent(phone)}%0A` +
        `Услуга: ${encodeURIComponent(service)}`;

    telegramLink = `https://t.me/rrumaxs?text=${message}`;

    successModal.classList.add("active");

    form.reset();

});


telegramButton.addEventListener("click", function() {

    window.open(telegramLink, "_blank");

    successModal.classList.remove("active");

});


successClose.addEventListener("click", function() {

    successModal.classList.remove("active");

});


successModal.addEventListener("click", function(event) {

    if (event.target === successModal) {
        successModal.classList.remove("active");
    }

});
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("active");
});
const revealElements = document.querySelectorAll(
    ".section-title, .advantage-card, .service-card, .work-card, .master-info, .master-photo, .review-card, .contacts-info, .booking"
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element) {
    observer.observe(element);
});