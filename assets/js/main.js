/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle');



/* Menu show - hidden */
navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');

})

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper('.services-swiper', {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1208: {
          slidesPerView: 3,
        },
    },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     alert('Thank you for reaching out! I will get back to you soon.');
//     this.reset(); // Optional: resets the form after submission
// });



/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById('style-switcher'),
    switcherToggle = document.getElementById('switcher-toggle'),
    switcherClose = document.getElementById('switcher-close');


/* Switcher show */
switcherToggle.addEventListener('click', () =>{
    styleSwitcher.classList.add('show-switcher');
})

/* Switcher hidden */
switcherClose.addEventListener('click', () =>{
    styleSwitcher.classList.remove('show-switcher');
})
/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll('.style-switcher-color');
colors.forEach((color) =>{
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');
        document.documentElement.style.setProperty('--hue', activeColor);
    }
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input)=>{
    input.addEventListener('change',() => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    });
});

/*=============== FOOTER===============*/
const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });



////////////
window.addEventListener('orientationchange', () => {
    // Adjust layout for different orientations
    const orientation = screen.orientation.type;
    if (orientation.includes('portrait')) {
      document.body.classList.add('portrait-mode');
      document.body.classList.remove('landscape-mode');
    } else {
      document.body.classList.add('landscape-mode');
      document.body.classList.remove('portrait-mode');
    }
  });

  //////

  // Comprehensive Orientation Detection
function handleOrientation() {
    const orientation = window.screen.orientation ? 
        window.screen.orientation.type : 
        (window.orientation === 0 ? 'portrait' : 'landscape');

    // Add body class for styling
    document.body.classList.remove('portrait-mode', 'landscape-mode');
    document.body.classList.add(
        orientation.includes('portrait') ? 'portrait-mode' : 'landscape-mode'
    );

    // Responsive adjustments
    if (orientation.includes('portrait')) {
        // Mobile portrait specific adjustments
        document.querySelector('.nav-menu').classList.add('mobile-nav');
        // Add more mobile-specific layout modifications
    } else {
        document.querySelector('.nav-menu').classList.remove('mobile-nav');
    }
}

// Initial call
handleOrientation();

// Event listeners for orientation changes
window.addEventListener('orientationchange', handleOrientation);
window.addEventListener('resize', handleOrientation);

//////////////////////////

function handleResponsiveness() {
    // Detect screen width and orientation
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    // Navigation menu adjustments
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    if (isMobile) {
        // Mobile-specific adjustments
        navMenu.classList.add('mobile-nav');
        navToggle.style.display = 'block';

        // Responsive layout modifications
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('mobile-section');
        });

        // Adjust home banner
        const homeBanner = document.querySelector('.home-banner');
        if (homeBanner) {
            homeBanner.style.position = 'relative';
            homeBanner.style.top = '0';
            homeBanner.style.transform = 'none';
        }
    } else {
        // Desktop layout
        navMenu.classList.remove('mobile-nav');
        navToggle.style.display = 'none';

        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('mobile-section');
        });
    }

    // Specific mobile portrait adjustments
    if (isMobile && isPortrait) {
        const homeImgWrapper = document.querySelector('.home-img-wrapper');
        if (homeImgWrapper) {
            homeImgWrapper.style.width = '100%';
            homeImgWrapper.style.maxWidth = '300px';
            homeImgWrapper.style.margin = '0 auto';
        }
    }
}

// Initial call
handleResponsiveness();

// Event listeners
window.addEventListener('resize', handleResponsiveness);
window.addEventListener('orientationchange', handleResponsiveness);