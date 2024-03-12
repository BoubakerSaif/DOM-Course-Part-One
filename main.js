/* DOM Selectors

getElementById();
getElementsByTagName();
getElementsByClassName();
querySelector()
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElements = document.getElementsByClassName("my-span");

// console.log(myIdElement);
// console.log(myTagElements);
// console.log(myTagElements[0]);
// console.log(myTagElements[1]);
// console.log(myClassElements);
// console.log(myClassElements[0]);
// console.log(myClassElements[1]);

// myTagElements[1].innerHTML = "TEST";

// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElements = document.querySelectorAll(".my-span");

// console.log(myQueryElement);

// console.log(myQueryAllElements[0]);
// console.log(myQueryAllElements[1]);

// console.log(document.body);

// console.log(document.forms);
// console.log(document.forms[0].one.value);
// console.log(document.links);
// console.log(document.links[0].href);
// document.links[0].href = "https://youtube.com/";

/*
-innerHtml
-textContent
-Attribute methods ==> getAttribute() // setAttribute()
*/

// let myElement = document.querySelector(".js");
// console.log(myElement);
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML =
//   "Text From <button>XXX</button> <span> Main.js </span> File";
// myElement.textContent = "Text From <span> Main.js </span> File";

// console.log(document.images[0]);

// document.images[0].src =
//   "https://www.shutterstock.com/image-photo/two-orange-fruits-hanging-branch-600nw-2257832035.jpg";

// document.images[0].alt = "Orange Image";
// document.images[0].title = "Pic";
// document.images[0].id = "borgdena";

// let myLink = document.querySelector(".link");

// console.log(myLink);

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");

// myLink.innerHTML = "Twitter";

// myLink.setAttribute("title", "Twitter");

//<----------------------------------------------------------------->

/*
Element.attributes
Element.hasAttribute
Element.hasAttributes
Element.removeAttribute


// */
// let myP = document.getElementsByTagName("p")[0];
// console.log(myP);

// console.log(myP.getAttribute("data-src"));

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log("Not Found");
// }
