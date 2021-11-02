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
    const dropListCollection = document.querySelector(".dropdown-content-left");
    dropListCollection.classList.toggle("show");
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
  const dropListContact = document.querySelector(".dropdown-content-right");

    dropListContact.classList.toggle("show");

});

// Collection images




const toggleShow = () => {
  const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
  collectionNameImage.classList.toggle("show");
};


// const collectionSummer = document.getElementById('summer-collection');
// const collectionWinter = document.getElementById('winter-collection');
// const collectionAutumn = document.getElementById('autumn-collection');
const collectionList = document.querySelectorAll('.collection');
// console.log(collectionName.text.toLowerCase());
collectionList.forEach(element => {
  const collectionName = document.getElementById(`${element.id}`);
  console.log(collectionName);
  const collectionNameText = collectionName.text.toLowerCase();
  element.addEventListener('click', (event) => {
    console.log(collectionNameText);
    const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
    collectionNameImage.classList.toggle("show");
  });
 // const collectionNameText = collectionName.text.toLowerCase();
   // console.log(collectionNameText);
});


const dropImage = document.querySelectorAll('.drop-image-item');
dropImage.forEach(element => {
  const dropImageItem = element.firstElementChild.attributes[0].value;
  element.addEventListener('click', (event) => {
    const bannerImage = document.querySelector('.hero-banner');
    bannerImage.style.backgroundImage = `url('${dropImageItem}')`;
});
});



// const dropImageItem = dropImage.firstElementChild.attributes[0].value;
// console.log(dropImageItem);
// dropImage.addEventListener('click', (event) => {
//   const bannerImage = document.querySelector('.hero-banner');
//   bannerImage.style.backgroundImage = `url('${dropImageItem}')`;
//   console.log(bannerImage);
// });


// collectionName.addEventListener('click', toggleShow);
// const collectionNameText = collectionName.text.toLowerCase();



// console.log(collectionNameText);



// => {
//   const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
//   collectionNameImage.classList.toggle("show");
// });




// const collectionWinter = document.querySelector('#winter-collection');
// collectionWinter.addEventListener('click', (event) => {
//   const winterImage = document.getElementById('image-winter');
//   winterImage.classList.toggle("show");
// });



// const collectionName = document.querySelectorAll('.collection')[2].text.toLowerCase();





// const collectionName = document.getElementById('summer-collection');
// console.log(collectionName.text.toLowerCase());
// collectionName.addEventListener('click', (event) => {
//   const collectionNameText = collectionName.text.toLowerCase();
//   const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
//   console.log(collectionNameImage);
//   collectionNameImage.classList.toggle("show");
// });





// const collectionNameImage = document.getElementById(`image-${collectionName}`);
// console.log(collectionNameImage);



// collectionName.addEventListener('click', (event) => {
//   const
// });






// const dropImage = document.querySelector('#image-winter');
// const dropImageItem = dropImage.firstElementChild.attributes[0].value;
// console.log(dropImageItem);
// dropImage.addEventListener('click', (event) => {
//   const bannerImage = document.querySelector('.hero-banner');
//   bannerImage.style.backgroundImage = `url('${dropImageItem}')`;
//   console.log(bannerImage);
// });
