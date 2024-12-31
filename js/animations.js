// Arrays for heading and paragraph texts
const headings = [
    "Explore the Future of AI with iNeuronix.ai",
    "Transforming the World with Advanced AI Solutions",
    "Innovating Tomorrow with Smart AI Technology"
];



const paragraphs = [
    "Artificial Intelligence is transforming the way we approach challenges, offering unparalleled opportunities to redefine industries. At iNeuronix.ai, we lead this transformation by delivering AI solutions designed to address real-world needs. From predictive healthcare systems that anticipate potential issues to financial tools capable of analyzing trends with precision, our technologies provide tangible value. With a focus on user-centric design, we ensure our systems are intuitive and impactful. Our mission is to empower organizations to leverage AI for greater efficiency, scalability, and innovation. By combining advanced algorithms with ethical practices, iNeuronix.ai is building a future where technology enhances human potential.",
    "In a rapidly changing world, adaptability is crucial. iNeuronix.ai provides businesses with cutting-edge AI tools to navigate this landscape effectively. Our expertise spans machine learning, natural language processing, and computer vision, enabling us to create solutions that solve complex problems. Imagine logistics platforms that optimize routes in real-time or recommendation systems that personalize experiences based on user behavior. These are just some of the capabilities we offer. By focusing on innovation and reliability, iNeuronix.ai ensures our solutions are not only powerful but also accessible to businesses of all sizes, helping them stay ahead in a competitive market.",
    "As the demand for intelligent technologies grows, iNeuronix.ai is at the forefront of this evolution. Our versatile AI systems are designed to address challenges across industries, from personalized education platforms to autonomous operations in logistics. What sets us apart is our collaborative approach. We work closely with clients to understand their needs and deliver tailored solutions. By bridging cutting-edge research with real-world applications, iNeuronix.ai is not just innovating; we’re building partnerships that redefine what’s possible, ensuring our clients are equipped for a smarter, more connected future."
];

let currentHeadingIndex = 0;
let currentParagraphIndex = 0;

setInterval(() => {
    const headingElement = document.getElementById("dynamic-heading");
    const paragraphElement = document.getElementById("dynamic-paragraph");

    // Fade out both elements
    headingElement.style.transition = "opacity 1s ease-in-out";
    paragraphElement.style.transition = "opacity 1s ease-in-out";
    headingElement.style.opacity = "0";
    paragraphElement.style.opacity = "0";

    // Wait for the fade-out effect, then change text
    setTimeout(() => {
        // Update heading and paragraph alternately
        currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
        currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;

        headingElement.innerHTML = currentHeadingIndex === 0
            ? `Explore the <span style="background: linear-gradient(to right, #408fd4 0%, #408fd4 100%);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
               font-weight: bold;">Future of AI with iNeuronix.ai</span>`
            : headings[currentHeadingIndex];

        paragraphElement.textContent = paragraphs[currentParagraphIndex];

        // Fade in both elements
        headingElement.style.opacity = "1";
        paragraphElement.style.opacity = "1";
    }, 1000); // Wait for fade-out to complete
}, 6000); // Repeat every 7 seconds




const aboutSections = [
    { line1: "About", line2: "Us" },
    { line1: "Our", line2: "Mission" },
    { line1: "What", line2: "We Do" }
];


let currentAboutIndex = 0;

setInterval(() => {
    const titleLine1 = document.getElementById("animated-title-line1");
    const titleLine2 = document.getElementById("animated-title-line2");

    // Fade out both lines
    titleLine1.style.transition = "opacity 1s ease-in-out";
    titleLine2.style.transition = "opacity 1s ease-in-out";
    titleLine1.style.opacity = "0";
    titleLine2.style.opacity = "0";

    // Wait for the fade-out effect, then change text
    setTimeout(() => {
        // Update the content alternately
        currentAboutIndex = (currentAboutIndex + 1) % aboutSections.length;

        titleLine1.textContent = aboutSections[currentAboutIndex].line1;
        titleLine2.textContent = aboutSections[currentAboutIndex].line2;

        // Fade in both lines
        titleLine1.style.opacity = "1";
        titleLine2.style.opacity = "1";
    }, 1000); // Wait for fade-out to complete
}, 6000); // Repeat every 3 seconds


jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});

