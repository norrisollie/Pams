// contains all code, to run on load
function app() {

  // declare variable for the jumbotron section text
  var jumbotronSectionText = document.querySelector(".jumbotron-title");

  // remove hidden class to show text
  jumbotronSectionText.classList.remove("title-hidden");

  // declare menuButtons variable
  var menuButtons = document.querySelectorAll(".menu-buttons");

  // loop and add event listener to menu buttons
  for(var menuButton of menuButtons) {

    // event listener
    menuButton.addEventListener("click", buttonClick, false);
  }

  // function to run when menu button is clicked
  function buttonClick(event) {

    // declare variable for the menu element
    var navigationMenu = document.getElementById("navigation-menu-mobile");

    // get the target action dataeset value from element on click
    var targetMenuAction = event.currentTarget.dataset.menuaction;

    // log target action to console
    console.log(targetMenuAction);

    // switch statement to determine what action has been clicked
    switch(targetMenuAction) {

      // if action is open
      case "open":
      // add active class and remove hidden class
      navigationMenu.classList.remove("menu-hidden");
      navigationMenu.classList.add("menu-active");
      break;

      // if action is close
      case "close":
      // remove active class and add hidden class
      navigationMenu.classList.add("menu-hidden");
      navigationMenu.classList.remove("menu-active");
      break;
    }
  }

  // add scroll event to change header size
  window.addEventListener("scroll", shrinkHeader, false);

  // function to shrink the header size
  function shrinkHeader() {

    // declare variables to retrieve scroll position and window height
    var scrollPositionTop = window.scrollY;
    var windowHeight = window.innerHeight;

    // declare variable for header and logo
    var headerElement = document.querySelector("header");
    var logoImageElement = document.querySelector(".logo-image");

    // if statement to check if scroll position is greater than window height
    if(scrollPositionTop > windowHeight) {

      // log to console
      console.log("more than window height");

      // add class to shrink respective elements
      headerElement.classList.add("header-shrink");
      logoImageElement.classList.add("logo-image-shrink");

    } else if (scrollPositionTop < windowHeight) {

      // log to console
      console.log("less than window height");

      // remove class to unshrink respective elements
      headerElement.classList.remove("header-shrink");
      logoImageElement.classList.remove("logo-image-shrink");
    }
  }

  // declare variables for each section
  var homeSection = document.querySelector(".home-section");
  var aboutSection = document.querySelector(".about-section");
  var menuSection = document.querySelector(".menu-section");
  var findusSection = document.querySelector(".findus-section");

  // declare variables to retrieve position of elements on page
  var homeSectionPosition = homeSection.getBoundingClientRect();
  var aboutSectionPosition = aboutSection.getBoundingClientRect();
  var menuSectionPosition = menuSection.getBoundingClientRect();
  var findusSectionPosition = findusSection.getBoundingClientRect();

  // add another event listener to change colour of header background depending on section scrolled
  window.addEventListener("scroll", changeHeaderColour, false);

  // function to change header colour
  function changeHeaderColour(event) {

    // declare variable for header element
    var headerElement = document.querySelector("header");
    // get height of headerElement
    var headerElementHeight = headerElement.offsetHeight;

    console.log("headerElementHeight: " + headerElementHeight)

    // declare variables to retrieve scroll position and window height
    var scrollPositionTop = window.scrollY;
    var windowHeight = window.innerHeight;

    // if statements to determine whether user has scrolled past top of each section

    // if user scroll position is equal to or greater than the top of findus section
    if(scrollPositionTop >= homeSectionPosition.top - headerElementHeight) {
      // add/remove respective classes
      headerElement.classList.remove("about-header");
      headerElement.classList.remove("menu-header");
      headerElement.classList.remove("findus-header");
    }

    // if user scroll position is equal to or greater than the top of the about section
    if(scrollPositionTop >= aboutSectionPosition.top - headerElementHeight) {
      // add/remove respective classes
      headerElement.classList.add("about-header");
      headerElement.classList.remove("menu-header");
      headerElement.classList.remove("findus-header");
    }
    //
    // // if user scroll position is equal to or greater than the top of menu section
    if(scrollPositionTop >= menuSectionPosition.top - headerElementHeight) {
      // add/remove respective classes
      headerElement.classList.remove("about-header");
      headerElement.classList.add("menu-header");
      headerElement.classList.remove("findus-header");
    }

    // if user scroll position is equal to or greater than the top of findus section
    if(scrollPositionTop >= findusSectionPosition.top - headerElementHeight) {
      // add/remove respective classes
      headerElement.classList.remove("about-header");
      headerElement.classList.remove("menu-header");
      headerElement.classList.add("findus-header");
    }
  }

  // add another event listener to show the text on scroll
  window.addEventListener("scroll", showText, false);

  function showText(event) {

    // declare variables to retrieve scroll position and window height
    var scrollPositionTop = window.scrollY;

    // declare variables for the header element and text elements in each section
    var headerElement = document.querySelector("header");
    var jumbotronSectionText = document.querySelector(".jumbotron-title");
    var aboutSectionText = document.querySelector(".about-section-text");
    var menuSectionText = document.querySelector(".menu-section-text");
    var findusSectionText = document.querySelector(".findus-section-text");

    // about section text
    if (scrollPositionTop > aboutSectionPosition.top - 300) {

      // remove hidden class to show text
      aboutSectionText.classList.remove("text-left-hidden");
    }

    // menu section text
    if (scrollPositionTop > menuSectionPosition.top - 300) {
      // remove hidden class to show text
      menuSectionText.classList.remove("text-right-hidden");
    }

    // findus section text
    if (scrollPositionTop > findusSectionPosition.top - 300) {
      // remove hidden class to show text
      findusSectionText.classList.remove("text-left-hidden");
    }
  }


}

