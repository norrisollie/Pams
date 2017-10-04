// scripts
// run function on window load to prevent unwanted behaviour
function app() {

// declare variable for buttons required to toggle menu
var menuButtons = document.querySelectorAll(".toggle-menu-button");

// loop through buttons and add an click even listener
for(var menuButton of menuButtons) {
  // add event listener
  menuButton.addEventListener("click", toggleMenu, false);

}

// function to toggle menu
  function toggleMenu(event) {

    // variable to retrieve the value in the action dataset
    var targetAction = event.currentTarget.dataset.action;

    // declare variable for menu wrapper
    var menuWrapper = document.querySelector(".menu-wrapper");
    var contentContainer = document.querySelector(".content-container");
    var header = document.querySelector(".header");

    // switch statement to run code depending on action button value
    switch(targetAction) {

      // if open
      case "open":

      // add active classes to menuWrapper, contentContainer and header elements
      menuWrapper.classList.remove("menu-hidden");
      menuWrapper.classList.add("menu-active");
      contentContainer.classList.remove("content-hidden");
      contentContainer.classList.add("content-active");
      header.classList.remove("header-hidden");
      header.classList.add("header-active");
      break;

      // if close
      case "close":
      // add hidden classes to menuWrapper, contentContainer and header elements
      menuWrapper.classList.remove("menu-active");
      menuWrapper.classList.add("menu-hidden");
      contentContainer.classList.remove("content-active");
      contentContainer.classList.add("content-hidden");
      header.classList.remove("header-active");
      header.classList.add("header-hidden");
      break;
    }
  }

  // shrinking the header

  // add event listener to windows scroll event
  window.addEventListener("scroll", shrinkHeader, false);

  // function to run on shrink event
  function shrinkHeader(event) {

    // declare variable for the header and section-hero elements
    var header = document.querySelector(".header");
    var sectionHero = document.querySelector(".section-hero");

    // retrieve the number of pixels scrolled
    var scrollPosition = window.scrollY;

    // retrieve height of section-hero
    var headerHeight = header.offsetHeight;

    // retrieve height of section-hero
    var sectionHeroHeight = sectionHero.offsetHeight;

    // declare variable of logo image
    var logo = document.querySelector(".logo");

    // if statement to determine whether scroll height is greater than the height of the section-hero element
    if(scrollPosition > sectionHeroHeight - headerHeight) {

      // add shrink class
      logo.classList.add("logo-shrink");

    } else if (scrollPosition < sectionHeroHeight) {

      // remove shrink class
      logo.classList.remove("logo-shrink");

    }
  }

  // add event listener to windows scroll event
  window.addEventListener("scroll", changeHeaderColour, false);

  // function to
  function changeHeaderColour(event) {

    // retrieve scroll position
    var scrollPosition = window.scrollY;

    // declare elements
    var header = document.querySelector(".header");
    var sectionHero = document.querySelector(".section-hero");
    var sectionOne = document.querySelector(".section-1");
    var sectionTwo = document.querySelector(".section-2");
    var sectionThree = document.querySelector(".section-3");

    // retrieve height of elements
    var headerHeight = header.offsetHeight;
    var sectionHeroHeight = sectionHero.offsetHeight;
    var sectionOneHeight = sectionOne.offsetHeight;
    var sectionTwoHeight = sectionTwo.offsetHeight;
    var sectionThreeHeight = sectionThree.offsetHeight;

    // if scroll position is greater than or equal to section hero height minus header height
    if(scrollPosition >= sectionHeroHeight - headerHeight) {

      // add class
      header.classList.add("section-1-background");
      header.classList.remove("section-2-background");
      header.classList.remove("section-3-background");

    } else {
      header.classList.remove("section-1-background");
    }

    if(scrollPosition >= sectionHeroHeight + sectionOneHeight - headerHeight) {

      header.classList.add("section-2-background");
      header.classList.remove("section-1-background");
      header.classList.remove("section-3-background");
    }

   if(scrollPosition >= sectionHeroHeight + sectionOneHeight + sectionTwoHeight - headerHeight) {

      header.classList.add("section-3-background");
      header.classList.remove("section-1-background");
      header.classList.remove("section-2-background");

    }

    // get the height of window
    var windowHeight = window.innerHeight;

    // if statements to remove fade-in-left or fade-in-right classes
    if(scrollPosition >= sectionHeroHeight - windowHeight / 2) {

      // declare variable for the section 1 text
      var sectionOneText = document.querySelector(".section-1 .inner-section .section-text .section-paragraph");

      // remove class
      sectionOneText.classList.remove("fade-in-left")

    }

    // if statements to remove fade-in-left or fade-in-right classes
    if(scrollPosition >= (sectionHeroHeight + sectionOneHeight) - (windowHeight / 2)) {

      // declare variable for the section 1 text
      var sectionTwoText = document.querySelector(".section-2 .inner-section .section-text .section-paragraph");

      // remove class
      sectionTwoText.classList.remove("fade-in-right");

    }

    // if statements to remove fade-in-left or fade-in-right classes
    if(scrollPosition >= (sectionHeroHeight + sectionOneHeight + sectionTwoHeight) - (windowHeight / 2)) {

      // declare variable for the section 1 text
      var sectionThreeText = document.querySelector(".section-3 .inner-section .section-text .section-paragraph");

      // remove class
      sectionThreeText.classList.remove("fade-in-left");

    }

  }

var pageLinks = document.querySelectorAll(".page-links");

// loop
for(var pageLink of pageLinks) {

  // add event listenrr
  pageLink.addEventListener("click", pageLinkClick, false);

}

// function to run on click event
function pageLinkClick(event) {

  // retrieve target elements page dataset
  var targetPage = event.currentTarget.dataset.page;

  console.log(targetPage)

  var sectionHero = document.querySelector(".section-hero");
  var sectionOne = document.querySelector(".section-1");
  var sectionTwo = document.querySelector(".section-2");
  var sectionThree = document.querySelector(".section-3");

  // retrieve height of elements
  var sectionHeroHeight = sectionHero.offsetHeight;
  var sectionOneHeight = sectionOne.offsetHeight;
  var sectionTwoHeight = sectionTwo.offsetHeight;
  var sectionThreeHeight = sectionThree.offsetHeight;

  var heroAndOne = sectionHeroHeight + sectionOneHeight;

  var windowScrollPosition = window.scrollY;

  var scroll_source_object = {
     y: windowScrollPosition
  };

  // if about clicked
  if(targetPage === "about") {

    TweenMax.to(scroll_source_object,1, {
        y: sectionHeroHeight,
        onUpdate: function() {
            window.scrollTo(0, scroll_source_object.y);
        },
        ease: Power2.easeInOut
    });

  } else if(targetPage === "menu") {

    TweenMax.to(scroll_source_object,1, {
        y: sectionHeroHeight + sectionOneHeight,
        onUpdate: function() {
            window.scrollTo(0, scroll_source_object.y);
        },
        ease: Power2.easeInOut
    });

  } else if(targetPage === "findus") {

    TweenMax.to(scroll_source_object,1, {
        y: sectionHeroHeight + sectionOneHeight + sectionTwoHeight,
        onUpdate: function() {
            window.scrollTo(0, scroll_source_object.y);
        },
        ease: Power2.easeInOut
    });

  }
  else if(targetPage === "home") {

    TweenMax.to(scroll_source_object,1, {
        y: 0,
        onUpdate: function() {
            window.scrollTo(0, scroll_source_object.y);
        },
        ease: Power2.easeInOut
    });

  }

}

















}

window.onload = app();
