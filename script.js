"use strict";
let nav = document.querySelector(".nav");
let menu = document.getElementById("menu");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let features = document.getElementById("features");
let company = document.getElementById("company");
let bg = document.getElementById("bg");
let ftDrop = document.getElementById("ftdrop");
let cmpDrop = document.getElementById("cmpdrop");
let lines = document.querySelectorAll(".line");

function ftToggle() {
  features.classList.toggle("active");
  document.getElementById("ftimg").classList.toggle("arrow");
  ftDrop.classList.toggle("active");
}

function cmpToggle() {
  company.classList.toggle("active");
  document.getElementById("cmpimg").classList.toggle("arrow");
  cmpDrop.classList.toggle("active");
}

function closeMenu() {
  lines.forEach((item) => {
    item.classList.remove("active");
  });
  line1.classList.add("rest");
  line3.classList.add("rest");
  nav.classList.toggle("slideIn");
  bg.classList.toggle("active");
}

menu.addEventListener("click", () => {
  if (
    ftDrop.classList.contains("active") &&
    cmpDrop.classList.contains("active")
  ) {
    setTimeout(closeMenu, 100);
    ftToggle();
    cmpToggle();
  } else if (ftDrop.classList.contains("active")) {
    setTimeout(closeMenu, 100);
    ftToggle();
  } else if (cmpDrop.classList.contains("active")) {
    setTimeout(closeMenu, 100);
    cmpToggle();
  } else if (line1.classList.contains("active")) {
    closeMenu();
  } else {
    lines.forEach((item) => {
      item.classList.add("active");
    });
    nav.classList.toggle("slideIn");
    bg.classList.toggle("active");
    line1.classList.remove("rest");
    line3.classList.remove("rest");
  }
});

bg.addEventListener("click", () => {
  if (
    ftDrop.classList.contains("active") &&
    cmpDrop.classList.contains("active")
  ) {
    setTimeout(closeMenu, 100);
    ftToggle();
    cmpToggle();
  } else if (ftDrop.classList.contains("active")) {
    setTimeout(closeMenu, 100);
    ftToggle();
  } else if (cmpDrop.classList.contains("active")) {
    setTimeout(closeMenu, 100);
    cmpToggle();
  } else {
    lines.forEach((item) => {
      item.classList.remove("active");
    });
    nav.classList.remove("slideIn");
    bg.classList.remove("active");
    line1.classList.add("rest");
    line3.classList.add("rest");
    ftToggle();
    cmpToggle();
  }
});

features.addEventListener("click", () => {
  ftToggle();
});

company.addEventListener("click", () => {
  cmpToggle();
});
