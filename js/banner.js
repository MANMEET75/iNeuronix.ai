document.addEventListener("DOMContentLoaded", function () {
    const shineDiv = document.createElement('div');
    shineDiv.classList.add('shine');
    document.querySelector('.shine-effect').appendChild(shineDiv);
});

// Get elements
const getQuoteBtn = document.getElementById('getQuoteBtn');
const quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'), {});
const sendEmailBtn = document.getElementById('sendEmailBtn');

// Show the modal when "Get a Quote" is clicked
getQuoteBtn.addEventListener('click', function(event) {
  event.preventDefault();
  quoteModal.show();
});

// Send email when "Send" button is clicked
sendEmailBtn.addEventListener('click', function() {
  const query = document.getElementById('query').value;
  const email = 'contact@pixonate.com';
  const subject = 'Quote Request';
  const body = encodeURIComponent(query);

  // Open mail client with pre-filled data
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  
  // Close modal after sending the mailto link
  quoteModal.hide();
});


function toggleSubmitButton() {
    const submitBtn = document.getElementById('submitBtn');
    const cvUpload = document.getElementById('cvUpload');
    if (cvUpload.files.length > 0) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}



$(function() {
    function setupCanvas(canvasSelector) {
        var canvas = document.querySelector(canvasSelector),
            ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();

        var dots = {
            nb: 250,
            array: []
        };

        function createColorStyle(r, g, b) {
            return 'rgba(' + r + ',' + g + ',' + b + ', 1)';
        }

        function colorValue(min) {
            return Math.floor(Math.random() * 255 + min);
        }

        function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();
            this.radius = Math.random() * 2.5 + 1.5;
            this.color = new Color();
        }

        Dot.prototype = {
            draw: function() {
                ctx.beginPath();
                ctx.fillStyle = this.color.style;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        };

        function createDots() {
            for (let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }

        function moveDots() {
            for (let i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vy = -dot.vy;
                }
                if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                }

                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        function drawDots() {
            for (let i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];
                dot.draw();
            }
        }

        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveDots();
            drawDots();

            requestAnimationFrame(animateDots);
        }

        createDots();
        requestAnimationFrame(animateDots);

        // Event listener for window resizing
        window.addEventListener('resize', resizeCanvas);
    }

    // Initialize canvases for both slides
    setupCanvas('.canvas-slide-1');
    setupCanvas('.canvas-slide-2');
});


const CustomCarousel = (() => {
    const getActiveSlide = () => document.querySelector(".custom-carousel-slide.active");
    const getFirstSlide = () => document.querySelector(".custom-carousel-slider").firstElementChild;
    const getLastSlide = () => document.querySelector(".custom-carousel-slider").lastElementChild;

    const getSiblingSlide = (slide, direction) =>
        direction === "prev" ? slide.previousElementSibling : slide.nextElementSibling;

    const getNewActiveSlide = (key, activeSlide) => {
        const actions = {
            Home: getFirstSlide,
            End: getLastSlide,
            ArrowLeft: () => getSiblingSlide(activeSlide, "prev"),
            ArrowRight: () => getSiblingSlide(activeSlide, "next"),
        };
        return actions[key]?.() || null;
    };

    const updateScreen = (activeSlide) => {
        const carouselScreen = document.querySelector(".custom-image-display .custom-screen");
        const img = activeSlide.querySelector("img").cloneNode(true);
        carouselScreen.innerHTML = "";
        carouselScreen.appendChild(img);
    };

    const scrollToActiveSlide = (activeSlide) => {
        const carouselSlider = document.querySelector(".custom-carousel-slider");
        const { offsetLeft, offsetWidth } = activeSlide;
        const { clientWidth } = carouselSlider;

        carouselSlider.scrollTo({
            left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
            behavior: "smooth",
        });
    };

    const updateActiveSlideClass = (activeSlide) => {
        document
            .querySelectorAll(".custom-carousel-slide.active")
            .forEach((slide) => slide.classList.remove("active"));
        activeSlide.classList.add("active");
    };

    const updateCarousel = (activeSlide) => {
        updateActiveSlideClass(activeSlide);
        scrollToActiveSlide(activeSlide);
        updateScreen(activeSlide);
    };

    const moveSlide = (key) => {
        const activeSlide = getActiveSlide();
        const newActiveSlide = getNewActiveSlide(key, activeSlide);
        if (!newActiveSlide) return;
        updateCarousel(newActiveSlide);
    };

    const setListeners = () => {
        const buttons = document.querySelectorAll(".custom-carousel-btn");

        buttons.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const direction = event.currentTarget.classList.contains("custom-prev") ? "ArrowLeft" : "ArrowRight";
                moveSlide(direction);
            });
        });

        document.addEventListener("keydown", (event) => {
            const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
            if (keys.includes(event.key)) {
                moveSlide(event.key);
            }
        });

        document.querySelectorAll(".custom-carousel-slide").forEach((slide) => {
            slide.addEventListener("click", () => updateCarousel(slide));
        });
    };

    const init = () => {
        const firstSlide = getFirstSlide();
        updateCarousel(firstSlide);
        setListeners();
    };

    return { init };
})();

window.addEventListener("DOMContentLoaded", CustomCarousel.init);


$(function() {
    function setupCanvas(containerSelector) {
        var container = document.querySelector(containerSelector);
        var canvas = document.createElement('canvas');
        container.appendChild(canvas);
        var ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }

        resizeCanvas();

        var dots = {
            nb: 250,
            array: []
        };

        function createColorStyle(r, g, b) {
            return 'rgba(' + r + ',' + g + ',' + b + ', 1)';
        }

        function colorValue(min) {
            return Math.floor(Math.random() * 255 + min);
        }

        function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();
            this.radius = Math.random() * 2.5 + 1.5;
            this.color = new Color();
        }

        Dot.prototype = {
            draw: function() {
                ctx.beginPath();
                ctx.fillStyle = this.color.style;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        };

        function createDots() {
            for (let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }

        function moveDots() {
            for (let i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vy = -dot.vy;
                }
                if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                }

                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        function drawDots() {
            for (let i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];
                dot.draw();
            }
        }

        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveDots();
            drawDots();

            requestAnimationFrame(animateDots);
        }

        createDots();
        requestAnimationFrame(animateDots);

        // Event listener for window resizing
        window.addEventListener('resize', resizeCanvas);
    }

    // Initialize canvas animations for containers with the class 'animated-container'
    document.querySelectorAll('.animated-container').forEach(function(container) {
        setupCanvas(container);
    });
});




