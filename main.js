// ***navbar JS***
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper")
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
  } else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
  }
});

// Collections dropdown content
const collection = document.querySelector('#dropbtn-left');

// let state = droplist.style.display;
// droplist.style.display = "none";
collection.addEventListener('click', (event) => {
  // let state = droplist.style.display;
  // let droplist = document.querySelector(".dropdown-content-left");
  // if (droplist.style.display = "none"){
    const droplistcollection = document.querySelector(".dropdown-content-left");
    droplistcollection.classList.toggle("show");
   // console.log(droplist.style.display);
    // droplist.style.display = "flex";
    // console.log(droplist.style.display);
 // } else {
   // droplist.style.display = "none";
  // console.log(droplist.style.display);
 // }
});



// Contact Us dropdown content
const contact = document.querySelector('#dropbtn-right');
contact.addEventListener('click', (event) => {
  const droplistcontact = document.querySelector(".dropdown-content-right");

    droplistcontact.classList.toggle("show");

});


const collectionimage = document.querySelector('#autumn-collection');
collectionimage.addEventListener('click', (event) => {
  alert('Hello');
});
