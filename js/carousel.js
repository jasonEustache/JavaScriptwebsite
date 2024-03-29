const slides = document.querySelectorAll(".review-item");
const buttons = document.querySelectorAll(".slide-ctrl-container button");

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const dummySlides = [
  //slide 0
  //slide 1
  //slide 2 -current [next] = current +1
  //slide 3 -current
];

/*create evenListener for prev/next */

//goToNext()
//gotToPrev()
//updateIndexes(param)
//updateCSS()2
// -- decide how to call prev/next
//-- update variables
//-- [current] = newIndex
// -- [next] current + 1 : 0
//[prev] current -1 :length - 1
// update the css

const update = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev", "next");
  });
  slides[current].classList.add("active");
  slides[current].classList.add("prev");
  slides[current].classList.add("next");
};

const goToNum = (number) => {
  current = number;
  next = current < slides.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : slides.length - 1;
  update();
};

const goToNext = () =>
  current < slides.length - 1 ? gotTo(current + 1) : goToNum(0);
const goToPrev = () =>
  current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", () => {
    i === 0 ? goToPrev() : goToNext();
  });
}

update();
