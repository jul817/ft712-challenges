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

// const documentBody = document.body;
// const dropListCollection = document.querySelector(".dropdown-content-left");
// documentBody.addEventListener('click', (event) => {
//   if (dropListCollection.classList.value.includes('show')) {
//     dropListCollection.classList.remove('show');
//   }
// });


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
const collectionAutumnImage = document.getElementById('image-autumn');
// collectionAutumnImage.style.zIndex = 1;
// console.log(collectionName.text.toLowerCase());
collectionList.forEach(element => {

  // console.log(collectionName);
  // const collectionNameText = collectionName.text.toLowerCase();
  element.addEventListener('click', (event) => {
    const collectionName = document.getElementById(`${element.id}`);
    const collectionNameText = collectionName.text.toLowerCase();
    const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
    console.log(collectionNameText);
    // const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
    // collectionNameImage.classList.toggle("show");
    collectionNameImage.style.zIndex += 1;
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





const button = document.querySelector('.submit-button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('.input-element');
  const accountEmail = document.querySelector('.account');
  accountEmail.textContent = emailInput.value;
  window.location.assign('localhost:8000/email');

  emailInput.value ="";
});


// const documentBody = document.body;
// documentBody.addEventListener('click', (event) => {
//   if(dropListCollection.classList.value.includes('show')){
//     dropListCollection.classList.remove('show');
//   }
// });


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
