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

// toggle to show function
const toggleShow = (selectedElement) => {
  selectedElement.classList.toggle("show");
};



const removeShow = (selectedElement) => {
  selectedElement.forEach(element => {
    element.addEventListener('click', (event) => {
      element.parentElement.classList.remove("show")
    });
  });
}

const collectionToArray = (collection) => {
  array = [];
  for (let i = 0; i < collection.length; i++) {
    array.push(collection.item(i));
  }
  return array;
}


// Collections dropdown content
const collection = document.querySelector('#dropbtn-left');
const dropListCollection = document.querySelector(".dropdown-content-left");
collection.addEventListener('click', (event) => {
  // dropListCollection.classList.toggle("show");
  toggleShow(dropListCollection);
});

// Contact Us dropdown content
const contact = document.querySelector('#dropbtn-right');
contact.addEventListener('click', (event) => {
  const dropListContact = document.querySelector(".dropdown-content-right");
  // dropListContact.classList.toggle("show");
  toggleShow(dropListContact);
  console.log(dropListContact.children);
  // removeShow(dropListContact.children)
  const contactArray = collectionToArray(dropListContact.children);
  console.log(contactArray);
  // array = [];
  // for (let i =0; i < dropListContact.children.length; i++){
  //   array.push(dropListContact.children.item(i));
  // }
  removeShow(contactArray);
});




// Our shops dropdown content
const shops = document.querySelector('#dropbtn-right-shops');
const dropListShops = document.querySelector("#dropdown-content-shops");
shops.addEventListener('click', (event) => {
  // dropListShops.classList.toggle("show");
  toggleShow(dropListShops);
  const shopArray = collectionToArray(dropListShops.children);
  removeShow(shopArray);
  // if (dropListShops.classList.value.includes('show')) {
  //   alert('it includes');
  // } else {
  //   alert('it does not include');
  // }
});





// const shopList = document.querySelectorAll('.shop-link');
// shopList.forEach(element => {
//   element.addEventListener('mouseout', (event) => {
//     dropListShops.classList.remove("show");
//   }, true);
// });






// Add image to Collection dropdown menu
const collectionList = document.querySelectorAll('.collection');
const collectionImage = document.getElementById('image-autumn');
collectionList.forEach(element => {
  const collectionName = document.getElementById(`${element.id}`);
  const collectionNameText = collectionName.text.toLowerCase();
  const collectionNameImage = document.getElementById(`image-${collectionNameText}`);
  const collectionImageValue = collectionNameImage.firstElementChild.attributes[0].value;
  element.addEventListener('click', (event) => {
    collectionImage.firstElementChild.attributes[0].value = `${collectionImageValue}`;
    collectionImage.addEventListener('click', (event) => {
      collectionImage.offsetParent.classList.remove("show");
    });
  });
});



// Display selected image from Collection list as banner
const dropImage = document.querySelectorAll('.drop-image-item');
dropImage.forEach(element => {
  element.addEventListener('click', (event) => {
    const dropImageItem = element.firstElementChild.attributes[0].value;
    const bannerImage = document.querySelector('.hero-banner');
    bannerImage.style.backgroundImage = `url('${dropImageItem}')`;
  });
});

// Add email address as account status
const button = document.querySelector('.submit-button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('.input-element');
  const accountEmail = document.querySelector('.account');
  accountEmail.textContent = emailInput.value;
  window.location.assign('localhost:8000/email');
  emailInput.value = "";
});


  // const documentBody = document.querySelector('body');
// documentBody.removeEventListener('click', (event) => {
//   dropListShops.classList.toggle("show");
// }, true);

// const documentBody = document.querySelector('body');
// documentBody.addEventListener('click', (event) => {
//   // const allDropDowns = document
//   if (dropListShops.classList.value('show')) {
//     dropListShops.classList.remove('show');
//   } else {
//     dropListShops.classList.add('show');
//   }
// });
