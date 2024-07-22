document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for the "View More" links
    document.getElementById("view-more-link1").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert("You're already here silly!");
    });

    document.getElementById("view-more-link2").addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("I'm still ongoing my coding journey!");
    });

    document.getElementById("view-more-link3").addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("Will be back soon!");
    });

    
});

document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector(".skills-section");
    const animationClass = "animate";

    function checkScroll() {
        const rect = skillsSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight && rect.bottom >= 0) {
            skillsSection.classList.add(animationClass);
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check
});

function funFacts() {
    const max = 3;
    const fact = Math.floor(Math.random() * max);

    let getFacts;
    switch(fact) {
        case 0:
            getFacts = "While I have a deep passion for technology, I also enjoy"
            + "hands-on hardware projects, which include building my own PC and overclocking external hardware.";
            break;
        case 1:
            getFacts = "I owned and operated a car detailing company that collaborated with the city of La Vernia, Texas," 
            + "to clean up an oil spill that affected 30 cars.";
            break;
        case 2:
            getFacts = "I graduated high school early and became a Presidential Scholar at St. Philip's College.";
            break;
        case 3: 
            getFacts = "I was part of a baseball team that won the Little League World Series in Florida.";
            break;
        default:
            getFacts = "unknown";
            break;                    
    }
    return getFacts;
}

function displayFunFact() {
    const fact = funFacts();
    document.getElementById('fun-fact-display').innerText = fact;
    const funFactBox = document.getElementById('fun-fact-box');
    funFactBox.classList.add('reveal');
}

document.getElementById('fun-fact-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    displayFunFact();
});
