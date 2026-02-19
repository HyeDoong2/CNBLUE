document.addEventListener("DOMContentLoaded", function () {

  // Swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // Member Hover Image Change
  const members = document.querySelectorAll(".member");

  members.forEach((member, index) => {
    const img = member.querySelector("img");

    const originalSrc = img.getAttribute("src");
    const hoverSrc = `images/profile/hover${index + 1}.jpg`;

    member.addEventListener("mouseenter", () => {
      img.setAttribute("src", hoverSrc);
    });

    member.addEventListener("mouseleave", () => {
      img.setAttribute("src", originalSrc);
    });
  });

  const accordionSections = document.querySelectorAll(".accordion-section");

  accordionSections.forEach(section => {
    const title = section.querySelector(".accordion-title");

    title.addEventListener("click", () => {
      section.classList.toggle("active");
    });
  });

});
