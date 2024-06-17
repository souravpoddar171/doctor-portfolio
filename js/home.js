//   prevbtn & nextbtn function for dynamic banner       
document.addEventListener('DOMContentLoaded', function() {
    let images = document.getElementById("img");
    let count = 0;
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    const img = [
        "image/physiotherapy-doctor-assisting-elderly-patient-with-leg-exercise-clinic.jpg",
        "image/pexels-pixabay-236380.jpg",
        "image/bone-fracture-foot-leg-male-patient-being-examined-by-woman-doctor-hospital.jpg"
    ];

    if (images) {
        function slideshow(c) {
            images.src = img[c];
        }

        if (prev && next) {
            prev.addEventListener("click", function() {
                count = (count + 1) % img.length;
                slideshow(count);
            });

            next.addEventListener("click", function() {
                count = (count - 1 + img.length) % img.length;
                slideshow(count);
            });
        }

        function autoslide1() {
            images.src = img[count];
            count++;
            if (count == img.length) {
                count = 0;
            }
        }

        slideshow(count);
        autoslide1();
        setInterval(autoslide1, 3000);
    } else {
        console.log("Slideshow image element not found on this page.");
    }
});




  




// sticky navbar

window.onscroll = function() {makeSticky()};

var navbar = document.querySelector('.op-navbar');
var sticky = navbar.offsetTop;

function makeSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}





  


document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryContainer = document.querySelector('.gallery-container');
    const slideWidth = 200; 
    let autoSlideInterval;

    // Check if elements exist before proceeding
    if (prevBtn && nextBtn && galleryContainer) {
        const autoSlide = () => {
            autoSlideInterval = setInterval(() => {
                const scrollLeft = galleryContainer.scrollLeft;
                const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;
        
                // Determine the direction based on the current scroll position
                const direction = scrollLeft >= maxScroll ? -1 : 1;
        
                // Scroll by the appropriate amount in the determined direction
                galleryContainer.scrollBy({
                    left: slideWidth * direction,
                    behavior: 'smooth'
                });
        
                // Reset to the beginning if reached the end
                if (direction === -1) {
                    setTimeout(() => {
                        galleryContainer.scrollTo({ left: 0, behavior: 'auto' });
                    }, 500); // Adjust the delay as needed
                }
            }, 2000); // Adjust the interval as needed (e.g., every 2 seconds)
        };
        
        // Start automatic sliding
        autoSlide();
        
        // Stop automatic sliding when mouse enters the gallery container
        galleryContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        // Resume automatic sliding when mouse leaves the gallery container
        galleryContainer.addEventListener('mouseleave', () => {
            autoSlide();
        });
        
        // Previous button click event
        prevBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({
                left: -slideWidth, // Adjust scroll amount as needed
                behavior: 'smooth'
            });
        });
        
        // Next button click event
        nextBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({
                left: slideWidth, // Adjust scroll amount as needed
                behavior: 'smooth'
            });
        });
    } else {
        // console.error("Gallery elements not found");
    }
});



// side navbar js



    var bar = document.getElementById('bar');  // Ensure you have an element with id 'bar' for the open toggle
    var sidebar = document.getElementById('sidebar');
    var navClose = document.getElementById('nav-close');

    // Function to toggle sidebar visibility
    if (bar) {
        bar.onclick = function(event) {
            sidebar.style.display = 'block';
            event.stopPropagation(); // Stop the event from propagating to the document
        };
    }

    // Function to hide the sidebar when close icon is clicked
    if (navClose) {
        navClose.onclick = function(event) {
            sidebar.style.display = 'none';
            event.stopPropagation(); // Stop the event from propagating to the document
        };
    }

    // Function to hide the sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (sidebar && navClose) {
            var isClickInsideSidebar = sidebar.contains(event.target);
            var isClickInsideToggleIcon = bar.contains(event.target);

            if (!isClickInsideSidebar && !isClickInsideToggleIcon) {
                sidebar.style.display = 'none';
            }
        }
    });

//dropdown icon click js of sidenavbar
document.querySelectorAll('.dropdown').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const isActive = this.classList.contains('active');
        const submenu = this.nextElementSibling;

        // If the clicked link is already active, remove the active class and hide its submenu
        if (isActive) {
            this.classList.remove('active');
            if (submenu) {
                submenu.style.maxHeight = null;
            }
        } else {
            // Close all submenus and deactivate all dropdown links except for sub-submenus
            document.querySelectorAll('.submenu, .sub-submenu').forEach(submenu => {
                submenu.style.maxHeight = null;
            });
            document.querySelectorAll('.dropdown').forEach(link => {
                if (!link.nextElementSibling || (!link.nextElementSibling.classList.contains('submenu') && !link.nextElementSibling.classList.contains('sub-submenu'))) {
                    link.classList.remove('active');
                }
            });

            // Add active class to the clicked link and display its submenu
            this.classList.add('active');
            if (submenu) {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }
        }
    });
});



// dropdown icon click js of sidenavbar end 


//testimonils card slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-slider .card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    // Check if elements exist before proceeding
    if (slider && cards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        let cardWidth = cards[0].offsetWidth + 20; // Adding margin
        let visibleCards = Math.floor(slider.offsetWidth / cardWidth);
        let intervalId;

        function moveSlider(direction) {
            const maxIndex = cards.length - visibleCards;
            currentIndex = (currentIndex + direction) % (maxIndex + 1);
            currentIndex = currentIndex < 0 ? maxIndex : currentIndex;

            slider.scrollTo({
                left: cardWidth * currentIndex,
                behavior: 'smooth'
            });
        }

        function startAutoSlide() {
            intervalId = setInterval(function() {
                moveSlider(1);
            }, 5000); // Change the interval as needed (milliseconds)
        }

        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        // Start auto sliding when page loads
        startAutoSlide();

        // Stop auto sliding when mouse hovers over the slider
        slider.addEventListener('mouseenter', stopAutoSlide);

        // Resume auto sliding when mouse leaves the slider
        slider.addEventListener('mouseleave', startAutoSlide);

        // Previous button click event
        prevBtn.addEventListener('click', () => moveSlider(-1));

        // Next button click event
        nextBtn.addEventListener('click', () => moveSlider(1));
    } else {
        console.log("Testimonial slider elements not found on this page.");
    }
});
// end


// faq dropdown of about doctor page start

   
// faq dropdown of about doctor page end.

