document.getElementById("header-btn").addEventListener("click", function() {
    window.location = "mailto:sarkar.biswadeep07@gmail.com";
});

document.getElementById("download-resume-btn").addEventListener("click", function() {
    window.location = "https://drive.google.com/file/d/1ihJgcoTnBDQhTxlrahkiTU8Yjy3s1Dyd/view?usp=sharing";
});

document.getElementById("email-card").addEventListener("click", function() {
    window.location = "mailto:sarkar.biswadeep07@gmail.com";
});

document.getElementById("phone-card").addEventListener("click", function() {
    window.location = "tel:+919007996311";
});

document.getElementById("location-card").addEventListener("click", function() {
    window.location = "https://maps.app.goo.gl/bNwTW7WfYwCB2U8W9";
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const headSection = document.querySelector('.head-section');

    // Set initial state of the navbar
    navbar.style.boxShadow = 'none';
    navbar.style.opacity = '1';

    window.addEventListener('scroll', function() {
        const headSectionBottom = headSection.getBoundingClientRect().bottom;
        if (headSectionBottom < 0) {
            navbar.style.position = 'fixed';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            navbar.style.opacity = '1';
        }
        else{
            navbar.style.boxShadow = 'none';
            navbar.style.opacity = '1';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutMeDiv = document.querySelector('.about-me-div');

    function handleScroll() {
        const rect = aboutMeDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            aboutMeDiv.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Trigger the animation on page load if already in view
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    function handleProjectCardScroll() {
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleProjectCardScroll);

    // Trigger the animation on page load if already in view
    handleProjectCardScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const experiencesDiv = document.querySelector('.experiences-div');

    function handleExperiencesScroll() {
        const rect = experiencesDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            setTimeout(() => {
                experiencesDiv.classList.add('visible');
            }, 500); // Delay of 500ms
        }
    }

    window.addEventListener('scroll', handleExperiencesScroll);

    // Trigger the animation on page load if already in view
    handleExperiencesScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const getInTouchDiv = document.querySelector('.get-in-touch-div');

    function handleGetInTouchScroll() {
        const rect = getInTouchDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            getInTouchDiv.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleGetInTouchScroll);

    // Trigger the animation on page load if already in view
    handleGetInTouchScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsCards = document.querySelectorAll('.skills-card');

    function handleSkillsCardScroll() {
        skillsCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleSkillsCardScroll);

    // Trigger the animation on page load if already in view
    handleSkillsCardScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    const getInTouchContentDiv = document.querySelector(".get-in-touch-content-div");

    function handleScroll() {
        const rect = getInTouchContentDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            getInTouchContentDiv.classList.add("visible");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on page load
});