window.onload = app();





// function app() {
//
//   var d = document;
//
//   // declare menuButtons variable
//   var menuButtons = document.querySelectorAll(".menu-buttons");
//
//   // loop through buttons and attach event listener to menu buttons
//   for(var menuButton of menuButtons) {
//     menuButton.addEventListener("click", menuClick, false);
//   }
//
//   // function runs when a menu button is click
//   function menuClick(e) {
//
//     // get dataset value to determine whether open or close has been clicked
//     var targetDataset = e.target.dataset.menuaction;
//
//     // log to console
//     console.log(targetDataset);
//
//     var navigationMenu = document.getElementById("navigation-menu-mobile")
//
//     // switch statement to determine whether to open or close menu
//     switch(targetDataset) {
//
//       // if open
//       case "open":
//       // remove hidden class and replace with active class
//       navigationMenu.classList.remove("menu-hidden");
//       navigationMenu.classList.add("menu-active");
//         break;
//
//       // if close
//       case "close":
//       // remove active class and replace with hidden class
//       navigationMenu.classList.add("menu-hidden");
//       navigationMenu.classList.remove("menu-active");
//         break;
//     }
//
//   }
//
//   for(menuButton of menuButtons) {
//
//     menuButton.addEventListener("scroll", scrollDown);
//
//   }
//
//
//   window.addEventListener("scroll", changeHeaderSize, false);
//
//   function changeHeaderSize(event) {
//
//     // store header and logo image elements in DOM
//     var header = document.querySelector("header");
//     var logo = document.querySelector(".logo-image");
//
//     // retrieve the scrollY (position from top) position value and innerHeight value
//     var scrollPosTop = window.scrollY;
//     var windowHeight = window.innerHeight;
//
//     // if statement to check if scroll position is greater than window height
//     if(scrollPosTop > windowHeight) {
//       // add header-shrink class to header element
//       header.classList.add("header-shrink");
//       // add .logo-image class to the logo to change size
//       logo.classList.add("logo-image-shrink");
//
//       // if statement to check if scroll position is less than window height value
//     } else if (scrollPosTop < windowHeight) {
//       // remove header-shrink class to header element
//       header.classList.remove("header-shrink");
//       // remove .logo-image class to the logo to change size
//       logo.classList.remove("logo-image-shrink");
//     }
//   }
//
  // var homeSection = document.querySelector(".home-section");
  // var aboutSection = document.querySelector(".about-section");
  // var menuSection = document.querySelector(".menu-section");
  // var findusSection = document.querySelector(".findus-section");
//
//   var homeSectionPos = homeSection.getBoundingClientRect();
//   var aboutSectionPos = aboutSection.getBoundingClientRect();
//   var menuSectionPos = menuSection.getBoundingClientRect();
//   var findusSectionPos = findusSection.getBoundingClientRect();
//
//   console.log(homeSectionPos.top);
//   console.log(aboutSectionPos.top);
//   console.log(menuSectionPos.top);
//   console.log(findusSectionPos.top);
//
  // window.addEventListener("scroll", showText, false);
  //
  // function showText(event) {
  //
  //   var scrollPosTop = window.scrollY;
  //   var header = document.querySelector("header");
  //
  //   var aboutSectionText = document.querySelector(".about-section-text");
  //   var menuSectionText = document.querySelector(".menu-section-text");
  //   var findusSectionText = document.querySelector(".findus-section-text");
  //
  //   if (scrollPosTop > aboutSectionPos.top - 300) {
  //
  //     aboutSectionText.classList.remove("text-left-hidden");
  //
  //   }
  //
  //   if (scrollPosTop > menuSectionPos.top - 300) {
  //
  //     menuSectionText.classList.remove("text-right-hidden");
  //
  //   }
  //
  //   if (scrollPosTop > findusSectionPos.top - 300) {
  //
  //     findusSectionText.classList.remove("text-left-hidden");
  //   }
  //
  // }
//
//   window.addEventListener("scroll", changeHeaderColour, false);
//
//   function changeHeaderColour(event) {
//
//     var scrollPosTop = window.scrollY;
//     var header = document.querySelector("header");
//
//     if(scrollPosTop >= homeSectionPos.top ) {
//       header.classList.remove("about-header");
//       header.classList.remove("menu-header");
//       header.classList.remove("findus-header");
//     }
//
    // if(scrollPosTop >= aboutSectionPos.top) {
    //   header.classList.add("about-header");
    //   header.classList.remove("menu-header");
    //   header.classList.remove("findus-header");
    //
    // }
//
//     if (scrollPosTop >= menuSectionPos.top) {
//       header.classList.add("menu-header");
//       header.classList.remove("findus-header");
//       header.classList.remove("about-header");
//
//
//     }
//
//     if (scrollPosTop >= findusSectionPos.top) {
//       header.classList.add("findus-header");
//       header.classList.remove("about-header");
//       header.classList.remove("menu-header");
//
//     }
//
//   }
//
//
//
//
//
//
//
//
//
//
//
//
// }
//
// window.onload = app();
