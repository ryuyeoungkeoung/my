"use strict";
gsap.registerPlugin(ScrollTrigger);
//커서
const blobCursor = (() => {
  const cursor = document.querySelector("#cursorBlob");
  const links = document.querySelectorAll(".nav__link");
  const setCursorPos = (e) => {
    const { pageX: posX, pageY: posY } = e;
    cursor.style.top = `${posY - cursor.offsetHeight / 2}px`;
    cursor.style.left = `${posX - cursor.offsetWidth / 2}px`;
  };
  document.addEventListener("mousemove", setCursorPos);

  const setCursorHover = () => (cursor.style.transform = "scale(2.5)");
  const removeCursorHover = () => (cursor.style.transform = "");
  links.forEach((link) => link.addEventListener("mouseover", setCursorHover));
  links.forEach((link) =>
    link.addEventListener("mouseleave", removeCursorHover)
  );
})();

// 메뉴 클릭시 섹션 이동
document.querySelectorAll(".menu-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetClass = this.getAttribute("href");
    const targetElement = document.querySelector(targetClass);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// 메인
var typed = new Typed(".typingTxt", {
  strings: ["<i>Aesthetics</i>.", " Zenith idea."],
  typeSpeed: 80,
  backSpeed: 30,
  smartBackspace: true,
  cursorChar: "|",
  backDelay: 1000,
});

// 메인
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".fi", {
      scrollTrigger: {
        trigger: ".two",
        start: "-100% -50%",
        end: "0% 0%",
        scrub: 1,
        // markers: true,
      },
      duration: 1,
    });
    gsap.to(".fi", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
      borderRadius: "100%",
    });
  },
  // 1000px 미만일 때
  "(max-width: 1000px)": function () {
    gsap.fromTo(
      ".fi",
      {
        // 시작할 때 모습
        rotate: 0,
        y: "0",
        x: "0%",
        // markers: true,
      },
      {
        // 끝났을 때 모습
        duration: 5,
        y: "0",
        x: "0%",
        rotation: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "-50% 0%",
          end: "10% 0%",
          scrub: 1,
          // markers: true,
        },
        borderRadius: "50%",
      }
    );
  },
});
// 프로플 사진
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".pro_hov1", {
      scrollTrigger: {
        duration: 100,
        trigger: ".two",
        start: "-70% 0%",
        end: "10% 0%",
        opacity: 0,
        scrub: 1,
        // markers: true,
        margintop: "100px",
      },
      y: "0",
      x: "-50%",
    });
    gsap.to(".pro_hov1", {
      scrollTrigger: {
        trigger: ".two",
        opacity: 1,
        // markers: true,
      },
      y: "0",
      x: "5%",
    });
  },
});
// 마지막 섹션 1
document.addEventListener("DOMContentLoaded", () => {
  const text = "Thanks for the opportunity!";
  const container = document.getElementById("animatedText");

  // Create spans for each letter
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = char === " " ? "&nbsp;" : char;
    container.appendChild(span);
  });

  const letters = document.querySelectorAll(".letter");
  const totalLetters = letters.length;
  const delayIncrement = 100;

  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }

  function animateLetters(forward = true) {
    letters.forEach((letter, index) => {
      const normalizedIndex =
        Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
      const easedDelay = easeInOutQuart(normalizedIndex);
      const delay = easedDelay * (totalLetters - 1) * delayIncrement;

      setTimeout(() => {
        letter.style.setProperty("--wght", forward ? 700 : 100);
        letter.style.setProperty("--wdth", forward ? 400 : 150);
        letter.style.setProperty("--opacity", forward ? 1 : 0.25);
        letter.style.setProperty(
          "--letter-spacing",
          forward ? "0.05em" : "0em"
        );
      }, delay);
    });

    setTimeout(() => animateLetters(!forward), 4000);
  }

  animateLetters();
});
