const previousPageBtn = document.getElementById("previous-page-btn");
const nextPageBtn = document.getElementById("next-page-btn");
const pageNumberSection = document.getElementById("page-number");
const display = document.getElementById("display");

const pages = {
  first: "1 The wind blows,",
  second: "2 Tree leaves rustle,",
  third: "3 The silence ruffled."
};

let page = localStorage.getItem("page");
if (page === null || !pages[page]) page = "first";

function updatePageNumberUI(name) {
  if (!pageNumberSection) return;
  if (name === "first") pageNumberSection.innerHTML = "1/3";
  else if (name === "second") pageNumberSection.innerHTML = "2/3";
  else if (name === "third") pageNumberSection.innerHTML = "3/3";
}

function turnToPage(pageChosen) {
  if (!display) return;
  display.innerHTML = pages[pageChosen] || "";
  updatePageNumberUI(pageChosen);
}

function setPage(name) {
  if (!pages[name]) name = "first";
  turnToPage(name);
  page = name;
  localStorage.setItem("page", page);
  console.log("Saved page:", page);
}

const begBtn = document.getElementById("beg-btn");
const midBtn = document.getElementById("mid-btn");
const endBtn = document.getElementById("end-btn");
const slideBegBtn = document.getElementById("slide-beg-btn");
const slideMidBtn = document.getElementById("slide-mid-btn");
const slideEndBtn = document.getElementById("slide-end-btn");

if (begBtn) begBtn.addEventListener("click", () => setPage("first"));
if (midBtn) midBtn.addEventListener("click", () => setPage("second"));
if (endBtn) endBtn.addEventListener("click", () => setPage("third"));
if (slideBegBtn) slideBegBtn.addEventListener("click", () => setPage("first"));
if (slideMidBtn) slideMidBtn.addEventListener("click", () => setPage("second"));
if (slideEndBtn) slideEndBtn.addEventListener("click", () => setPage("third"));

if (previousPageBtn) previousPageBtn.addEventListener("click", () => {
  if (page === "first") setPage("third");
  else if (page === "second") setPage("first");
  else if (page === "third") setPage("second");
});

if (nextPageBtn) nextPageBtn.addEventListener("click", () => {
  if (page === "first") setPage("second");
  else if (page === "second") setPage("third");
  else if (page === "third") setPage("first");
});

// initialize display
setPage(page);