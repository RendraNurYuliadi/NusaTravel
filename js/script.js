


// Fungsi untuk pindah halaman dan section
function pindahKeSection(halaman, idSection) {
    // Gabungkan halaman dan idSection menjadi satu URL
    const url = halaman + '#' + idSection;
    
    // Pindah ke halaman dan section yang dituju
    window.location.href = url;
}



document.addEventListener('scroll', function() {
    var homeSection = document.querySelector('#home');
    var backButton = document.getElementById('back_button');

    var homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    if (homeSectionBottom <= 0) {
        backButton.classList.add('show');
    } else {
        backButton.classList.remove('show');
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById('videoContainer');
    const videoElement = document.getElementById('backgroundVideo');
    const switchButtonsContainer = document.getElementById('switchButtons');

    const videos = [
        'video/vin(1080p).mp4',
        'video/OMBAK_PANTAI__VIDEO_MENTAH_-_WAVE_FOOTAGE__Drone_View_FULL_HD(1080p).mp4',
        'video/Good-Resolution/Video-OmbakKe2-Best.mp4',
        'video/Good-Resolution/Video-Ombak-Best.mp4'
    ];

    let currentVideoIndex = 0;
    let interval;

    function createSwitchButtons() {
        videos.forEach((video, index) => {
            const button = document.createElement('button');
            if (index === 0) button.classList.add('active');
            button.addEventListener('click', () => {
                clearInterval(interval);
                switchVideo(index);
                startAutoSwitch();
            });
            switchButtonsContainer.appendChild(button);
        });
    }

    function switchVideo(index) {
        currentVideoIndex = index;
        videoElement.src = videos[index];
        updateActiveButton();
    }

    function updateActiveButton() {
        const buttons = switchButtonsContainer.querySelectorAll('button');
        buttons.forEach((button, index) => {
            button.classList.toggle('active', index === currentVideoIndex);
        });
    }

    function startAutoSwitch() {
        interval = setInterval(() => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            switchVideo(currentVideoIndex);
        }, 10000); // Switch every 10 seconds
    }

    createSwitchButtons();
    startAutoSwitch();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


const faqCards = document.querySelectorAll('.faq__card');

faqCards.forEach(card => {
    const header = card.querySelector('.faq__header');
    header.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const back_button = document.getElementById('back_button');

    const close = document.getElementById('close');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
            menu.classList.add('sticky');
            close.classList.add('sticky');

            // back_button.classList.add('back_button_sticky');
        } else {
            navbar.classList.remove('sticky');
            menu.classList.remove('sticky');
            close.classList.remove('sticky');

            // back_button.classList.remove('back_button_sticky');
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const categorySelect = document.getElementById('categorySelect');
    const boxes = document.querySelectorAll('.package-content .box');

    // Home section elements
    const homeSearchInput = document.getElementById('homeSearchInput');
    const homeSearchButton = document.getElementById('homeSearchButton');

    // Function to filter packages based on search term and category
    function filterPackages(searchTerm, category) {
        boxes.forEach(function(box) {
            const destinationName = box.querySelector('.location h4').textContent.toLowerCase();
            const categoryText = box.querySelector('.location p').textContent.toLowerCase();

            // Check if search term matches destination name and category matches selected category
            const matchesSearchTerm = destinationName.includes(searchTerm);
            const matchesCategory = category === "" || categoryText === category;

            if (matchesSearchTerm && matchesCategory) {
                box.style.display = 'block'; // Show box if it matches both criteria
            } else {
                box.style.display = 'none'; // Hide box if it doesn't match
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value.toLowerCase();
        filterPackages(searchTerm, selectedCategory);
    });

    // Event listener for dropdown change
    categorySelect.addEventListener('change', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value.toLowerCase();
        filterPackages(searchTerm, selectedCategory);
    });

    // Event listener for search icon click
    searchIcon.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value.toLowerCase();
        filterPackages(searchTerm, selectedCategory);
    });

    // Event listener for home search input
    homeSearchInput.addEventListener('input', function() {
        const searchTerm = homeSearchInput.value.toLowerCase();
        filterPackages(searchTerm, ""); // No category filter for home search input
    });

    // Event listener for home search button click
    homeSearchButton.addEventListener('click', function() {
        const searchTerm = homeSearchInput.value.toLowerCase();
        filterPackages(searchTerm, "");

        // Scroll to the #package section
        const packageSection = document.querySelector('#package');
        packageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('searchInput');
//     const searchIcon = document.getElementById('searchIcon');
//     const categorySelect = document.getElementById('categorySelect');
//     const boxes = document.querySelectorAll('.package-content .box');

//     // Function to filter packages based on search term and category
//     function filterPackages() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const selectedCategory = categorySelect.value.toLowerCase();

//         boxes.forEach(function(box) {
//             const destinationName = box.querySelector('.location h4').textContent.toLowerCase();
//             const categoryText = box.querySelector('.location p').textContent.toLowerCase();

//             // Check if search term matches destination name and category matches selected category
//             const matchesSearchTerm = destinationName.includes(searchTerm);
//             const matchesCategory = selectedCategory === "" || categoryText === selectedCategory;

//             if (matchesSearchTerm && matchesCategory) {
//                 box.style.display = 'block'; // Show box if it matches both criteria
//             } else {
//                 box.style.display = 'none'; // Hide box if it doesn't match
//             }
//         });
//     }

//     // Event listener for search input
//     searchInput.addEventListener('input', filterPackages);

//     // Event listener for dropdown change
//     categorySelect.addEventListener('change', filterPackages);

//     // Event listener for search icon click
//     searchIcon.addEventListener('click', filterPackages);



// });




const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}


// galleryAnimation(".package .package-content", [".package .package-content .box"]);





animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])


//fungsi animasi ketika di scroll di semua section

const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration: 2500,
    reset: true
})

//index.html
sr.reveal ('.section__container',{delay:100});
sr.reveal ('.faq__card',{delay:100});

sr.reveal ('.package',{delay:100});
sr.reveal ('.search-box',{delay:100});
sr.reveal ('.dropdown',{delay:100});
sr.reveal ('.title',{delay:100});
sr.reveal ('.sub',{delay:100});

sr.reveal ('.footer',{delay:100});
sr.reveal ('.detail',{delay:100});
sr.reveal ('.about-us',{delay:100});
sr.reveal ('.copyright',{delay:100});

sr.reveal ('.newsletter',{delay:100});
sr.reveal ('.news-text',{delay:100});
sr.reveal ('.send',{delay:100});

sr.reveal ('.contact-message',{delay:100});
sr.reveal ('.container-message-map',{delay:100});
sr.reveal ('.container-message',{delay:100});

sr.reveal ('.about-content',{delay:100});
sr.reveal ('.box-about',{delay:100});
sr.reveal ('.box-about-text',{delay:100});

sr.reveal ('.Lets',{delay:100});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




