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


  // 호버 시 이미지 변경
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


  // 현재 페이지 메뉴 active
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".gnb ul li a");

menuLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// 스크롤 등장 (member)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

members.forEach(member => {
  observer.observe(member);
});


// 스크롤 등장 (AWARDS / CONCERT)
const sections = document.querySelectorAll(".scroll-section");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

console.log(sections);

});
