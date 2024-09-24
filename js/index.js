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
    e.preventDefault(); // 기본 링크 클릭 동작 방지

    const targetClass = this.getAttribute("href"); // 클릭한 링크의 href 속성 가져오기
    const targetElement = document.querySelector(targetClass); // 해당 섹션 요소 선택

    targetElement.scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤 효과
      block: "start", // 섹션의 시작 부분으로 정렬
    });
  });
});

// 메인
var typed = new Typed(".typingTxt", {
  strings: ["<i>Aesthetics</i>.", " Zenith idea."],
  typeSpeed: 80, //타이핑속도
  backSpeed: 30, //백스페이스 속도
  smartBackspace: true,
  cursorChar: "|", //커서모양
  backDelay: 1000, //백스페이스 문자 지우기 전에 딜레이
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
          // markers: true, // 개발 가이드 선 활성화
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
    gsap.from(".pro", {
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
    gsap.to(".pro", {
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
    span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
    container.appendChild(span);
  });

  const letters = document.querySelectorAll(".letter");
  const totalLetters = letters.length;
  const delayIncrement = 100; // Delay in milliseconds

  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }

  function animateLetters(forward = true) {
    letters.forEach((letter, index) => {
      // const delay = Math.max(index, totalLetters - index) * delayIncrement;

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
        // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
      }, delay);
    });

    setTimeout(() => animateLetters(!forward), 4000);
  }

  animateLetters();
});
