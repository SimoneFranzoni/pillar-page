// Select all the links in the side menu
const menuLinks = document.querySelectorAll('.menu-link');

// Function to add or remove the "active-link" class
function toggleActiveLink() {
    // Get the position of each section and the window height
    const sections = document.querySelectorAll('.section-link');
    const windowHeight = window.innerHeight;
  
    // Iterate through the sections
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      // Check if the section is visible in the window
      if (window.scrollY >= sectionTop - windowHeight / 2 && window.scrollY < sectionTop + sectionHeight - windowHeight / 2) {
       // Add the "active-link" class to the corresponding link in the side menu
        const targetLinkId = section.getAttribute('id');
        menuLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + targetLinkId) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', toggleActiveLink);

// 
// Retrieve the element with the class name 'progression-bar-inner' and assign it to the variable 'progressionbarinner'.
const progressionbarinner = document.querySelector('.progression-bar-inner');
 
window.addEventListener('scroll', function () {
  
    let h = document.documentElement;

    // Assign the scroll position of the document's root element 
    let st = h.scrollTop || document.body.scrollTop;
    // Assign the total height of the document's root element
    let sh = h.scrollHeight || document.body.scrollHeight;
    
    // Calculate the percentage of how far the user has scrolled by dividing the scroll position by the difference between the total height and the visible height of the document.
    let percent = st / (sh - h.clientHeight) * 100;
    let roundedpercent = Math.round(percent);
  
    progressionbarinner.style.width = percent + "%";
    // Optionally, you can display the rounded percentage inside the 'progressionbarinner' element as text, you just have to remove the comment in the HTML file.
    //progressionbarinner.innerText = roundedpercent + "%";

});

//funzione per il bottone nell'header
function mostraDiv() {
    var div = document.getElementById("responsive-menu");
    div.style.display = "block";
}

function nascondiDiv() {
    var div = document.getElementById("responsive-menu");
    div.style.display = "none";
  }