const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// document.querySelector('.jumbotron li').innerHTML = " Dog GIF"

let navA = document.querySelectorAll('header nav a');
for (let i = 0; i < 6; i++){
  var n = i +1;
  navA[i].textContent = siteContent['nav']['nav-item-'+ n]
  navA[i].style.color = 'green'
};



// const Servicesa = document.querySelector('a:nth-child(1)').innerHTML = 'Services'

// document.querySelector('a:nth-child(1)').style.color = "green";

// const Producta = document.querySelector('a:nth-child(2)').innerHTML = 'Product'
// const Visiona = document.querySelector('a:nth-child(3)').innerHTML = 'Vision'
// const Featuresa = document.querySelector('a:nth-child(4)').innerHTML = 'Features'
// const Abouta = document.querySelector('a:nth-child(5)').innerHTML = 'About'
// const Contacta = document.querySelector('a:nth-child(6)').innerHTML = 'Contact';

// document.querySelector('a:nth-child(2)').style.color = "green";
// document.querySelector('a:nth-child(3)').style.color = "green";
// document.querySelector('a:nth-child(4)').style.color = "green";
// document.querySelector('a:nth-child(5)').style.color = "green";
// document.querySelector('a:nth-child(6)').style.color = "green";

 
document.getElementById("cta-img").src="img/header-img.png"
document.querySelector('.cta-text h1').innerHTML = " DOM <br>  is <br>Awesome"
document.querySelector('.cta-text button').innerHTML = 'Get Started'



const FeaturesH4 = document.querySelector('.top-content .text-content:first-child h4').innerHTML = 'Features';
const Featuresp = document.querySelector('.top-content .text-content:first-child p').innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const AboutH4 = document.querySelector('.top-content .text-content:last-child h4').innerHTML = 'About';
const Aboutp = document.querySelector('.top-content .text-content:last-child p').innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

document.getElementById("middle-img").src="img/mid-page-accent.jpg"

const ServicesH4 = document.querySelector('.bottom-content .text-content:first-child h4').innerHTML = "Services"
const Servicesp = document.querySelector('.bottom-content .text-content:first-child p').innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const ProductH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4').innerHTML = 'Product'
const Productp = document.querySelector('.bottom-content .text-content:nth-child(2) p').innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const VisionH4 = document.querySelector('.bottom-content .text-content:last-child h4').innerHTML = 'Vision '
const Visionp = document.querySelector('.bottom-content .text-content:last-child p').innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",


const CC = document.querySelector('.contact h4').innerHTML = 'Contact'
const Caddress = document.querySelectorAll(".contact p")[0];
Caddress.innerHTML = '123 Way 456 Street <br> Somewhere, USA'

const Cphone = document.querySelectorAll(".contact p")[1];
Cphone.innerHTML = '1 (888) 888-8888'

const Cemail = document.querySelectorAll('.contact p')[2];
Cemail.innerHTML = 'sales@greatidea.io'


const footer = document.querySelector('footer').innerHTML = "Copyright Great Idea! 2018"

//const Caddress = document.querySelector('.contact p:first-child').innerHTML = '123 Way 456 Street Somewhere, USA' 
//const Cemail = document.querySelector('.contact p').lastChild.innerHTML = 'sales@greatidea.io'
//const Caddress = document.querySelector(".contact p")[1].innerHTML = '123 Way 456 Street Somewhere, USA';


const newLinks = ['This' , 'Is' , 'Hard'];

const N1 = document.querySelector('nav');

newLinks.forEach(current => {
  const linkitem = document.createElement('a');
  linkitem.textContent = current;
  N1.append(linkitem);
  linkitem.style.color = 'green'
})

// for (i = 1; i<10; i++){
//   document.querySelector('a').style.color = "green";
// }

// let currenta = document.querySelector('a');
//   currenta.forEach(current => {
//     currenta.style.color = 'green';
//   })
