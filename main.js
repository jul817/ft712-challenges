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

// toggle classList to "show"
const toggleShow = (selectedElement) => {
  selectedElement.classList.toggle("show");
};


// remove classList "show"
const removeShow = (selectedElement) => {
  selectedElement.forEach(element => {
    element.addEventListener('click', (event) => {
      element.parentElement.classList.remove("show")
    });
  });
}

// convert HTMLCollection to array
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
  toggleShow(dropListCollection);
});

// Contact Us dropdown content
const contact = document.querySelector('#dropbtn-right');
contact.addEventListener('click', (event) => {
  const dropListContact = document.querySelector(".dropdown-content-right");
  toggleShow(dropListContact);
  const contactArray = collectionToArray(dropListContact.children);
  removeShow(contactArray);
});

// Shops dropdown content
const shops = document.querySelector('#dropbtn-right-shops');
const dropListShops = document.querySelector("#dropdown-content-shops");
shops.addEventListener('click', (event) => {
  toggleShow(dropListShops);
  const shopArray = collectionToArray(dropListShops.children);
  removeShow(shopArray);
});

// Products dropdown content
const products = document.querySelector('#dropbtn-left-products');
const dropListProducts = document.querySelector("#dropdown-content-products");
products.addEventListener('click', (event) => {
  toggleShow(dropListProducts);
  const productArray = collectionToArray(dropListProducts.children);
  removeShow(productArray);
});

// Services dropdown content
const services = document.querySelector('#dropbtn-left-services');
const dropListServices = document.querySelector("#dropdown-content-services");
services.addEventListener('click', (event) => {
  toggleShow(dropListServices);
  const servicesArray = collectionToArray(dropListServices.children);
  removeShow(servicesArray);
});


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
