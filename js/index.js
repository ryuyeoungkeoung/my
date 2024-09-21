"use strict";
//커서 태그들

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

// 스크롤 트리거 헤더2,4
ScrollTrigger.matchMedia({
  // 1000px 이상일 때
  "(min-width: 1000px)": function () {
    gsap.from(".up_li", {
      scrollTrigger: {
        duration: 100,
        trigger: "body",
        start: "0% 0%",
        end: "0% 0%",
        scrub: 1,
        // markers: true,
      },
      y: "0%",
    });
    gsap.to(".up_li", {
      scrollTrigger: {
        trigger: "body",
        // markers: true,
      },
      y: "200%",
    });
  },
});

// 메인 (위로 올라가면 사진+ 헤더부분이 적용안 됨)
var tl = gsap.timeline(),
  split = new SplitText("#quote", { type: "words,chars" }),
  words = split.words; //an array of all the divs that wrap each character

tl.to(words, {
  duration: 7,
  "--weight": "300",
  ease: "power3.out",
  color: "hsl(+=0, +=70%, +=20%)",
  stagger: {
    each: 0.1,
  },
});

// 마지막
